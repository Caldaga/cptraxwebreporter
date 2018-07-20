<?php

	require 'sqlconnect.php';
	
/* Required PHP for connecting to MSSQL */

	require 'sqlconnect.php';
	
/* Bringing in canned report filters value */

	$cannedFilter = $_POST['cannedfilter'];

/* Bringing in User Selected Columns */
	$aColumns = $_POST['selcolumns'];
	$aColumns = explode(",", $aColumns);
	array_pop($aColumns);
	
/* Custom Query Custom Column Filters */

	$aFilColumns = $_POST['filcolumns'];
	$aFilColumns = explode(",", $aFilColumns);
	array_pop($aFilColumns);
	
	$aFilExpressions = $_POST['filexpressions'];
	$aFilExpressions = explode(",", $aFilExpressions);
	array_pop($aFilExpressions);
	
	$aFilValues = $_POST['filvalues'];
	$aFilValues = explode(",", $aFilValues);
	array_pop($aFilValues);
 
/* Indexed column (used for fast and accurate table cardinality) */
	$sIndexColumn = "GUID";
 
/* DB table to use */
	$sTable = $_POST['table'];
 
/*
* Local functions
*/
	function fatal_error ( $sErrorMessage = '' ) {
		header( $_SERVER['SERVER_PROTOCOL'] .' 500 Internal Server Error' );
		die( $sErrorMessage );
	}
 
/* Ordering */

	$sOrder = "";
	if ( isset( $_POST['order'] ) ) {
		$sOrder = "ORDER BY ";
		if ( $_POST['columns'][0]['orderable'] == "true" ) {
			$sOrder .= "".$aColumns[ intval( $_POST['order'][0]['column'] ) ]." ".
			($_POST['order'][0]['dir']==='asc' ? 'asc' : 'desc');
		}
	}
 
/* escape function */

	function mssql_escape($data) {
		if(is_numeric($data))
		return $data;
		$unpacked = unpack('H*hex', $data);
		return '0x' . $unpacked['hex'];
	}
 
/* Filtering - Global Search */

	$where = "";
	if ( isset($_POST['search']['value']) && $_POST['search']['value'] != "" ) {
		$where = "WHERE (";
		for ( $i=0 ; $i<count($aColumns) ; $i++ ) {
			$where .= $aColumns[$i]." LIKE '%".addslashes( $_POST['search']['value'] )."%' OR ";
		}
		$where = substr_replace( $where, "", -3 );
		$where .= ')';
	}
	
/* Individual column filtering */

	for ( $i=0 ; $i<count($aColumns) ; $i++ ) {
		if ( isset($_POST['columns'][$i]) && $_POST['columns'][$i]['searchable'] == "true" && $_POST['columns'][$i]['search']['value'] != '' ) {
			if ( $_POST['columns'][$i]['data'] != 'TimeOccurred' ) {
				if ( $where == "" ) {
					$where = "WHERE ";
				}
				else {
					$where .= " AND ";
				}
				$where .= $aColumns[$i]." LIKE '%".$_POST['columns'][$i]['search']['value']."%' ";
			}
			else {
			
				$dateArrayColumn = explode(' ', $_POST['columns'][$i]['search']['value']);
				$startDateColumn = ($dateArrayColumn[0]." ".$dateArrayColumn[1]);
				$endDateColumn = ($dateArrayColumn[3]." ".$dateArrayColumn[4]);
				
				if ( $where == "" ) {
					$where = "WHERE (TimeOccurred >= "."'".$startDateColumn."'"." AND TimeOccurred <= "."'".$endDateColumn."')";
				}
				else {
					$where .= " AND (TimeOccurred >= "."'".$startDateColumn."'"." AND TimeOccurred <= "."'".$endDateColumn."')";
				}
			
			}
		}
	}
	
/* Add the custom query custom column filters */

	for ( $x=0 ; $x<count($aFilColumns) ; $x++ ) {
		if ( $where == "" ) {
			$where = "WHERE ";
		}
		elseif ((strpos($where, $aFilColumns[$x]) == true) && (strpos($aFilExpressions[$x], 'not') == true)) {
			$where .= " OR ";
		}
		else {
			$where .= " AND ";
		}
		$where .= $aFilColumns[$x]." ".$aFilExpressions[$x]." '%".$aFilValues[$x]."%'";
	}
	
/* Add the custom Date/Time filter */
	
	if (strpos($_POST['datestart'], ":") == true) {
		
		if ( $where == "" ) {
			$where = "WHERE (TimeOccurred >= "."'".$_POST['datestart']."'"." AND TimeOccurred <= "."'".$_POST['dateend']."')";
		}
		else {
			$where .= " AND (TimeOccurred >= "."'".$_POST['datestart']."'"." AND TimeOccurred <= "."'".$_POST['dateend']."')";
		}
		
	}
	else {
	
		if ( $where == "" ) {
			$where = "WHERE (TimeOccurred >= "."'".$_POST['datestart2']."'"." AND TimeOccurred <= "."'".$_POST['dateend2']."')";
		}
		else {
			$where .= " AND (TimeOccurred >= "."'".$_POST['datestart2']."'"." AND TimeOccurred <= "."'".$_POST['dateend2']."')";
		}
	
	}
	
/* Canned Reports Switch Statement */

	require 'cannedreports.php';
	
	$sqlQuery = "SELECT ".implode(', ', $aColumns)." FROM $sTable $where";
	$sqlResult = sqlsrv_query($conn, $sqlQuery);
	if($sqlResult === false){
		die(sqlsrv_errors(SQLSRV_ERR_ERRORS));
	}
	
/* create a file pointer connected to the output stream */

	$output = fopen('php://output', 'w');
	
/* loop over the rows, outputting them */
	
	fputcsv($output, $columns);
	
	while ($row = sqlsrv_fetch_array($sqlResult, SQLSRV_FETCH_ASSOC)) {
		
		fputcsv($output, array_values($row));
		
	}
	
	fclose($output);

?>