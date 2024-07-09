"use strict";

const getComputerChoice = function () {
  const choice = Math.trunc(Math.random() * 3) + 1;
  if (choice === 1) {
    return "rock";
  } else if (choice === 2) {
    return "paper";
  } else {
    return "scissors";
  }
};

const getHumanChoice = function () {
  const humanChoice = prompt("Rock, Paper or Scissors");
  const fix = humanChoice.toLowerCase();
  if (fix !== "rock" && fix !== "scissors" && fix !== "paper") {
    console.log("invalid");
  }
  return fix;
};

function playGame() {
  let computerScore = 0;
  let humanScore = 0;

  const playRound = function (human, computer) {
    //Tie
    if (human === computer) {
      console.log(`Game ends in a Tie`);
    } else if (human === "rock" && computer === "scissors") {
      console.log(`You win! Rock beats Scissors`);
      humanScore++;
    } else if (human === "paper" && computer === "scissors") {
      console.log(`You win! Paper beats Rock`);
      humanScore++;
    } else if (human === "scissors" && computer === "paper") {
      console.log(`You win! Scissors beats Paper`);
      humanScore++;

      //COMPUTER WINS
    } else if (computer === "rock" && human === "scissors") {
      console.log(`You Lose! Rock beats Scissors`);
      computerScore++;
    } else if (computer === "paper" && human === "scissors") {
      console.log(`You Lose! Paper beats Rock`);
      computerScore++;
    } else if (computer === "scissors" && human === "paper") {
      console.log(`You Lose! Scissors beats Paper`);
      computerScore++;
    }
  };
  for (let i = 0; i < 5; i++) {
    playRound(getHumanChoice(), getComputerChoice());
    console.log(humanScore, computerScore);
  }
}

playGame();
// We know the values coming in from computer and human
