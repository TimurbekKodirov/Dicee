var randomNumber1 = Math.round(Math.random() * 5 + 1);
var randomNumber2 = Math.round(Math.random() * 5 + 1);
var leftImage = document.getElementsByClassName("img1");
var rightImage = document.getElementsByClassName("img2");

function leftImageChanger() {
  if (randomNumber1 === 1) {
    leftImage.setAttribute("src", "images/dice1.png");
  } else if (randomNumber1 === 2) {
    leftImage.setAttribute("src", "images/dice2.png");
  } else if (randomNumber1 === 3) {
    leftImage.setAttribute("src", "images/dice3.png");
  } else if (randomNumber1 === 4) {
    leftImage.setAttribute("src", "images/dice4.png");
  } else if (randomNumber1 === 5) {
    leftImage.setAttribute("src", "images/dice5.png");
  } else {
    leftImage.setAttribute("src", "images/dice6.png");
  }
}
leftImageChanger();

function rightImageChanger() {
  if (randomNumber2 === 1) {
    rightImage.setAttribute("src", "images/dice1.png");
  } else if (randomNumber2 === 2) {
    rightImage.setAttribute("src", "images/dice2.png");
  } else if (randomNumber2 === 3) {
    rightImage.setAttribute("src", "images/dice3.png");
  } else if (randomNumber2 === 4) {
    rightImage.setAttribute("src", "images/dice4.png");
  } else if (randomNumber2 === 5) {
    rightImage.setAttribute("src", "images/dice5.png");
  } else {
    rightImage.setAttribute("src", "images/dice6.png");
  }
}
rightImageChanger();

function winnerDetector() {
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "player one won";
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "player two won";
  } else {
    document.querySelector("h1").innerHTML = "draw";
  }
}
winnerDetector();

