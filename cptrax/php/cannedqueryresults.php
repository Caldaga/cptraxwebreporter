<?php

/* Required PHP for connecting to MSSQL */

	require 'sqlconnect.php';
	
/* Bringing in canned report filters value */

	$cannedFilter = $_POST['cannedfilter'];

// Bringing in User Selected Columns
	$aColumns = $_POST['selcolumns'];
	$aColumns = explode(",", $aColumns);
	array_pop($aColumns);
 
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
			if ( $_POST['columns'][$i]['data'] != 'TimeOccurred.date.' ) {
				if ( $where == "" ) {
					$where = "WHERE ";
				}
				else {
					$where .= " AND ";
				}
				$where .= $aColumns[$i]." LIKE '%".addslashes($_POST['columns'][$i]['search']['value'])."%' ";
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
 
/* Paging */
	$top = (isset($_POST['start']))?((int)$_POST['start']):0 ;   
	$limit = (isset($_POST['length']))?((int)$_POST['length'] ):5;
	$sQuery = "SELECT TOP $limit ".implode(', ', $aColumns)." FROM $sTable $where ".(($where=="")?" WHERE ":" AND ")." $sIndexColumn NOT IN ( SELECT TOP $top $sIndexColumn FROM $sTable $sOrder ) $sOrder";
	$rResult = sqlsrv_query($conn, $sQuery);
	if($rResult === false){
		die(sqlsrv_errors(SQLSRV_ERR_ERRORS));
	}
 
/* Data set length after filtering */
	$sQueryCnt = "SELECT * FROM $sTable $where";
	$rResultCnt = sqlsrv_query($conn, $sQueryCnt, array(), array("Scrollable" => SQLSRV_CURSOR_KEYSET));
	$iFilteredTotal = sqlsrv_num_rows( $rResultCnt );
 
/* Total data set length */
	$sQuery = "SELECT COUNT(GUID) FROM $sTable";
	$rResultTotal = sqlsrv_query($conn, $sQuery, array(), array("Scrollable" => SQLSRV_CURSOR_KEYSET));
	$aResultTotal = sqlsrv_fetch_array($rResultTotal, SQLSRV_FETCH_NUMERIC);
	$iTotal = $aResultTotal[0];
 
/* Output */
	$output = array(
		"draw" => intval($_POST['draw']),
		"recordsTotal" => $iTotal,
		"recordsFiltered" => $iFilteredTotal,
		"data" => array()
	);
 
	while ( $aRow = sqlsrv_fetch_array( $rResult, SQLSRV_FETCH_ASSOC) ) {
		$row = array();
		for ( $i=0 ; $i<count($aColumns) ; $i++ ) {
			$row[$aColumns[$i]] = $aRow[ $aColumns[$i] ];
		}
		$output['data'][] = $row;
	}
	
	echo json_encode( $output );
 
?>