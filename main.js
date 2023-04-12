function getComputerChoice() {
  //returns randomly either rock, paper or scissors
  const computerChoice = Math.floor(Math.random() * 3); // generates random number between 0 and 2
  switch (computerChoice) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  //plays a single round. Player vs Computer
  if (playerSelection == "rock") {
    if (computerSelection == "rock") {
      return "Tie!";
    } else if (computerSelection == "paper") {
      return "You lose!";
    } else if (computerSelection == "scissors") {
      return "You win!";
    }
  } else if (playerSelection == "paper") {
    if (computerSelection == "rock") {
      return "You win!";
    } else if (computerSelection == "paper") {
      return "Tie!";
    } else if (computerSelection == "scissors") {
      return "You lose!";
    }
  } else if (playerSelection == "scissors") {
    if (computerSelection == "rock") {
      return "You lose!";
    } else if (computerSelection == "paper") {
      return "You win!";
    } else if (computerSelection == "scissors") {
      return "Tie!";
    }
  }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();

console.log(computerSelection);

console.log(playRound(playerSelection, computerSelection));
