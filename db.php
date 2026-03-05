<?php
$host = "localhost";
$user = "root";
$pass = "root";
$db = "student_db";

$conn = mysqli_connect($host,$user,$pass,$db);

if(!$conn){
    die("Connection failed");
}
?>