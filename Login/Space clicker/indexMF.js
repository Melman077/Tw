const spaceDiv=document.querySelector(".spacebar"),score=document.querySelector(".score");var scoreCounter=0;const speedIndex=document.querySelector(".scoreCounterPerSec");let speed=0,shopCounter=0;const shop=document.querySelector(".shopList"),shopIcon=document.querySelector(".svg");var clickMusic=!0;function playMusic(){let e=new Audio("lofiMusic.mp3");e.loop=!0,e.volume=.25,e.play()}