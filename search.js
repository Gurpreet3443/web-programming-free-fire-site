// scripts/search.js

function filterData() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const category = document.getElementById("categorySelect").value;
    const resultsContainer = document.getElementById("results");

    // Clear previous results
    resultsContainer.innerHTML = "";

    // Filter data based on the input and selected category
    const filteredData = freeFireData.filter(item => {
        const matchesCategory = category === "all" || item.type === category;
        const matchesSearch = item.name.toLowerCase().includes(searchInput);
        return matchesCategory && matchesSearch;
    });

    // Display filtered results
    if (filteredData.length > 0) {
        filteredData.forEach(item => {
            const itemElement = document.createElement("div");
            itemElement.classList.add("result-item");
            itemElement.innerHTML = `
                <h3>${item.name}</h3>
                <p>${item.description}</p>
            `;
            resultsContainer.appendChild(itemElement);
        });
    } else {
        resultsContainer.innerHTML = "<p>No results found.</p>";
    }
}
