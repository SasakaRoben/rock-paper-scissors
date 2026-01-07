function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() 
{
    randomInt = getRandomInt(3);
    if (randomInt === 0) {
        return "rock";
    } else if (randomInt === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}