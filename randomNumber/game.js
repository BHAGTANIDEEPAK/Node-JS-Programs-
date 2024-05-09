// game.js

// Function to generate a random number between min and max
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to start the game
function startGame() {
    let randomNumber = getRandomNumber(1, 100);
    console.log('A random number has been generated. You have 10 seconds to guess it.');

    // Set a timeout to change the number every 10 seconds
    const timeout = setTimeout(() => {
        randomNumber = getRandomNumber(1, 100);
        console.log('Time\'s up! A new random number has been generated.');
        startGame();
    }, 10000);

    // Function to handle user input
    function handleInput(guess) {
        if (parseInt(guess) === randomNumber) {
            console.log('Congratulations! You guessed the correct number:', randomNumber);
            clearTimeout(timeout); // Clear the timeout
            startGame(); // Start a new game
        } else {
            console.log('Wrong guess. Try again.');
        }
    }

    // Reading user input from the console
    process.stdin.setEncoding('utf8');
    process.stdin.on('data', (input) => {
        const guess = input.trim();
        handleInput(guess);
    });
}

// Start the game
startGame();
