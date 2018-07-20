<?php
	
	require 'sqlconnect.php';

	$query = "SELECT * FROM dbo.Active_Directory_Profiles";
	$result = sqlsrv_query($conn, $query);
	if($result === false){
		die(sqlsrv_errors(SQLSRV_ERR_ERRORS));
	}
	
	$csvName = 'data_'.uniqid('', TRUE).'.csv';

	$fp = fopen($csvName , 'w');

	while ($export = sqlsrv_fetch_array($result, SQLSRV_FETCH_ASSOC)) {
		if (!isset($headings))
		{
			$headings = array_keys($export);
			fputcsv($fp, $headings, ',', '"');
		}
		fputcsv($fp, $export, ',', '"');
	}
	fclose($fp);

	header("Content-Type: text/csv; charset=utf-8");
	header("Content-Disposition: attachment; filename=data.csv");
	readfile($csvName);
	exit;

?>