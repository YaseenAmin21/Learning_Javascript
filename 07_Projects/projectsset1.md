# Project related to DOM

## Project Link

[Click here](https://github.com/YaseenAmin21/Learning_Javascript/commits/main/)

# Solution Code

## Project 1

```javascript
const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach((btn) => {
  console.log(btn);
  btn.addEventListener("click", function () {
    body.style.backgroundColor = btn.getAttribute("id");
  });
});
```

## Project 2

```javascript
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const height = Number(document.querySelector("#height").value);
  const weight = Number(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  console.log(height);

  if (results === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (results === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }
  //   results.innerHTML = ` ${height}`;
});
```

## Project 3

```Javascript

const clock = document.getElementById("clock");

setInterval(function () {
  let date = new Date();
  console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```

## Project 4

```Javascript

let randomNumber = Math.trunc(Math.random() * 100 + 1);
const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const reamining = document.querySelector(".lastResult");
const lowOrHigh = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

console.log(randomNumber);
const p = document.createElement("p");

let pervGuess = [];
let numGuess = 2;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = Number(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  } else if (guess < 1) {
    alert("Please enter a number more than 1");
  } else if (guess > 100) {
    alert("Please enter a number less than 100");
  } else {
    // pervGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage("You guessed it right");
    endGame();
  } else if (guess < randomNumber) {
    displayMessage("Number is TOOO low");
  } else if (guess > randomNumber) {
    displayMessage("Number is TOOO high");
  }
}

function displayGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML += `${guess},`;
  numGuess++;
  reamining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.append(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGame = document.querySelector("#newGame");

  newGame.addEventListener("click", function () {
    randomNumber = Math.trunc(Math.random() * 100 + 1);
    console.log(randomNumber);
    pervGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = "";
    reamining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);
    playGame = true;
  });
}


```
