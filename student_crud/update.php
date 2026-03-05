<?php
include "db.php";

$id = $_GET['id'];

$result = mysqli_query($conn,"SELECT * FROM students WHERE id=$id");
$row = mysqli_fetch_assoc($result);

if(isset($_POST['update']))
{
    $fname=$_POST['fname'];
    $lname=$_POST['lname'];
    $roll=$_POST['rollno'];
    $password=$_POST['password'];
    $contact=$_POST['contact'];

    mysqli_query($conn,"UPDATE students SET
    firstname='$fname',
    lastname='$lname',
    rollno='$roll',
    password='$password',
    contact='$contact'
    WHERE id=$id");

    header("Location:view.php");
}
?>

<html>
<head>
<title>Update Student</title>

<style>

body{
font-family:Arial;
background:linear-gradient(135deg,#667eea,#764ba2);
padding:40px;
}

.container{
background:white;
padding:30px;
border-radius:10px;
width:400px;
margin:auto;
box-shadow:0 10px 20px rgba(0,0,0,0.2);
}

h2{
text-align:center;
}

input{
width:100%;
padding:10px;
margin:10px 0;
border:1px solid #ccc;
border-radius:5px;
}

button{
width:100%;
padding:10px;
background:#27ae60;
color:white;
border:none;
border-radius:5px;
font-size:16px;
cursor:pointer;
}

button:hover{
background:#219150;
}

</style>

</head>

<body>

<div class="container">

<h2>Update Student</h2>

<form method="POST">

<input type="text" name="fname" value="<?php echo $row['firstname']; ?>" required>

<input type="text" name="lname" value="<?php echo $row['lastname']; ?>" required>

<input type="text" name="rollno" value="<?php echo $row['rollno']; ?>" required>

<input type="text" name="password" value="<?php echo $row['password']; ?>" required>

<input type="text" name="contact" value="<?php echo $row['contact']; ?>" required>

<button type="submit" name="update">Update Student</button>

</form>

</div>

</body>
</html>