const gridContainer = document.getElementById("grid-container");
const gridSizeBtn = document.getElementById("grid-size");
const gridClearBtn = document.getElementById("clear-grid");

// Set maximum default player grid size choice to 100
let playerSizeChoice = 100;
// Set maximum default grid size to 10000 grid items (100 x 100)
let gridMax = 10000;

gridClearBtn.addEventListener("click", () => {
  clearGrid();
});
gridSizeBtn.addEventListener("click", () => {
  getPlayerChoice();
});

function getPlayerChoice() {
  playerSizeChoice = prompt("Enter a number between 1 and 100");
  if (playerSizeChoice <= 100 && playerSizeChoice >= 2) {
    gridSize(playerSizeChoice);
  } else {
    alert(
      "Must be a number greater than or equal to 2, and less than or equal to 100"
    );
    getPlayerChoice();
  }
}

function buildGrid(gridMaxSize) {
  let gridItemSize = 1000 / gridMaxSize;
  for (let i = 0; i < gridMaxSize * gridMaxSize; i++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    gridItem.style.width = `${gridItemSize}px`;
    gridItem.style.height = `${gridItemSize}px`;
    gridItem.style.backgroundColor = "white";
    gridContainer.appendChild(gridItem);
    gridItem.addEventListener("mouseover", () => {
        gridItem.style.backgroundColor = randomizeGridColor();
    });
  }
}

function gridSize(size) {
  const gridContainerSize = Math.min(playerSizeChoice, 100);
  gridContainer.innerHTML = "";
  buildGrid(gridContainerSize);
}

function clearGrid() {
  const gridItemsToClear = document.querySelectorAll(".grid-item");
  gridItemsToClear.forEach((gridItemToClear) => {
    gridItemToClear.style.backgroundColor = "white";
  });
}

function randomizeGridColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
};

buildGrid(playerSizeChoice);
