function playerChoice() {
  const choice = prompt(`Pick 1: rock, paper, scissors`);
  return choice.toLowerCase();
}

function computerChoice() {
  const options = ["rock", "paper", "scissors"];
  return options[randomInteger(2)];
}

function randomInteger(upto = 1) {
  return Math.round(Math.random() * upto);
}