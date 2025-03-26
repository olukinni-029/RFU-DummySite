// Show Signup Form
function showSignup() {
    document.getElementById('userLoginContainer').classList.add('d-none');
    document.getElementById('signupContainer').classList.remove('d-none');
}

// Handle User Login
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const loginButton = event.target.querySelector("button");
    loginButton.disabled = true;

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    // Hardcoded credentials for demo
    const validEmail = "user@example.com";
    const validPassword = "user123";

    if (email === validEmail && password === validPassword) {
        Swal.fire({
            title: "Success!",
            text: "User logged in successfully!",
            icon: "success",
            confirmButtonText: "OK"
        }).then(() => {
            window.location.href = "./dashboard.html";
        });
    } else {
        Swal.fire({
            title: "Error",
            text: "Invalid email or password!",
            icon: "error",
            confirmButtonText: "OK"
        });
    }
    loginButton.disabled = false;
});

// Handle User Signup
document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("signupName").value.trim();
    const email = document.getElementById("signupEmail").value.trim();
    const password = document.getElementById("signupPassword").value.trim();

    if (name === "" || email === "" || password === "") {
        Swal.fire({
            title: "Error",
            text: "All fields are required!",
            icon: "error",
            confirmButtonText: "OK"
        });
        return;
    }

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
