<?php

$name = $_POST['name'];
$visitor_email = $_POST['email'];
$message = $_POST['message'];

if (empty($name)
 || empty($visitor_email) || empty($message))
{
echo "Hello";
}


else 
{
mail("yogeshkumarjamre1@gmail.com","hello");
}
?> 
