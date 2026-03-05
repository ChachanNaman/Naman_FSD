<?php
include "db.php";

$fname=$_POST['fname'];
$lname=$_POST['lname'];
$roll=$_POST['rollno'];
$password=$_POST['password'];
$contact=$_POST['contact'];

mysqli_query($conn,"INSERT INTO students(firstname,lastname,rollno,password,contact)
VALUES('$fname','$lname','$roll','$password','$contact')");

header("Location:view.php");
?>