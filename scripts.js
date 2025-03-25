function showSignup() {
    document.getElementById('userLoginContainer').classList.add('d-none');
    document.getElementById('signupContainer').classList.remove('d-none');
}

// Handle user login
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    Swal.fire({
        title: "Success!",
        text: "User logged in successfully!",
        icon: "success",
        confirmButtonText: "OK"
    }).then(() => {
        window.location.href = "dashboard.html";
    });
});


// Handle user signup
document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();
    Swal.fire({
        title: "Success!",
        text: "Signup successful! Please log in.",
        icon: "success",
        confirmButtonText: "OK"
    }).then(() => {
        document.getElementById('signupContainer').classList.add('d-none');
        document.getElementById('userLoginContainer').classList.remove('d-none');
    });
});

