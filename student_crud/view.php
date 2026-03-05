<?php
include "db.php";

$result = mysqli_query($conn,"SELECT * FROM students");
?>

<html>
<head>
<title>Student List</title>

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
max-width:900px;
margin:auto;
box-shadow:0 10px 25px rgba(0,0,0,0.2);
}

h2{
text-align:center;
margin-bottom:20px;
}

table{
width:100%;
border-collapse:collapse;
}

th,td{
padding:12px;
border-bottom:1px solid #ddd;
text-align:center;
}

th{
background:#667eea;
color:white;
}

tr:hover{
background:#f5f5f5;
}

.btn{
padding:6px 12px;
border:none;
border-radius:5px;
text-decoration:none;
color:white;
}

.delete{
background:#e74c3c;
}

.update{
background:#27ae60;
}

.back{
display:inline-block;
margin-bottom:20px;
padding:8px 15px;
background:#667eea;
color:white;
border-radius:5px;
text-decoration:none;
}

</style>
</head>

<body>

<div class="container">

<h2>Registered Students</h2>

<a class="back" href="index.php">+ Add Student</a>

<table>

<tr>
<th>ID</th>
<th>First Name</th>
<th>Last Name</th>
<th>Roll No</th>
<th>Contact</th>
<th>Actions</th>
</tr>

<?php
while($row=mysqli_fetch_assoc($result)){
?>

<tr>

<td><?php echo $row['id']; ?></td>
<td><?php echo $row['firstname']; ?></td>
<td><?php echo $row['lastname']; ?></td>
<td><?php echo $row['rollno']; ?></td>
<td><?php echo $row['contact']; ?></td>

<td>

<a class="btn update" href="update.php?id=<?php echo $row['id']; ?>">Update</a>

<a class="btn delete" href="delete.php?id=<?php echo $row['id']; ?>">Delete</a>

</td>

</tr>

<?php } ?>

</table>

</div>

</body>
</html>