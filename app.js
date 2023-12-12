const randomNumber = (max) => Math.ceil(Math.random() * max);

const game = (user) => {
    let max = randomNumber(50);

    let secret = randomNumber(max);

    let input;

    let memory = {}; memory.user = [];

    // game start/incorrect answer
    while (input !== secret) {
        input = +prompt(`Please enter a number between 1 and ${max}`);

        // bad input/out of bounds inputs aren't added to the guess count
        if (!input || input > max || input < 1) {
            alert("Invalid guess!"); continue;
        }

        // too high/too low
        if (input < secret) { alert(`Sorry, ${user}, guess higher!`); memory.user.push(input); }
        if (input > secret) { alert(`Incorrect, ${user}, guess lower!`); memory.user.push(input); }
    }
    alert(`Correct guess! Your previous guesses were ${memory.user}.`);
    // ask to play again
    if (confirm(`Do you want to play again, ${user}?`)) {
        game(prompt("Please enter your name, user!"));
    }
    else { alert(`Thanks for playing, ${user}!`); }
}

// initialize
game(prompt("Please enter your name, user!"));