document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".start-request").forEach(button => {
        button.addEventListener("click", function () {
            const targetPage = this.getAttribute("data-page");
            window.location.href = targetPage; // Redirect to the specified page
        });
    });
});

document.getElementById("logoutBtn").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default link action
    window.location.href = "index.html"; // Redirect to the login page
});