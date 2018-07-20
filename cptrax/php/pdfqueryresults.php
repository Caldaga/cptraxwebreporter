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
	
/* Title of PDF */

	if (isset($_GET['title'])) { $pdfTitle = $_GET['title']; }
 
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
	
require('fpdf.php');
	
	class PDF extends FPDF {
		
		// Apply VCS Logo , Title, and Columns Names to all Headers
		function Header() {
			
				$headerColumns = $_POST['selcolumns'];
				if (isset($_POST['title'])) { $title = $_POST['title']; }
		
				// Colors, line width and bold font
				$this->Image('../css/DataTables-1.10.15/images/VCS Logo.png',10,6,50,0);
				$this->SetFillColor(39,77,165);
				$this->SetTextColor(0);
				$this->SetDrawColor(0);
				$this->SetFont('Arial','B',20);
				$this->Cell(0,10,$title,0,0,'C');
				$this->Ln();
				$this->Ln();
				$this->SetFont('Arial','B',10);
				$this->SetTextColor(255);
				
				// Header
				for($i=0;$i<count($headerColumns);$i++)
					
					$this->Cell(45,8,$headerColumns[$i],1,0,'J',true,true);
					$this->Ln();
				
		}
		
		// Apply Page Number to all Footers
		function Footer() {
		
			$this->SetY(-15);
			$this->SetFont('Arial','I','8');
			//$this->Cell(0,10,'Page '.$this->PageNo().'/{nb}',0,0,'C');
		
		}
		
		function sqlTable($aColumns, $sqlResult) {
			
			$width = 45;
		
			//$this->Header($columns,$width);
			
			while ($row = sqlsrv_fetch_array($sqlResult, SQLSRV_FETCH_ASSOC)) {
				
				for ( $x=0 ; $x<count($aColumns) ; $x++ ) {
					
					// Declare Variables
					$fontSize = 8;
					
					// Color and font restoration
					$this->SetFillColor(224,235,255);
					$this->SetTextColor(0);
					$this->SetFont('');
					$this->SetFont('Arial','',$fontSize);
					
					// Adjust font size to fit cell width
					while ($this->GetStringWidth($row[$aColumns[$x]]) > $width) {
					
						$fontSize--;
						$this->SetFont('Arial','',$fontSize);
					
					}
					
					// Fill with data
					$this->Cell($width,10,$row[$aColumns[$x]],1);
					$pageHeight = $pageHeight - 10;
				
				}
					
				$this->Ln();
			
			}
			
		}
	
	}
	
	$pageSizeH = (count($aColumns) * 45)+20;
	$pageSizeW = $pageSizeH * .6666666666;
	$pageArray = array($pageSizeH,$pageSizeW);
	
	if ($pageSizeH < 420) {
		
		$pdf = new PDF('L','mm','A3');
		
	}
	
	else {
		
		$pdf = new PDF('L','mm',$pageArray);
		
	}
	
	$pdf->AliasNbPages();
	$pdf->AddPage();
	$pdf->sqlTable($aColumns, $sqlResult);
	$pdf->Output('D', $pdfTitle.'.pdf');

?>