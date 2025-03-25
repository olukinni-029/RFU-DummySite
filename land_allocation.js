document.addEventListener("DOMContentLoaded", function () {
    loadPendingRequests();
});

const pendingRequests = [
    { email: "user1@example.com", project: "Corn Farming", landSize: 5, status: "Pending" },
    { email: "user2@example.com", project: "Rice Plantation", landSize: 8, status: "Pending" }
];

const availableLands = [
    { id: 1, location: "Sector A - Plot 5", size: 5, allocated: false },
    { id: 2, location: "Sector B - Plot 3", size: 10, allocated: false },
    { id: 3, location: "Sector C - Plot 2", size: 8, allocated: false }
];

function loadPendingRequests() {
    const tableBody = document.getElementById("allocationTableBody");
    tableBody.innerHTML = "";

    pendingRequests.forEach((request, index) => {
        const row = document.createElement("tr");

        const landOptions = availableLands
            .filter(land => !land.allocated && land.size >= request.landSize)
            .map(land => `<option value="${land.id}">${land.location} (${land.size} acres)</option>`)
            .join("");

        row.innerHTML = `
            <td>${request.email}</td>
            <td>${request.project}</td>
            <td>${request.landSize} acres</td>
            <td id="status-${index}">${request.status}</td>
            <td>
                <select id="landSelect-${index}" class="form-select">
                    <option value="">Select Land</option>
                    ${landOptions}
                </select>
                <button class="btn btn-allocate mt-2" onclick="allocateLand(${index})">Allocate</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

function allocateLand(index) {
    const selectedLandId = document.getElementById(`landSelect-${index}`).value;
    if (!selectedLandId) {
        alert("Please select a land plot to allocate.");
        return;
    }

    const selectedLand = availableLands.find(land => land.id == selectedLandId);
    if (selectedLand) {
        selectedLand.allocated = true;
        document.getElementById(`status-${index}`).innerText = "Allocated";
        alert(`Land allocated: ${selectedLand.location}`);
    }
}

function confirmAllocation() {
    alert("All selected land plots have been allocated successfully!");
}
