<html>
<head>
<title>Student Registration</title>

<style>

body{
    font-family: Arial, sans-serif;
    background: linear-gradient(135deg,#667eea,#764ba2);
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
}

.container{
    background:white;
    padding:40px;
    border-radius:10px;
    width:350px;
    box-shadow:0 10px 25px rgba(0,0,0,0.2);
}

h2{
    text-align:center;
    margin-bottom:20px;
}

label{
    font-weight:bold;
}

input{
    width:100%;
    padding:10px;
    margin:8px 0 15px 0;
    border:1px solid #ccc;
    border-radius:5px;
}

input:focus{
    border-color:#667eea;
    outline:none;
}

button{
    width:100%;
    padding:12px;
    background:#667eea;
    color:white;
    border:none;
    border-radius:5px;
    font-size:16px;
    cursor:pointer;
}

button:hover{
    background:#5563d6;
}

</style>
</head>

<body>

<div class="container">

<h2>Student Registration</h2>

<form action="insert.php" method="POST">

<label>First Name</label>
<input type="text" name="fname" required>

<label>Last Name</label>
<input type="text" name="lname" required>

<label>Roll No</label>
<input type="text" name="rollno" required>

<label>Password</label>
<input type="password" name="password" required>

<label>Contact</label>
<input type="text" name="contact" required>

<button type="submit">Insert Student</button>

</form>

</div>

</body>
</html>