function togglePassword() {
    const password = document.getElementById("password");
    password.type = password.type === "password" ? "text" : "password";
}

function login() {
    const role = document.getElementById("role").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (role === "admin" && username === "admin" && password === "1234") {
        window.location.href = "dashboard.html";
    } 
    else if (role === "student" && username === "student" && password === "1234") {
        window.location.href = "dashboard.html";
    } 
    else {
        document.getElementById("error").innerText = "Invalid Credentials!";
    }
}