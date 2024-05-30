let option = 0;

document.getElementById("Rock").onclick = function () {
  myfunction(1);
};
document.getElementById("paper").onclick = function () {
  myfunction(2);
};
document.getElementById("scissors").onclick = function () {
  myfunction(3);
};
document.getElementById("reset").onclick = function () {
  document.getElementById(
    "js-score"
  ).innerHTML = `win :${(score.win = 0)} , loss :${(score.loss = 0)},  tie:${(score.tie = 0)}`;
  score.win = 0;
  score.loss = 0;
  score.tie = 0;
  alert(`score reset \n
  win :${score.win} , loss :${score.loss},  tie:${score.tie}`);
};
let score = JSON.parse(localStorage.getItem("score"));
function myfunction(option) {
  let cmp = Math.floor(Math.random() * 3) + 1;
  let ComputerMove = "";
  let result = "";
  if (cmp == 1) {
    ComputerMove = "Rock";
  } else if (cmp == 2) {
    ComputerMove = "Paper";
  } else if (cmp == 3) {
    ComputerMove = "Scissors";
  }
  let yourMove = "";
  switch (option) {
    case 1:
      yourMove = "rock";
      break;
    case 2:
      yourMove = "paper";
      break;
    case 3:
      yourMove = "scissors";
      break;
  }
  if (cmp == option) {
    result = `Computer chooses => ${ComputerMove} and your move => ${yourMove} 
    It's a tie!`;
  } else if (cmp == 1 && option == 2) {
    result = `Computer chooses => ${ComputerMove} and your move => ${yourMove}, You win`;
  } else if (cmp == 1 && option == 3) {
    result = `Computer chooses => ${ComputerMove} and your move => ${yourMove} , You loss`;
  } else if (cmp == 2 && option == 1) {
    result = `Computer chooses => ${ComputerMove} and your move => ${yourMove} , You loss`;
  } else if (cmp == 2 && option == 3) {
    result = `Computer chooses => ${ComputerMove} and your move => ${yourMove} , You win`;
  } else if (cmp == 3 && option == 1) {
    result = `Computer chooses => ${ComputerMove} and your move => ${yourMove} , You win`;
  } else if (cmp == 3 && option == 2) {
    result = `Computer chooses => ${ComputerMove} and your move => ${yourMove} , You loss`;
  }

  if (result === "win") {
    score.win += 1;
  } else if (result === "loss") {
    score.loss += 1;
  } else {
    score.tie += 1;
  }

  localStorage.setItem("score", JSON.stringify(score));

  document.getElementById(
    "js-score"
  ).innerHTML = `win :${score.win} , loss :${score.loss},  tie:${score.tie}`;

  let x = document.getElementById("js-result");
  if (result === "loss") {
    x.innerHTML = `you ${result}`;
  } else if (result === "win") {
    x.innerHTML = `you ${result}`;
  } else {
    x.innerHTML = `${result}`;
  }

  document.getElementById(
    "js-move"
  ).innerHTML = `<p id="js-move">You choose<img src="/Project/Rock_paper_scissors/images/paper-emoji.png" class="emoji">, Computer choose<img src="/Project/Rock_paper_scissors/images/paper-emoji.png" class="emoji"></p>`;
  alert(`you choose ${yourMove}, Computer choose ${ComputerMove}, ${result} \n
  win :${score.win} , loss :${score.loss},  tie:${score.tie}`);
}
document.getElementById(
  "js-score"
).innerHTML = `win :${score.win} , loss :${score.loss},  tie:${score.tie}`;
/* 1 =rock , 2= paper , 3=scissors*/
