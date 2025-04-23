function rock () {
    const randomNumber = Math.random();
      let computerScore = '';

      if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerScore = 'rock';
          } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
            computerScore = 'paper';
          } else if ( randomNumber >= 2 / 3 && randomNumber < 1) {
            computerScore = 'Scissors';
          }

          let result = '';

          if (computerScore === 'rock') {
            result= 'Tie.'
          } else if (computerScore === 'paper') {
            result = 'You lose.';
          } else if (computerScore === 'Scissors') {
            result = 'You win.';
          }

          alert(`You picked rock. Computer picked. ${computerScore}. ${result}`)
}

function paper () {
    const randomNumber = Math.random();
        let computerScore = '';

        if (randomNumber >= 0 && randomNumber < 1 / 3) {
            computerScore = 'rock';
            } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
                computerScore = 'paper';
            } else if ( randomNumber >= 2 / 3 && randomNumber < 1) {
                computerScore = 'Scissors';
            }


            let result = '';

            if (computerScore === 'rock') {
                result= 'You win.';
            } else if (computerScore === 'paper') {
                result = 'Tie.';
            } else if (computerScore === 'Scissors') {
                result = 'You lose.';
            }

            alert(`You picked paper. Computer picked. ${computerScore}. ${result}`)
}

function scissors () {
    const randomNumber = Math.random();
      let computerScore = '';

      if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerScore = 'rock';
          } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
            computerScore = 'paper';
          } else if ( randomNumber >= 2 / 3 && randomNumber < 1) {
            computerScore = 'Scissors';
          }


          let result = '';

          if (computerScore === 'rock') {
            result= 'You lose.';
          } else if (computerScore === 'paper') {
            result = 'You win.';
          } else if (computerScore === 'Scissors') {
            result = 'Tie.';
          }

          alert(`You picked Scissors. Computer picked. ${computerScore}. ${result}`)
}
