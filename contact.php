<?php

// Get Variables

$name = $_REQUEST['name'];
$email = $_REQUEST['email'];
$phone = $_REQUEST['phone'];
$massage = $_REQUEST['massage'];

// Check Fields

if (empty($name) || empty($email) || empty($phone) || empty($massage)) 
{
    echo "Please Fill Out All The Fields";
}

else 
{
    mail("yogeshkumarjamre1@gmail.com", "Hacker India Email", $massage, "From: $name <$email>");
    echo "<script>alert(your massage sent successfully!)</script>"
}
?>