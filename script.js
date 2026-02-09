// ---------------- FORM VALIDATION ----------------

function validateForm() {
    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let msg = document.getElementById("message");

    // All fields mandatory
    if (!username || !email || !phone || !password || !confirmPassword) {
        msg.innerHTML = "All fields are mandatory!";
        msg.style.color = "red";
        return;
    }

    // Phone validation
    let phonePattern = /^[0-9]{10}$/;
    if (!phonePattern.test(phone)) {
        msg.innerHTML = "Phone number must be 10 digits";
        msg.style.color = "red";
        return;
    }

    // Email validation
    let emailPattern = /^[a-zA-Z]+@[a-zA-Z]{3}\.[a-zA-Z]{2,3}$/;
    if (!emailPattern.test(email)) {
        msg.innerHTML = "Invalid email format";
        msg.style.color = "red";
        return;
    }

    // Password validation
    let passPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[&$#@]).{7,}$/;
    if (!passPattern.test(password)) {
        msg.innerHTML = "Password must contain 1 capital, 1 digit, 1 special char (&,$,#,@)";
        msg.style.color = "red";
        return;
    }

    // Confirm password
    if (password !== confirmPassword) {
        msg.innerHTML = "Passwords do not match";
        msg.style.color = "red";
        return;
    }

    msg.innerHTML = "Registration Successful!";
    msg.style.color = "green";
}

// ---------------- DOM MANIPULATION ----------------

// Change image source
function changeImage() {
    document.getElementById("myImage").src = "img2.jpg";
}

// getElementsByTagName
let labels = document.getElementsByTagName("label");

// getElementsByClassName
let inputs = document.getElementsByClassName("inputField");

// Add text node
let newPara = document.createElement("p");
let textNode = document.createTextNode("Welcome Student!");
newPara.appendChild(textNode);
document.body.appendChild(newPara);

// Delete node
setTimeout(() => {
    if (newPara) {
        newPara.remove();
    }
}, 5000);

// ---------------- jQuery ----------------

$(document).ready(function () {

    // Change button text
    $("#jqBtn").text("jQuery Activated");

    // Set background image
    $("body").css("background-image", "url('bg.jpg')");

    // Add attribute
    $("#username").attr("placeholder", "Enter username");

    // Access form data
    $("#submitBtn").click(function () {
        let name = $("#username").val();
        console.log("Username via jQuery:", name);
    });

    // Ajax demo
    $("#jqBtn").click(function () {
        $.ajax({
            url: "https://jsonplaceholder.typicode.com/posts/1",
            type: "GET",
            success: function (data) {
                alert("Ajax Success: " + data.title);
            }
        });
    });

});
