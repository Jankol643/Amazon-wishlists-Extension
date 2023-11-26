<?php
// This is in the PHP file and sends a Javascript alert to the client

$message = "wrong answer" . $_REQUEST["uname"];
echo "<script type='text/javascript'>alert('$message');</script>";
?>