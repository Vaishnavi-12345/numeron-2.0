// Iteration 8: Making scoreboard functional
function displayScore() {
    const scoreBoard = document.getElementById("score-board");
    const playerScore = localStorage.getItem("score");
    if (scoreBoard && playerScore) {
      scoreBoard.innerText = playerScore;
    }
  }
  
  
  const playAgainBtn = document.getElementById("play-again-button");
  if (playAgainBtn) {
    playAgainBtn.addEventListener("click", function () {
      window.location.href = "./game.html";
    });
  }
  
  
  displayScore();
