document.addEventListener('DOMContentLoaded', () => {
    const gridContainer = document.querySelector('.grid-container');
    const gridSize = 6;
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    // Function to generate a random number from the array
    function getRandomNumber() {
        return numbers[Math.floor(Math.random() * numbers.length)];
    }

    // Function to get a random color (black or white)
    function getRandomColor() {
        return Math.random() < 0.5 ? 'black' : 'white';
    }

    // Create the grid
    for (let i = 0; i < gridSize * gridSize; i++) {
        const circle = document.createElement('div');
        const number = getRandomNumber();
        const bgColor = getRandomColor();
        const textColor = bgColor === 'black' ? 'white' : 'black';

        circle.classList.add('circle');
        circle.style.backgroundColor = bgColor;
        circle.style.color = textColor;
        circle.textContent = number;

        gridContainer.appendChild(circle);
    }
});
