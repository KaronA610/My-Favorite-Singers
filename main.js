// Ensure script runs after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    
    // JSON array containing favorite singers and their details
    const singersJSON = [
        {
            "name": "NBA Youngboy",
            "hometown": "Baton Rogue,LA",
            "bestSong": "Live"
        },
        {
            "name": "Drake",
            "hometown": "Ontario,CA",
            "bestSong": "Hotline Bling"
        },
        {
            "name": "Lil Baby",
            "hometown": "Atlanta,GA",
            "bestSong": "All In"
        },
        {
            "name": "Rod Wave",
            "hometown": "Petersburg, FL",
            "bestSong": "Fight The Feeling"
        }
    ];

    // Reference the table body element where rows should be placed
    const tableBody = document.getElementById("singers-table-body");

    // Clear any hardcoded placeholder rows safely
    tableBody.innerHTML = "";

    // Loop through the JSON array and construct table rows
    singersJSON.forEach(singer => {
        // Create an HTML row fragment using template literals
        const rowHTML = `
            <tr>
                <td class="fw-bold">${singer.name}</td>
                <td>${singer.hometown}</td>
                <td><span class="badge bg-secondary p-2">🎵 ${singer.bestSong}</span></td>
            </tr>
        `;
        
        // Append the new row markup to the table body
        tableBody.insertAdjacentHTML("beforeend", rowHTML);
    });
});