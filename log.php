<?php
$ip_address = $_SERVER['REMOTE_ADDR'];
$date = date('Y-m-d H:i:s');
$log_file = fopen("log.txt", "a");
fwrite($log_file, "$ip_address - $daten");
fclose($log_file);
?>
