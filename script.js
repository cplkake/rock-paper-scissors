
// randomly return with "Rock", "Paper" or "Scissors"
function computerPlay() {
    let play = Math.floor(Math.random() * 3) + 1;
    if (play === 1) {
        return 'Rock';
    }else if (play === 2) {
        return 'Paper';
    }else {
        return 'Scissors';
    }
}

// takes in player input and standardizes the case such that the first
// character is uppercase and the remaining characters are lowercase
function standardizeCase(playerSelection) {
    return playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase()
}

// plays a single round of Rock Paper Scissors
// returns a string that declares the winner of the round if there is one
function playRound(playerSelection, computerSelection) {
    playerSelection = standardizeCase(playerSelection);

    let playerWinsRound = 'player';
    let computerWinsRound = 'computer';
    let tieRound = 'tie';
    
    if (playerSelection === computerSelection) {
        return tieRound;
    } else if (playerSelection === 'Rock') {
        if (computerSelection === 'Scissors') {
            return playerWinsRound;
        } else {
            return computerWinsRound;
        }
    } else if (playerSelection === 'Paper'){
        if (computerSelection === 'Rock') {
            return playerWinsRound;
        } else {
            return computerWinsRound;
        }
    } else {
        if (computerSelection === 'Paper') {
            return playerWinsRound;
        } else {
            return computerWinsRound;
        }
    }
}

// relays the message to the user
function outputMessage(winner) {
    if (winner === 'user'){
        console.log(`You won! You're on your way to become world champion!`)
    } else {
        console.log('You lost! Back to the grind!')
    }
}

// plays a 5 round game taht keeps score and reports a winner or loser at the end
function game() {
    let continueGame = true;
    let playerScore = 0;
    let computerScore = 0;
    let computerSelection;
    let playerSelection;
    let result;

    while (continueGame == true) {
        playerSelection = window.prompt('Rock, Paper or Scissors?');
        computerSelection = computerPlay();
        result = playRound(playerSelection, computerSelection);
        if (result === 'player') {
            playerScore += 1;
        } else if (result === 'computer') {
            computerScore += 1;
        }

        if (computerScore > 4 || playerScore > 4) {
            continueGame = false;
        }
    }

    if (playerScore > computerScore) {
        outputMessage('player');
    } else {
        outputMessage('computer');
    }
    
}

game();