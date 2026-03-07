function login() {
    let role = document.getElementById("role").value;
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // Simple Demo Credentials
    if (role === "admin" && username === "admin" && password === "1234") {
        openDashboard("Admin");
    } 
    else if (role === "student" && username === "student" && password === "1234") {
        openDashboard("Student");
    } 
    else {
        document.getElementById("error").innerText = "Invalid Credentials!";
    }
}

function openDashboard(userRole) {
    document.getElementById("loginPage").style.display = "none";
    document.getElementById("dashboardPage").style.display = "block";
    showSection("home");
}

function showSection(sectionId) {
    let sections = document.querySelectorAll(".section");
    sections.forEach(section => section.style.display = "none");
    document.getElementById(sectionId).style.display = "block";
}

function logout() {
    location.reload();
}
window.addEventListener("scroll", function() {
    const element = document.querySelector(".fade-in");
    const position = element.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (position < screenHeight - 100) {
        element.classList.add("show");
    }
});