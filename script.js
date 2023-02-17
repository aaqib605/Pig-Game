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

let currentScore = 0;
let activePlayer = 1;

// Starting conditions
diceEl.classList.add("hidden");

const resetScores = function () {
  scorePlayerOneEl.textContent = "0";
  scorePlayerTwoEl.textContent = "0";
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

buttonRollEl.addEventListener("click", diceRoll);
