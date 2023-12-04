const gridLength = 4;

const gridBox = document.querySelector(".gridBox");

gridBox.style.height = (100 * gridLength) / 4 + "%";

for (let i = 1; i <= gridLength; i++) {
  const gridItem = document.createElement("div");
  gridItem.className = "gridItem center";
  const gridItemFile = document.createElement("div");
  gridItemFile.className = "gridItemFile center";
  gridItem.onclick = function () {
    console.log("Test" + i);
    document.querySelector("body").style.overflow = "hidden";
    if (i === 1) {
      gridItemFile.style.animation = "enderLeft forwards 2s";
      setTimeout(function () {
        window.location.href = "../Bubbles/index.html";
      }, 1500);
    }
    if (i === 2) {
      gridItemFile.style.animation = "enderRight forwards 2s";
      setTimeout(function () {
        window.location.href = "../Bubbles/index.html";
      }, 1500);
    }
    if (i === 3) {
      gridItemFile.style.animation = "enderLeft forwards 1.5s";
      setTimeout(function () {
        window.location.href = "../Space clicker/index.html";
      }, 1500);
    }
    if (i === 4) {
      gridItemFile.style.animation = "enderRight forwards 2s";
      setTimeout(function () {
        window.location.href = "../Bubbles/index.html";
      }, 1500);
    }
  };
  if (i === 1) gridItemFile.innerHTML = "Bubbles";
  if (i === 2) gridItemFile.innerHTML = "Gravity";
  if (i === 3) gridItemFile.innerHTML = "Spacebar";
  if (i === 4) gridItemFile.innerHTML = "ToDoList";
  gridItem.appendChild(gridItemFile);
  gridBox.appendChild(gridItem);
}
