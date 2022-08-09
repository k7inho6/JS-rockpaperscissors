
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

let choice = 'rock';
let possibleChoices = ['rock', 'paper', 'scissors'];
let pointsPlayer = 0;
let pointsComputer = 0;

function updateRock() {
    choice = possibleChoices[0];
    game();
}
function updatePaper() {
    choice = possibleChoices[1];
    game();
}
function updateScissors() {
    choice = possibleChoices[2];
    game();
}

let btnRock = document.querySelector('.btn');
btnRock.addEventListener('click', updateRock);
let btnPaper = document.querySelector('#Paper');
btnPaper.addEventListener('click', updatePaper);
let btnScissors = document.querySelector('#Scissors');
btnScissors = addEventListener('click', updateScissors);

function getPlayerChoice() {
    let result = choice.toLowerCase();
    return result;
}

function playRound(computerSelection, playerSelection) {
    computerSelection = getComputerChoice();
    playerSelection = getPlayerChoice();
    let content = document.querySelector('.content');
    
    if (computerSelection == 'rock') {
        if (playerSelection == 'paper') {
            pointsPlayer += 1;
        }
        else {
            pointsComputer += 1;
        }
    }
    else if (computerSelection == 'paper') {
        if (playerSelection == 'scissors') {
            pointsPlayer += 1;
        }
        else {
            pointsComputer += 1;
        }
    }
    else if (computerSelection == 'scissors') {
        if (playerSelection == 'rock') {
            pointsPlayer += 1;
        }
        else {
            pointsComputer += 1;
        }
    }
    if (pointsPlayer == 5) {
        content.innerText = `Result = player wins`;
        pointsPlayer = 0;
        pointsComputer = 0;
        return;
    }
    if (pointsComputer == 5) {
        content.innerText = 'Result = computer wins';
        pointsPlayer = 0;
        pointsComputer = 0;
        return;
    }

    let score = `Score: Player ${pointsPlayer}, Computer ${pointsComputer}`;
    content.innerText = score;
    return;
}

const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => button.addEventListener('click', playRound));
