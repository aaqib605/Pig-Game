"use strict";
const currentScorePlayerOneEl = document.querySelector("#current--0");
const currentScorePlayerTwoEl = document.querySelector("#current--1");
const scorePlayerOneEl = document.querySelector("#score--0");
const scorePlayerTwoEl = document.querySelector("#score--1");
const diceEl = document.querySelector(".dice");
const buttonRollEl = document.querySelector(".btn--roll");
const buttonNewGameEl = document.querySelector(".btn--new");
const buttonHoldEl = document.querySelector(".btn--hold");
const playerOne = document.querySelector(".player--0");
const playerTwo = document.querySelector(".player--1");
const playerOneName = document.querySelector("#name--0");
const playerTwoName = document.querySelector("#name--1");

let currentScore = 0;
let activePlayer = 1;
let scorePlayerOne = 0;
let scorePlayerTwo = 0;

// Starting conditions
diceEl.classList.add("hidden");

const resetScores = function () {
  scorePlayerOneEl.textContent = "0";
  scorePlayerTwoEl.textContent = "0";
  currentScorePlayerOneEl.textContent = "0";
  currentScorePlayerTwoEl.textContent = "0";
};
resetScores();

// Rolling Dice functionality
const diceRoll = function () {
  const randomDiceRoll = Math.floor(Math.random() * 6) + 1;
  diceEl.classList.remove("hidden");
  diceEl.setAttribute("src", `images/dice-${randomDiceRoll}.png`);

  if (randomDiceRoll != 1) {
    if (activePlayer === 1) {
      currentScore += randomDiceRoll;
      currentScorePlayerOneEl.textContent = currentScore;
    } else if (activePlayer === 2) {
      currentScore += randomDiceRoll;
      currentScorePlayerTwoEl.textContent = currentScore;
    }
  } else {
    if (activePlayer === 1) {
      currentScore = 0;
      currentScorePlayerOneEl.textContent = currentScore;
      playerOne.classList.remove("player--active");
      playerTwo.classList.add("player--active");
    } else if (activePlayer === 2) {
      currentScore = 0;
      currentScorePlayerTwoEl.textContent = currentScore;
      playerTwo.classList.remove("player--active");
      playerOne.classList.add("player--active");
    }
    activePlayer = activePlayer === 1 ? 2 : 1;
  }
};

const handleHold = function () {
  if (activePlayer === 1) {
    scorePlayerOne += currentScore;
    scorePlayerOneEl.textContent = scorePlayerOne;
    currentScorePlayerOneEl.textContent = "0";
    currentScore = 0;
    if (scorePlayerOne >= 100) {
      playerOne.classList.add("name", "player--winner");
      playerOneName.textContent = "🏆 Winner!";
      diceEl.classList.add("hidden");
    } else {
      playerOne.classList.remove("player--active");
      playerTwo.classList.add("player--active");
    }
  } else if (activePlayer === 2) {
    scorePlayerTwo += currentScore;
    scorePlayerTwoEl.textContent = scorePlayerTwo;
    currentScorePlayerTwoEl.textContent = "0";
    currentScore = 0;
    if (scorePlayerTwo >= 100) {
      playerTwo.classList.add("name", "player--winner");
      playerTwoName.textContent = "🏆 Winner!";
      diceEl.classList.add("hidden");
    } else {
      playerTwo.classList.remove("player--active");
      playerOne.classList.add("player--active");
    }
  }

  activePlayer = activePlayer === 1 ? 2 : 1;
};

const handleNewGame = function () {
  resetScores();
  diceEl.classList.add("hidden");
  playerTwo.classList.remove("player--active", "player--winner", "name");
  playerOne.classList.add("player--active");
  playerOne.classList.remove("player--winner", "name");
  playerOneName.textContent = "Player 1";
  playerTwoName.textContent = "Player 2";
  activePlayer = 1;
};

buttonRollEl.addEventListener("click", diceRoll);
buttonHoldEl.addEventListener("click", handleHold);
buttonNewGameEl.addEventListener("click", handleNewGame);
