// create a random number
const solution = parseInt(Math.random() * 50);

// prompt the user for a guess
let guess = prompt("Guess a number between 1 and 50!");

// parse the response into a number
guess = parseInt(guess);

// are they equal?
if (guess === solution) {
    // tell the user they did gud
    alert("Great job, you guessed correctly!");
}

// is the guess too low?
if (guess < solution) {
    // tell the user to guess higher
    alert("Your guess is too low, guess higher!");
}

// is the guess too high?
if (guess > solution) {
    // tell the user to guess lower
    alert("Your guess is too high, guess lower!");
}

// console.log the solution and guess for debugging purposes
console.log({
    solution: solution,
    guess: guess
});