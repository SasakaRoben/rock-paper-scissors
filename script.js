function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    let randomInt = getRandomInt(3);
    if (randomInt === 0) {
        return "rock";
    } else if (randomInt === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    return prompt("Enter your choice: ")
}

function playGame(humanChoice, computerChoice) {


    if (humanChoice == "rock" && computerChoice == "scissors" ||
        humanChoice == "paper" && computerChoice == "rock" ||
        humanChoice == "scissors" && computerChoice == "paper") {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
    } else if (humanChoice == computerChoice) {
        console.log(`It's a tie! You both chose ${humanChoice}.`);
    } else {
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
    }
}

let humanScore = 0;
let computerScore = 0;

let humanChoice;
let computerChoice;

for (let round = 1; round <= 5; round++) {
    console.log(`Round ${round}:`);
    humanChoice = getHumanChoice().toLowerCase();
    computerChoice = getComputerChoice();
    playGame(humanChoice, computerChoice);
}

console.log(`Final Score - You: ${humanScore}, Computer: ${computerScore}`);
if (humanScore > computerScore) {
    console.log("Congratulations! You are the overall winner!");
} else if (humanScore < computerScore) {
    console.log("Sorry! The computer is the overall winner!");
} else {
    console.log("It's an overall tie!");
}
