document.addEventListener("DOMContentLoaded", () => {
    const gridContainer = document.querySelector(".grid-container");
    const newGameButton = document.getElementById("new-game-button");
    const timerDisplay = document.getElementById("timer-display");

    const gridSize = 6;
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let timerInterval = null;
    let startTime = 0;

    // --- Timer Functions ---
    function startTimer() {
        // Clear any existing timer
        stopTimer();
        // Record start time
        startTime = Date.now();
        // Reset display
        timerDisplay.textContent = "Time: 0s";
        // Start new interval
        timerInterval = setInterval(() => {
            const elapsedSeconds = Math.floor((Date.now() - startTime) / 1000);
            timerDisplay.textContent = `Time: ${elapsedSeconds}s`;
        }, 1000); // Update every second
    }

    function stopTimer() {
        clearInterval(timerInterval);
        timerInterval = null;
    }

    // --- Grid Generation Functions ---
    function getRandomNumber() {
        return numbers[Math.floor(Math.random() * numbers.length)];
    }

    function getRandomColor() {
        return Math.random() < 0.5 ? "black" : "white";
    }

    function generateGrid() {
        // Clear previous grid
        gridContainer.innerHTML = "";

        // Create the new grid
        for (let i = 0; i < gridSize * gridSize; i++) {
            const circle = document.createElement("div");
            const number = getRandomNumber();
            const bgColor = getRandomColor();
            const textColor = bgColor === "black" ? "white" : "black";

            circle.classList.add("circle");
            circle.style.backgroundColor = bgColor;
            circle.style.color = textColor;
            circle.textContent = number;

            gridContainer.appendChild(circle);
        }

        // Start the timer for the new game
        startTimer();
    }

    // --- Event Listeners ---
    newGameButton.addEventListener("click", generateGrid);

    // --- Initial Setup ---
    // Generate the first grid when the page loads
    generateGrid();
}); // End DOMContentLoaded
