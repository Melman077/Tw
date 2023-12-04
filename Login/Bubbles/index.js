const canvas = document.querySelector("#canvas1");
const ctx = canvas.getContext("2d");
canvas.style.background = "#6f6a6a";

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const divScore = document.querySelector(".score");
const enemies = [];

var score = 0;
var hp = 5;
// var enemyCounter = 7;
// var playerRadius = 50;
// var enemyRadius = Math.floor(Math.random() * 50 + 25);

const hearts = [
  document.querySelector("#heart1"),
  document.querySelector("#heart2"),
  document.querySelector("#heart3"),
  document.querySelector("#heart4"),
  document.querySelector("#heart5"),
];

// MEDIA RES
if (window.innerWidth < 600) {
  var enemyCounter = 7;
  var playerRadius = 40;
  var enemyRadiusMax = 30;
  var enemyRadiusMin = 25;
} else if (window.innerWidth >= 600 && window.innerWidth < 786) {
  var enemyCounter = 7;
  var playerRadius = 50;
  var enemyRadiusMax = 35;
  var enemyRadiusMin = 25;
} else if (window.innerWidth >= 768 && window.innerWidth < 992) {
  var enemyCounter = 7;
  var playerRadius = 50;
  var enemyRadiusMax = 40;
  var enemyRadiusMin = 25;
} else if (window.innerWidth >= 992 && window.innerWidth < 1200) {
  var enemyCounter = 7;
  var playerRadius = 55;
  var enemyRadiusMax = 45;
  var enemyRadiusMin = 25;
} else if (window.innerWidth >= 1200) {
  var enemyCounter = 7;
  var playerRadius = 60;
  var enemyRadiusMax = 50;
  var enemyRadiusMin = 25;
}
