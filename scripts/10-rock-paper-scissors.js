let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  loss: 0,
  ties: 0,
};

updatescore();
/*
      if (!score) {
        score = {
          wins: 0,
          loss: 0,
          ties: 0,
        };
      }
        */

function ComputerMove() {
  const randomNumber = Math.random();

  let computerMove = "";

  if (randomNumber >= 0 && randomNumber <= 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber <= 2 / 3) {
    computerMove = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber <= 1) {
    computerMove = "scissor";
  }

  return computerMove;
}

function playermove(move) {
  const compmove = ComputerMove();

  result = "";

  if (move === "rock") {
    if (compmove === "rock") {
      result = "you tie";
      score.ties += 1;
    } else if (compmove === "paper") {
      result = "you lose";
      score.loss += 1;
    } else {
      result = "you win";
      score.wins += 1;
    }
  } else if (move === "paper") {
    if (compmove === "paper") {
      result = "you tie";
      score.ties += 1;
    } else if (compmove === "scissor") {
      result = "you lose";
      score.loss += 1;
    } else {
      result = "you win";
      score.wins += 1;
    }
  } else if (move === "scissor") {
    if (compmove === "scissor") {
      result = "you tie";
      score.ties += 1;
    } else if (compmove === "rock") {
      result = "you lose";
      score.loss += 1;
    } else if (compmove === "paper") {
      result = "you win";
      score.wins += 1;
    }
  }

  alert(
    `you picked ${move} and the computer picked ${compmove}. ${result} .
ScoreBoard Wins:${score.wins}, Loss:${score.loss}, tie:${score.ties}`
  );
  localStorage.setItem("score", JSON.stringify(score));
  updatescore();
  update_win();
  update_moves(move, compmove);
}

function updatescore() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `ScoreBoard Wins:${score.wins} Loss:${score.loss}, tie:${score.ties}`;
}

function update_moves(move, compmove) {
  document.querySelector(".js_moves").innerHTML = `you
      <img
        class="move-icon"
        src="rock-paper-scissor-icons/${move}-emoji.png"
        alt=""
      />

      <img
        class="move-icon"
        src="rock-paper-scissor-icons/${compmove}-emoji.png"
        alt=""
      />computer`;
}

function update_win() {
  document.querySelector(".js-win").innerHTML = `${result}`;
}
