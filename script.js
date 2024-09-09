"use strict";

const newGame = document.querySelector(".btn--new");
const rollDice = document.querySelector(".btn--roll"); // WORKS
const hold = document.querySelector(".btn--hold"); // WORKS
const diceEL = document.querySelector(".dice"); // do not confuse by ID with query selector, returns null!!

let activePlayer = 0;

const scores = [0, 0]; // each player's total score
// P1 = scores[0] ..... P2 = scores[1]

//PLYER ONE STATS
let playerOneCurrent = document.getElementById("current--0");
let playerOneTotalScore = document.getElementById("score--0");
let playerOneTotal = 0;
playerOneTotalScore.textContent = Number(0); // Init value

//PLYER TWO STATS
let playerTwoCurrent = document.getElementById("current--1");
let playerTwoTotalScore = document.getElementById("score--1");
let playerTwoTotal = 0;
playerTwoTotalScore.textContent = Number(0); // Init value

let total = 0;

//INITIAL STATE
diceEL.classList.add("hidden");

//Rolling Dice mechanism

rollDice.addEventListener("click", roll);
hold.addEventListener("click", holding);

function holding() {
  if (activePlayer === 1) {
    let holdval = 0;
    holdval += total;
    playerTwoTotalScore.textContent = holdval;
  } else {
    let holdval = 0;
    holdval += total;
    playerOneTotalScore.textContent = holdval;
  }

  console.log("works");
}

function roll() {
  //generating a random dice number
  let ans = Math.trunc(Math.random() * 6) + 1;
  //display
  diceEL.classList.remove("hidden");
  diceEL.src = `IMAGES/dice-${ans}.png`;
  //is it one?
  if (ans === 1) {
    total = 0;
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove("player--active");
    document.getElementById(`current--${activePlayer}`).textContent = total;
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.toggle("player--active");
  } else {
    total += ans;
    //playerTwoTotalScore.textContent = playerTwoTotal;
    document.getElementById(`current--${activePlayer}`).textContent = total;
    playerOneTotal += total;
  }
}

function switching() {
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.toggle("player--active"); // checks if class is there, if so nothing, but if not it adds
}
function reset() {
  playerOneTotalScore.textContent = Number(0);
  playerOneTotalScore.textContent = Number(0);
  playerTwoTotal = 0;
  playerOneTotal = 0;
  diceEL.classList.add("hidden");
}
