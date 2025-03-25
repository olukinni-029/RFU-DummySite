document.addEventListener("DOMContentLoaded", function () {
    // Simulated data for user requests (Replace with backend data)
    const userRequests = [
        {
            email: "user1@example.com",
            project: "Project Alpha",
            season: "Summer",
            year: "2024",
            budget: "$5000",
            landSize: "10 acres",
            requestor: "John Doe",
            startDate: "2024-06-01",
            duration: "60",
            expectedVacation: "2024-08-01",
            trialTitle: "Soil Testing",
            agrochemicals: "Pesticide A",
            fertilizer: "Urea",
            irrigationDuration: "30 mins",
            irrigationFrequency: "7",
            irrigationIntensity: "20 mm",
            specialRequirements: "None",
            location: "Farm A",
            status: "Pending",
            allocatedLand: "N/A",
        },
        {
            email: "user2@example.com",
            project: "Project Beta",
            season: "Winter",
            year: "2025",
            budget: "$8000",
            landSize: "15 acres",
            requestor: "Jane Smith",
            startDate: "2025-01-10",
            duration: "90",
            expectedVacation: "2025-04-10",
            trialTitle: "Crop Growth Analysis",
            agrochemicals: "Pesticide B",
            fertilizer: "Compost",
            irrigationDuration: "45 mins",
            irrigationFrequency: "5",
            irrigationIntensity: "25 mm",
            specialRequirements: "Organic Only",
            location: "Farm B",
            status: "Pending",
            allocatedLand: "N/A",
        }
    ];

    const tableBody = document.getElementById("requestTableBody");

    // Populate the table with user requests
    function loadUserRequests() {
        tableBody.innerHTML = ""; // Clear table before populating
        userRequests.forEach((request, index) => {
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${request.email}</td>
                <td>${request.project}</td>
                <td>${request.season}</td>
                <td>${request.year}</td>
                <td>${request.budget}</td>
                <td>${request.landSize}</td>
                <td>${request.requestor}</td>
                <td>${request.startDate}</td>
                <td>${request.duration}</td>
                <td>${request.expectedVacation}</td>
                <td>${request.trialTitle}</td>
                <td>${request.agrochemicals}</td>
                <td>${request.fertilizer}</td>
                <td>${request.irrigationDuration}</td>
                <td>${request.irrigationFrequency}</td>
                <td>${request.irrigationIntensity}</td>
                <td>${request.specialRequirements}</td>
                <td>${request.location}</td>
                <td><span class="status ${request.status.toLowerCase()}">${request.status}</span></td>
                <td>${request.allocatedLand}</td>
                <td>
                    <button class="btn btn-success btn-sm" onclick="approveRequest(${index})">Approve</button>
                </td>
            `;
            tableBody.appendChild(row);
        });
    }

    // Redirect to land allocation page when "Approve" is clicked
    window.approveRequest = function (index) {
        const selectedRequest = userRequests[index];

        // Redirect to land allocation page with user details in the URL
        window.location.href = `land_allocation.html?email=${encodeURIComponent(selectedRequest.email)}&project=${encodeURIComponent(selectedRequest.project)}&landSize=${encodeURIComponent(selectedRequest.landSize)}&requestor=${encodeURIComponent(selectedRequest.requestor)}&location=${encodeURIComponent(selectedRequest.location)}`;
    };

    // Show different sections on sidebar click
    window.showSection = function (sectionId) {
        document.querySelectorAll(".main-content").forEach(section => {
            section.style.display = "none";
        });
        document.getElementById(sectionId).style.display = "block";
    };

    // Load requests when page loads
    loadUserRequests();
});
