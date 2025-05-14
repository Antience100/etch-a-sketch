const gridContainer = document.getElementById("grid-container");

function buildGrid() {
    for (let i = 0; i < 256; i++) {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        gridContainer.appendChild(gridItem);
    }
}

buildGrid();
