//nested if else

let winningNumber= 19;
let userGuess = +prompt("Guess a number");

// console.log(userGuess, typeof userGuess);
if (userGuess === winningNumber) {
    console.log("your guess is right");
} else {
    if (userGuess > winningNumber) {
        console.log("you are high!!");
    } else {
        console.log("you are low!!!");
    }
    
}