let updatedPlayerScore = 0;
let updatedComputerScore = 0;
let playerSelection;
let computerSelection;
let playerRoundResult;
let computerRoundResult
let roundMessage;

const playerCorner = document.getElementById('player-corner');
const computerCorner = document.getElementById('computer-corner');
 
const playerOptions = document.querySelectorAll('.player .icon-container');



// randomly return with "Rock", "Paper" or "Scissors"
function getComputerSelection() {
    let play = Math.floor(Math.random() * 3) + 1;

    if (play === 1) {
        computerSelection = 'rock';
    }else if (play === 2) {
        computerSelection = 'paper';
    }else {
        computerSelection = 'scissors';
    }
}

// adds the necessary event listeners required for the game
// currently only adding just a click listener for the user to select their option for the round
function addEventListeners() {
    
    // adds a listener that starts a round if the user clicks on an icon within their corner
    playerOptions.forEach((playerOption) => {
        playerOption.addEventListener('click', () => {
            const previousPlayerChoice = document.querySelector('.player.' + playerSelection + '.icon-container');
            
            if (playerOption.classList.contains("rock")) {
                if (playerRoundResult) previousPlayerChoice.classList.remove('selection');  // removes the highlighted icon from a previous selection
                playerOption.classList.add('selection');    // highlights the user's selection for the current round
                playerSelection = "rock";
                playRound(playerSelection);
            }else if (playerOption.classList.contains("paper")) {
                if (playerRoundResult) previousPlayerChoice.classList.remove('selection');
                playerOption.classList.add('selection');
                playerSelection = "paper";
                playRound(playerSelection);
            }else {
                if (playerRoundResult) previousPlayerChoice.classList.remove('selection');
                playerOption.classList.add('selection');
                playerSelection = "scissors";
                playRound(playerSelection);
            }
        });
    });
}

function resetCornerColour() {
    computerCorner.classList.remove(computerRoundResult);
    playerCorner.classList.remove(playerRoundResult);
}

function resetComputerChoiceDisplay() {
    const computerChoice = document.querySelector('.computer.' + computerSelection + '.icon-container');
    computerChoice.classList.remove('selection');
}

function resetFeedbackMessage() {
    document.getElementById('user-feedback-message').innerHTML = '';
    document.getElementById('computer-feedback-message').innerHTML = '';
}

// resets the visual feedback from the previous round only for rounds 2 and beyond
function resetPreviousRoundOutput() {
    if (computerRoundResult && playerRoundResult) {     // if either variables are not null, the current round is round 2 or beyond
        resetCornerColour();
        resetComputerChoiceDisplay();
        resetFeedbackMessage();
    }
}

// plays a single round of Rock Paper Scissors
// returns a string that declares the winner of the round if there is one
function playRound(playerSelection) {
    
    resetPreviousRoundOutput();

    // retrieves the play selections of computer for the round
    getComputerSelection();;
    
    // calculates the result of the round 
    if (playerSelection === computerSelection) {
        playerRoundResult = "tie";
        computerRoundResult = "tie";
    } else if (playerSelection === 'rock') {
        if (computerSelection === 'scissors') {
            playerRoundResult = "winner";
            computerRoundResult = "loser";
            updatedPlayerScore += 1;
        } else {
            playerRoundResult = "loser";
            computerRoundResult = "winner";
            updatedComputerScore += 1;
        }
    } else if (playerSelection === 'paper'){
        if (computerSelection === 'rock') {
            playerRoundResult = "winner";
            computerRoundResult = "loser";
            updatedPlayerScore += 1;
        } else {
            playerRoundResult = "loser";
            computerRoundResult = "winner";
            updatedComputerScore += 1;
        }
    } else {
        if (computerSelection === 'paper') {
            playerRoundResult = "winner";
            computerRoundResult = "loser";
            updatedPlayerScore += 1;
        } else {
            playerRoundResult = "loser";
            computerRoundResult = "winner";
            updatedComputerScore += 1;
            }
    }
    updateInterface();
}

// modifies the border colour of the player and computer corners depending on the result of the round
// green for winner of round, orange for tie and red for loser
function updateCornerColour() {
    computerCorner.classList.add(computerRoundResult);
    playerCorner.classList.add(playerRoundResult);
}

// highlights the selection made by the computer
function updateComputerSelection() {
    // update the computer selection for the current round
    const computerChoice = document.querySelector('.computer.' + computerSelection + '.icon-container');
    computerChoice.classList.add('selection');
}

// updates the score of player and computer
function updateScore() {
    document.getElementById('player-score').innerHTML = updatedPlayerScore;
    document.getElementById('computer-score').innerHTML = updatedComputerScore;;
}

// outputs a text output indicating the result of the round
function updateRoundMessage() {
    if (playerRoundResult === 'winner') {
        roundMessage = "+1 point to Player";
        document.getElementById('user-feedback-message').innerHTML = roundMessage;
    } else if (playerRoundResult === 'loser') {
        roundMessage = "+1 point to F.L.U.K.E.";
        document.getElementById('computer-feedback-message').innerHTML = roundMessage;
    } else {
        roundMessage = "Tie";
        document.getElementById('computer-feedback-message').innerHTML = roundMessage;
        document.getElementById('user-feedback-message').innerHTML = roundMessage;
    }
    
}

// provides the visual feedback of the result of the current round
function updateInterface() {
    updateCornerColour();
    updateComputerSelection();
    updateScore();
    updateRoundMessage();
}

// relays the message to the user
// not currently used - to be used when the feature to control the number of rounds is added
function displayResult() {
    let finalMessage = document.getElementById('final-message-container');
    let text = document.createTextNode('test');
    finalMessage.appendChild(text);
}

// carries out the necessary functions to set up the site
function setupGame() {
    addEventListeners();
}

setupGame();