function getComputerChoice()
{
    let randomNumber = (Math.random() * 10);

    if (randomNumber < 3.3)
    {
        return "rock";
    } 
    else if (randomNumber < 6.6)
    {
        return "paper";
    }
    else
    {
        return "scissors";
    }
}

let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice, computerChoice)
{
    displayMessage("You have chosen: " + humanChoice);
    displayMessage("Computer has chosen: " + computerChoice);

    if (humanChoice == computerChoice)
    {
        displayMessage("It's a tie!");
    }
    else if ((humanChoice == "rock" && computerChoice == "scissors") ||
            (humanChoice == "scissors" && computerChoice == "paper") || 
            (humanChoice == "paper" && computerChoice == "rock"))
    {
        displayMessage("You win this round!");
        humanScore++;
    }
    else
    {
        displayMessage("Computer wins this round!");
        computerScore++;
    }

    displayMessage("Score - Human: " + humanScore + ", Computer: " + computerScore)

    if (humanScore == 5)
    {
        displayMessage("You win the game and your final score is : " + humanScore);
    }
    else if (computerScore == 5)
    {
        displayMessage("Computer wins the game and it's final score is : " + computerScore);
    }
}

const body = document.querySelector("body");

const rockBtn = document.createElement("button");
rockBtn.textContent = "Rock";
const paperBtn = document.createElement("button");
paperBtn.textContent = "Paper";
const scissorsBtn = document.createElement("button");
scissorsBtn.textContent = "Scissors";

rockBtn.addEventListener("click", () => playRound("rock", getComputerChoice()));
paperBtn.addEventListener("click", () => playRound("paper", getComputerChoice()));
scissorsBtn.addEventListener("click", () => playRound("scissors", getComputerChoice()));

body.appendChild(rockBtn);
body.appendChild(paperBtn);
body.appendChild(scissorsBtn);

const resultsDiv = document.createElement("div");
function displayMessage(message)
{
    const messageParagraph = document.createElement("p");
    messageParagraph.textContent = message;
    resultsDiv.appendChild(messageParagraph);
}
body.appendChild(resultsDiv);





