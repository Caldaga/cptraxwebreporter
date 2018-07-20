<?php

	require 'sqlserver.php';
	
	$database = array("UID" => "Brandon@cptraxsql", "pwd" => "#13417Meat1001", "Database" => "Audit_Data", "ReturnDatesAsStrings" => true, "Encrypt" => 1);
	$conn = sqlsrv_connect($server, $database); 
	

?>