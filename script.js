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

