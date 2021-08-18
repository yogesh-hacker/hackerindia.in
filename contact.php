<?php

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

//Validate first
if(empty($name)||empty($email)) 
{
    echo "Name and email are mandatory!";
}

else {
    mail("yogeshkumarjamre1@gmail.com","HaCkErInDiA Message",$message);
}
?> 
