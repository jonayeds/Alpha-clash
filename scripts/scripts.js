function startGame() {
  document
    .getElementById("play-now-btn")
    .addEventListener("click", function () {
      let homeScreen = document.getElementById("home-screen");
      homeScreen.classList.add("hidden");
      let playGround = document.getElementById("playground");
      playGround.classList.remove("hidden");
      gameLoop();
    });
}

function gameLoop() {
    for(let i=0; i<26;i++){
        let kbd = document.getElementsByClassName('kbd')
        kbd[i].classList.remove('bg-orange-400')
    }
  let alpha = "abcdefghijklmnopqrstuvwxyz";
  let randomAlpha = alpha[parseInt(Math.random() * 25)];
  let display = document.getElementById("display");
  display.innerText = randomAlpha;

  highlight(randomAlpha);
}

function scorePage() {
  let playground = document.getElementById("playground");
  playground.classList.add("hidden");
  let scorePage = document.getElementById("scorePage");
  scorePage.classList.remove("hidden");
}

function highlight(button) {
  document.getElementById(button).classList.add("bg-orange-400");
}


function playAgain(){
    document
    .getElementById("play-again")
    .addEventListener("click", function () {
      document.getElementById("scorePage").classList.add("hidden");
      document.getElementById("playground").classList.remove("hidden");
      gameLoop();
      document.getElementById("life").innerText = 3;
      document.getElementById("score").innerText = 0;
    });
}

// var score= 0
// var life = 3
startGame();

document.addEventListener("keyup", function (event) {
  let currentAlpha = document.getElementById("display").innerText;
    
  let score = parseInt(document.getElementById("score").innerText);
  if (currentAlpha === event.key) {
    score++;
    document.getElementById(currentAlpha).classList.remove("bg-orange-400");
    document.getElementById("score").innerText = score;

    gameLoop();
  } else {
    let life = parseInt(document.getElementById("life").innerText);
    life--;
    document.getElementById("life").innerText = life;
    if (life >= 1) {
      document.getElementById(currentAlpha).classList.remove("bg-orange-400");
      gameLoop();
    } else {
      document.getElementById(currentAlpha).classList.remove("bg-orange-400");

      scorePage();

      document.getElementById("final-score").innerText = score;
      playAgain()
     
    }
  }
  if(event.key === 'Escape'){
    scorePage()
    document.getElementById("final-score").innerText = score;
    playAgain()
}
});
