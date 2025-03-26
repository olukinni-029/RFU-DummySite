document.addEventListener("DOMContentLoaded", function () {
    const userRequests = JSON.parse(localStorage.getItem("userRequests")) || [
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
        }
    ];

    const tableBody = document.getElementById("requestTableBody");

    function saveUserRequests() {
        localStorage.setItem("userRequests", JSON.stringify(userRequests));
    }

    function loadUserRequests() {
        tableBody.innerHTML = "";
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
                <td><span id="status-${index}" class="status ${request.status.toLowerCase()}">${request.status}</span></td>
                <td>
                    <button class="btn btn-primary btn-sm" onclick="allocateField(${index})">Allocate</button>
                </td>
                <td>
                    <button id="approve-btn-${index}" class="btn btn-success btn-sm" onclick="approveRequest(${index})" ${request.status === "Approved" ? "disabled" : ""}>
                        ${request.status === "Approved" ? "Approved" : "Approve"}
                    </button>
                </td>
            `;
            tableBody.appendChild(row);
        });
    }

    window.approveRequest = function (index) {
        Swal.fire({
            title: "Approve Request?",
            text: `Are you sure you want to approve ${userRequests[index].requestor}'s request?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#198754",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Approve"
        }).then((result) => {
            if (result.isConfirmed) {
                userRequests[index].status = "Approved";
                saveUserRequests();

                // Update the button text in the table
                const approveButton = document.querySelector(`#approve-btn-${index}`);
                if (approveButton) {
                    approveButton.textContent = "Approved";
                    approveButton.classList.remove("btn-success"); // Remove green color
                    approveButton.classList.add("btn-secondary"); // Change to gray
                    approveButton.disabled = true;
                }

                // Change the status text in the table
                const statusCell = document.querySelector(`#status-${index}`);
                if (statusCell) {
                    statusCell.textContent = "Approved";
                    statusCell.classList.remove("pending");
                    statusCell.classList.add("approved");
                }

                Swal.fire("Approved!", "The request has been approved.", "success");
            }
        });
    };

    window.allocateField = function (index) {
        const selectedRequest = userRequests[index];

        if (!selectedRequest.email || !selectedRequest.project) {
            Swal.fire("Error", "Invalid request details.", "error");
            return;
        }

        window.location.href = `land_allocation.html?email=${encodeURIComponent(selectedRequest.email)}&project=${encodeURIComponent(selectedRequest.project)}&landSize=${encodeURIComponent(selectedRequest.landSize)}&requestor=${encodeURIComponent(selectedRequest.requestor)}&location=${encodeURIComponent(selectedRequest.location)}`;
    };

    loadUserRequests();
});
