
function rock () {
playGame('rock')
}

function paper () {
  playGame('paper')
}

function scissors () {
  playGame('scissors')
}

function reset () {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
}


function playGame(playerScore){
  const computerScore = pickComputerScore();

  if (playerScore === 'scissors') {
    if (computerScore === 'rock') {
      result= 'You lose.';
    } else if (computerScore === 'paper') {
      result = 'You win.';
    } else if (computerScore === 'Scissors') {
      result = 'Tie.';
    }

  } else if (playerScore === 'paper') {
    if (computerScore === 'rock') {
      result= 'You win.';
    } else if (computerScore === 'paper') {
      result = 'Tie.';
    } else if (computerScore === 'Scissors') {
      result = 'You lose.';
    }

  } else if (playerScore === 'rock') {
    if (computerScore === 'rock') {
        result= 'Tie.';
    } else if (computerScore === 'paper') {
        result = 'You lose.';
    } else if (computerScore === 'Scissors') {
        result = 'You win.';
    }
  }

  if(result === 'You win.') {
    score.wins += 1;
  } else if (result === 'You lose.') {
    score.losses =+ 1;
  } else if (result === 'Tie.') {
    score.ties += 1;
  }

  alert(`You picked ${playerScore}. Computer picked ${computerScore}. ${result}
Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);
}


const score = {
  wins:0,
  losses:0,
  ties:0,
};

function pickComputerScore() {
    const randomNumber = Math.random();

    let computerScore = '';
  
    if (randomNumber >= 0 && randomNumber < 1 / 3) {
      computerScore = 'rock';
        } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
          computerScore = 'paper';
        } else if ( randomNumber >= 2 / 3 && randomNumber < 1) {
          computerScore = 'Scissors';
        }
        return computerScore;
  }
