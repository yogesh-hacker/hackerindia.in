<?php

// Get Variables

$name = $_REQUEST['name'];
$email = $_REQUEST['email'];
$phone = $_REQUEST['phone'];
$message = $_REQUEST['message'];

// Check Fields

if (empty($name) || empty($email) || empty($phone) || empty($message)) 
{
    echo "Please Fill Out All The Fields";
}

else 
{
    mail("yogeshkumarjamre1@gmail.com", "Hacker India Email", $message, "From: $name <$email>");
    echo "<script>alert(your massage sent successfully!)</script>"
}
?>
