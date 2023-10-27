let playerScore = 0
let computerScore = 0

function playRound() {
    
function getComputerChoice() {
    let num = Math.ceil(Math.random()*3);
    switch (num) {
        case (1):
            return 'rock';
            break;
        case (2):
            return 'paper';
            break;
        case (3):
            return 'scissors';
    }
}


// this is my function for to take player input and store it. I have made sure it is lower case.

// this is my function for to take player input and store it
let playerSelection = prompt ("Choose Rock, Paper or Scissors"); 
playerSelection = playerSelection.toLowerCase();
let computerSelection = getComputerChoice();

function singleRound (computerSelection, playerSelection) {
    if (computerSelection === 'rock' && playerSelection === 'scissors')
    {
        computerScore += 1;
        return "You Lose! Rock beats Scissors";
    }
    else if (computerSelection === 'paper' && playerSelection === 'rock')
     {
        computerScore += 1;
        return "You Lose! Paper beats Rock";
    }
    else if  (computerSelection === 'scissors' && playerSelection === 'paper')
    {
        computerScore += 1;
        return "You Lose! Scissors beats Paper";
    }
    else if (playerSelection === 'rock' && computerSelection === 'scissors')
    {
        playerScore += 1;
        return "You Win! Rock beats Scissors";
    }
    else if (playerSelection === 'paper' && computerSelection === 'rock')
    {
        playerScore += 1;
        return "You Win! Paper beats Rock";
        }
    else if (playerSelection === 'scissors' && computerSelection === 'paper')
    {        
        playerScore += 1;
        return "You Win! Scissors beats Paper";
    }
    else if (computerSelection === playerSelection) {
        return "It's a tie!";
    }
    }

    // this is to play the game 5 time
    console.log("You chose: " + playerSelection);
    console.log("I chose: " + computerSelection);
    console.log(singleRound (computerSelection, playerSelection))
}

function game() {
    playRound(); 
    playRound();
    playRound();
    playRound();
    playRound()
}

game();

if (computerScore > playerScore) {
console.log("Computer wins a score of " + computerScore + " vs your score of " + playerScore);
}
else if (playerScore > computerScore){
console.log("You win with a score of " + playerScore + " vs the computers score of " + computerScore);
}
else if (playerScore == computerScore){
console.log("It's a tie! You both scored " + playerScore);
}
