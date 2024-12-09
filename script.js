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
    let humanChoice = prompt("Enter your choice:\n 1.Rock \n 2.Paper \n 3.scissors: ");
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