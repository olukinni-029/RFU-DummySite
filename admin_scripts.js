document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("adminLoginForm").addEventListener("submit", function (event) {
        event.preventDefault();

        const adminEmail = document.getElementById("adminEmail").value.trim();
        const adminPassword = document.getElementById("adminPassword").value.trim();

        // Simulated admin credentials (replace with backend authentication)
        const defaultAdmin = {
            email: "admin@example.com",
            password: "admin123"
        };

        if (adminEmail === defaultAdmin.email && adminPassword === defaultAdmin.password) {
            Swal.fire({
                title: "Logging in...",
                text: "Please wait...",
                allowOutsideClick: false,
                didOpen: () => {
                    Swal.showLoading();
                }
            });

            // Simulate a short delay before redirection (for UX)
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
    });
});
