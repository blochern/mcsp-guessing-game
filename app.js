function randomNumber(max) {
    return Math.ceil(Math.random() * max);
}

let max = randomNumber(50);

let secret = randomNumber(max);

let input;

while (input !== secret) {
    input = +prompt(`Please enter a number between 1 and ${max}`);

    if (!input || input > max || input < 1) {
        alert("Invalid guess!"); continue;
    }

    if (input < secret) { alert("Guess higher!"); }
    if (input > secret) { alert("Guess lower!"); }
}

alert("Correct!");