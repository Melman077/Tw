// Spacebar.js
const spaceDiv = document.querySelector(".spacebar");

const score = document.querySelector(".score");
var scoreCounter = 0;

const speedIndex = document.querySelector(".scoreCounterPerSec");
let speed = 0;
let shopCounter = 0;

//  Shop.js
const shop = document.querySelector(".shopList");
const shopIcon = document.querySelector(".svg");

//  MUSIC
var clickMusic = true;
function playMusic() {
  let audio = new Audio("lofiMusic.mp3");
  audio.loop = true;
  audio.volume = 0.25;
  audio.play();
}
