const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");

btnRock.addEventListener("click", () => {
  game("rock", getComputerChoice());
});
btnPaper.addEventListener("click", () => {
  game("paper", getComputerChoice());
});
btnScissors.addEventListener("click", () => {
  game("scissors", getComputerChoice());
});

function game(playerChoice, computerChoice) {
  const resultBoard = document.querySelector("#result-board");
  const choicesMade = document.querySelector(".choices-made");
  const result = document.querySelector(".result");

  choicesMade.textContent = `You chose ${playerChoice}, I chose ${computerChoice}`;
  result.textContent = `Result: ${gameLogic(playerChoice, computerChoice)}`;
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

function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  return options[randomInteger(2)];
}

function randomInteger(upto = 1) {
  return Math.round(Math.random() * upto);
}
