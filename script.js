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

let humanScore = 0;
let computerScore = 0;

let humanChoice;
let computerChoice;

const resultDiv = document.createElement("div");
const scoreDiv = document.createElement("div");

document.body.appendChild(resultDiv);
document.body.appendChild(scoreDiv);

function playGame(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "scissors" ||
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        resultDiv.textContent = `You win! ${humanChoice} beats ${computerChoice}.`;
    } else if (humanChoice === computerChoice) {
        resultDiv.textContent = `It's a tie! You both chose ${humanChoice}.`;
    } else {
        computerScore++;
        resultDiv.textContent = `You lose! ${computerChoice} beats ${humanChoice}.`;
    }

    scoreDiv.textContent = `Current Scores - You: ${humanScore}, Computer: ${computerScore}`;
}

const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        humanChoice = button.textContent.toLowerCase();
        computerChoice = getComputerChoice();
        playGame(humanChoice, computerChoice);
    });
});



