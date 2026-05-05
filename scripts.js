function game(playerChoice, computerChoice) {
  const resultBoard = document.querySelector("#result-board");
  const choicesMade = document.querySelector(".choices-made");
  const result = document.querySelector(".result");

  choicesMade.textContent = `You chose ${playerChoice}, I chose ${computerChoice}`;
  result.textContent = gameLogic(playerChoice, computerChoice);

  resultBoard.appendChild(choicesMade);
  resultBoard.appendChild(result);
}

function gameLogic(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "draw";
  }

  if (
    (playerChoice === "rock" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "scissors") ||
    (playerChoice === "scissors" && computerChoice === "rock")
  ) {
    return "I win!";
  }

  return "You win!";
}

function getPlayerChoice() {
  const choice = prompt(`Pick 1: rock, paper, scissors`);
  return choice.toLowerCase();
}

function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  return options[randomInteger(2)];
}

function randomInteger(upto = 1) {
  return Math.round(Math.random() * upto);
}
