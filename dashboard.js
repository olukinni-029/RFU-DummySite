document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".start-request").forEach(button => {
        button.addEventListener("click", function () {
            const targetPage = this.getAttribute("data-page");
            window.location.href = targetPage; // Redirect to the specified page
        });
    });
});