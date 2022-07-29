function getComputerChoice(rock, paper, scissors) {
    randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber == 0) {
        return 'rock';
    }
    if (randomNumber == 1) {
        return 'paper';
    }
    else {
        return 'scissors';
    }
}

function getPlayerChoice() {
    let choice = prompt("Enter your choice: ");
    let result = choice.toLowerCase();
    return result;
}

function playRound(computerSelection, playerSelection) {
    computerSelection = getComputerChoice();
    playerSelection = getPlayerChoice();
    
    if (computerSelection == playerSelection) {
        return 'draw';
    }
    else if (computerSelection == 'rock') {
        if (playerSelection == 'paper') {
            return 'player';
        }
        else {
            return 'computer';
        }
    }
    else if (computerSelection == 'paper') {
        if (playerSelection == 'scissors') {
            return 'player';
        }
        else {
            return 'computer';
        }
    }
    else if (computerSelection == 'scissors') {
        if (playerSelection == 'rock') {
            return 'player';
        }
        else {
            return 'computer';
        }
    }
}


function game() {
    let playerWinCount = 0;
    let computerWinCount = 0;
    let result = '';
    let finalResult = '';
    for (let i = 1; i < 6; i++) {
        result = playRound();
        if (result == 'draw') {
            console.log(`Winner of round ${i}: draw`);
        }
        else if (result == 'player') {
            playerWinCount += 1
            console.log(`Winner of round ${i}: ${result}`);
        }
        else if (result == 'computer') {
            computerWinCount += 1;
            console.log(`Winner of round ${i}: ${result}`);
        }
    }
    if (playerWinCount == computerWinCount) {
        finalResult = 'draw';
        console.log(`Final result: ${finalResult}`);
    }
    else if (playerWinCount > computerWinCount) {
        finalResult = 'player';
        console.log(`Final result: ${finalResult} wins`);
    }
    else {
        finalResult = 'computer';
        console.log(`Final result: ${finalResult} wins`);
    }
    
}

game()