const gridContainer = document.getElementById("grid-container");
const gridSizeBtn = document.getElementById("grid-size");
const gridClearBtn = document.getElementById("clear-grid");

gridClearBtn.addEventListener("click", () => {clearGrid();});

function buildGrid() {
    for (let i = 0; i < 256; i++) {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        gridContainer.appendChild(gridItem);
        gridItem.addEventListener("mouseover", () => {gridItem.style.backgroundColor="gray";});
    };
};

function clearGrid() {
    const gridItemsToClear = document.querySelectorAll(".grid-item");
    gridItemsToClear.forEach(gridItemToClear => {
        gridItemToClear.style.backgroundColor="white";
    });
};

buildGrid();