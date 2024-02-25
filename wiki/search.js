function searchPages() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    
    // Array of HTML files to search
    const htmlFiles = ["page1.html", "page2.html", "page3.html"]; // Add more HTML files as needed
    
    // Clear previous search results
    const dropdown = document.getElementById("searchDropdown");
    dropdown.innerHTML = "";
    
    // Iterate through each HTML file
    htmlFiles.forEach(file => {
        // Fetch HTML content of the file
        fetch(file)
            .then(response => response.text())
            .then(html => {
                // Create a temporary div to parse the HTML content
                const tempDiv = document.createElement("div");
                tempDiv.innerHTML = html;
                
                // Get all text content from the HTML
                const textContent = tempDiv.textContent.toLowerCase();
                
                // Check if input exists in the text content
                if (textContent.includes(input)) {
                    // If found, add the file name to the dropdown
                    const option = document.createElement("option");
                    option.value = file;
                    dropdown.appendChild(option);
                }
            })
            .catch(error => console.error("Error fetching HTML:", error));
    });
}
