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

function playRound() {
  //plays a single round. Player vs Computer

  //get the player's choice using prompt()
  const playerChoice = prompt("Choose rock, paper or scissors.").toLowerCase();

  //get the computer's choice using getComputerChoice
  const computerChoice = getComputerChoice();

  //check who won the round using checkWinner
  const result = checkWinner(playerChoice, computerChoice);

  console.log(result);

  return result;
}

function checkWinner(playerSelection, computerSelection) {
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
    } else {
      return "Invalid choice! Please choose rock, paper, or scissors.";
    }
  }
}

function game() {
  //playRound 5 times and checks who is the winner

  let playerWins = 0;
  let computerWins = 0;

  for (let i = 0; i < 5; i++) {
    //playsRound 5 times and updates scores
    const result = playRound();

    if (result == "You win!") {
      playerWins++;
    } else if (result == "You lose!") {
      computerWins++;
    }
  }

  if (playerWins > computerWins) {
    console.log("You win the game!");
  } else if (computerWins > playerWins) {
    console.log("Computer wins the game!");
  } else {
    console.log("It's a tie!");
  }
}

game();
