// Turning ON/OFF shop----------------
function turnOnShop() {
  shop.style.display = "block";
}
function turnOffShop() {
  shop.style.display = "none";
}

document.addEventListener("keydown", function (e) {
  if (e.key == "p") {
    turnOnShop();
  }

  if (e.key == "Escape") {
    turnOffShop();
  }
});
// Turning ON/OFF shop----------------

// CREATING 10 divs
for (let i = 0; i < 10; i++) {
  let shopButtonBox = document.createElement("div");
  shopButtonBox.classList = "shopButtonBox";
  shopButtonBox.id = "shopButtonBox" + i;
  shop.appendChild(shopButtonBox);
}

// Creating 10 buttons
for (let i = 0; i < 10; i++) {
  // STYLING BUTTONS------------
  let shopButtonBox = document.querySelector("#shopButtonBox" + i);
  let shopButton = document.createElement("button");
  shopButton.classList = "shopButton";
  shopButton.type = "button";
  shopButton.onclick = pruchase;
  // Function on click in shop
  function pruchase() {
    if (scoreCounter >= (i + 1) * 100) {
      scoreCounter = scoreCounter - (i + 1) * 100;
      speed = speed + (i + 1);
      shopCounter++;
    }
  }
  shopButton.innerHTML = (i + 1) * 100 + "$";
  shopButtonBox.appendChild(shopButton);
  // STYLING BUTTONS------------
}

// AUTO PLAYING SYSTE<
setInterval(() => {
  if (speed > 0) {
    scoreCounter = scoreCounter + speed;
    score.innerHTML = scoreCounter + "$";
    speedIndex.innerHTML = speed + "$" + "/s";
  }
}, 1000);
