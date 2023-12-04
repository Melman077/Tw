// Shadow animation on click event && score changer
let keyPress = false;
addEventListener("keyup", function (e) {
  if (e.key == " ") {
    // COOL Space Animation
    spaceDiv.style.boxShadow = "0px 40px 100px 0px rgba(0, 0, 0, 1)";

    //SCORE COUNTER
    keyPress = false;
  }
});

addEventListener("keydown", function (e) {
  if (e.key == " " && !keyPress) {
    // COOL Space Animation
    spaceDiv.style.boxShadow = "0px 40px 50px 0px rgba(0, 0, 0, 1)";

    // SCORE COUNTER
    scoreCounter += 1;
    score.innerHTML = scoreCounter + "$";
    keyPress = true;

    //Avoid ECHO
    if (clickMusic == true) {
      playMusic();
      clickMusic = false;
    }
  }
});
