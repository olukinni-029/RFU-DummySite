document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("adminLoginForm").addEventListener("submit", function (event) {
        event.preventDefault();

        const loginButton = event.target.querySelector("button");
        loginButton.disabled = true; // Prevent multiple clicks

        const adminEmail = document.getElementById("adminEmail").value.trim();
        const adminPassword = document.getElementById("adminPassword").value.trim();

        const defaultAdmin = {
            email: "admin@example.com",
            password: "admin123"
        };

        function isValidEmail(email) {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        }

        function safeCompare(str1, str2) {
            return str1.length === str2.length && str1.split("").every((char, index) => char === str2[index]);
        }

        if (!isValidEmail(adminEmail)) {
            Swal.fire({
                icon: "error",
                title: "Invalid Email",
                text: "Please enter a valid email address!",
            });
            loginButton.disabled = false;
            return;
        }

        if (adminEmail === defaultAdmin.email && safeCompare(adminPassword, defaultAdmin.password)) {
            Swal.fire({
                title: "Logging in...",
                text: "Please wait...",
                allowOutsideClick: false,
                didOpen: () => {
                    Swal.showLoading();
                }
            });

            setTimeout(() => {
                Swal.fire({
                    icon: "success",
                    title: "Login Successful",
                    text: "Redirecting to Admin Dashboard...",
                    timer: 2000,
                    showConfirmButton: false
                }).then(() => {
                    window.location.href = "admin_dashboard.html";
                });
            }, 1500);
        } else {
            Swal.fire({
                icon: "error",
                title: "Login Failed",
                text: "Invalid admin credentials! Please try again.",
            });
        }

        loginButton.disabled = false; // Re-enable button
    });
});
