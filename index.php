<?php
	// Include and instantiate the class.
	require_once 'Mobile_Detect.php';
	$detect = new Mobile_Detect;
	 
	// Any mobile device (phones or tablets).
	if ( $detect->isMobile() ) {
		header("Location: http://m.daiva.mx/home/index.html");
	} else {
		header("Location: http://www.daiva.mx/home/index.html");
	}
?>