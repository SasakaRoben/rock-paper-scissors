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

function playGame()
{
    let humanScore = 0;
    let computerScore = 0;

    for (i = 0; i < 5; i++)
    {
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
    }

    if (humanScore > computerScore)
    {
        console.log("Your win the and your game final score is : " + humanScore);
    }
    else
    {
        console.log("Computer wins the game and it's final score is : " + computerScore);
    }
}