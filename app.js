// function for a random number
function randomNumber(max) {
    return Math.ceil(Math.random() * max);
}

let max = 50;

// this global variable will store game results for users
let memory = {};

// the main function
function game(user) {
    // generate a random number between 1-50
    let secret = randomNumber(50);

    // declare our input variable (but leave it undefined for now)
    let input;

    // variable for previous game data (if applicable)
    let previousGame;

    // if this user already has saved data in memory, grab it and cache it for later
    if (memory[user]) {
        previousGame = memory[user];
    }

    // make space to store the user's inputs
    memory[user] = [];

    // while input is not equal to secret (e.g. incorrect guess or game start)
    while (input !== secret) {
        // prompt the user for a number and parse it immediately
        input = parseInt(prompt(`Please enter a number between 1 and ${max}`));

        // a failed parseInt will return NaN, which is falsy | 0 is also falsy
        // if the input is falsy (invalid), or out of bounds (higher than max, lower than 1)
        if (!input || input > max || input < 1) {
            // invalid guesses aren't added to memory
            alert("Invalid guess!"); continue;
        }

        // too high/too low? alert the user, and push the input to memory
        if (input < secret) {
            alert(`Sorry, ${user}, guess higher!`);
        }
        if (input > secret) {
            alert(`Incorrect, ${user}, guess lower!`);
        }
        memory[user].push(input);
    }
    // the while loop only stops if the input === the secret number
    alert(`Correct guess! Your previous guesses were ${memory[user]}.`);

    // if we have a previous game stored, compare this game to the previous game
    if (previousGame) {
        if (previousGame.length < memory[user].length) {
            alert(`You did worse than your previous game, ${user}, you took ${memory[user].length} guesses compared to ${previousGame.length} guesses.`);
        } else if (previousGame.length > memory[user].length) {
            alert(`You did better than your previous game, ${user}, you took ${memory[user].length} guesses compared to ${previousGame.length} guesses.`);
        } else {
            alert(`You tied your previous game, ${user}, with ${memory[user].length} guesses.`);
        }
    }
    console.log(memory);
}

// game start
game(prompt("Please enter your name, user!"));

// this while loop evaluates to true if the user keeps saying they want to play again
while (confirm(`Do you want to play again?`)) {
    game(prompt("Please enter your name, user!"));
}

alert(`Thanks for playing!`);