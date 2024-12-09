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

function getHumanChoice()
{
    let humanChoice = prompt("Enter your choice:\n 1.Rock \n 2.Paper \n 3.Scissors: ");
    switch(humanChoice)
    {
        case "1":
            return "rock";
        case "2":
            return "paper";
        case "3":
            return "scissors";
        default:
            alert("Invalid choice");
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice)
{
    if (humanChoice == computerChoice)
    {
        console.log("It's a tie!");
    }
    else if ((humanChoice == "rock" && computerChoice == "scissors") ||
             (humanChoice == "scissors" && computerChoice == "paper") || 
             (humanChoice == "paper" && computerChoice == "rock"))
    {
        console.log("You win this round!");
        humanScore++;
    }
    else
    {
        console.log("Computer wins this round!");
        computerScore++;
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);