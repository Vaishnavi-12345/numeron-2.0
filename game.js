const num1Elem = document.getElementById("number1");
const num2Elem = document.getElementById("number2");
const num3Elem = document.getElementById("number3");
const timerElem = document.getElementById("timer");
let number1;
let number2;
let number3;
let answer;
let operator;
let score = 0;
let intervalId;
let timeRemaining = 20;
// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html
function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }
  
  
  function displayRandomNumbers() {
    number1 = generateRandomNumber();
    number2 = generateRandomNumber();
    num1Elem.innerText = number1;
    num2Elem.innerText = number2;
    operator = selectRandomOperator();
    stopTimer();
  }

// Iteration 3: Creating variables required to make the game functional
function selectRandomOperator() {
    const operators = ["plus", "minus", "mul", "divide", "modulus"];
    const randomIndex = Math.floor(Math.random() * operators.length);
    const selectedOperator = operators[randomIndex];
    computeAnswer(selectedOperator);
    return selectedOperator;
  }
// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"
function computeAnswer(selectedOperator) {
    switch (selectedOperator) {
      case "plus":
        answer = number1 + number2;
        break;
      case "minus":
        answer = number1 - number2;
        break;
      case "mul":
        answer = number1 * number2;
        break;
      case "divide":
        answer = (number1 / number2).toFixed(2);
        break;
      case "modulus":
        answer = number1 % number2;
        break;
    }
    num3Elem.innerText = answer;
  }
  
// Iteration 5: Creating a randomise function to make the game functional
function operatorClickHandler(clickedOperator) {
    if (operator === clickedOperator) {
      score++;
      displayRandomNumbers();
    } else {
      endGame();
    }
  }
// Iteration 6: Making the Operators (button) functional

// Iteration 7: Making Timer functional
function startTimer() {
    intervalId = setInterval(() => {
      timeRemaining--;
      timerElem.innerText = timeRemaining;
      if (timeRemaining === 0) {
        endGame();
      }
    }, 1000);
  }
  function stopTimer() {
    timeRemaining = 20;
    timerElem.innerText = timeRemaining;
  }
  function endGame() {
    stopTimer();
    window.location.href = "./gameover.html";
    localStorage.setItem("score", score);
  }
  const operatorButtons = document.getElementById("buttons");
operatorButtons.addEventListener("click", (event) => {
  if (event.target.tagName === "IMG") {
    operatorClickHandler(event.target.id);
  }
});


displayRandomNumbers();
startTimer();