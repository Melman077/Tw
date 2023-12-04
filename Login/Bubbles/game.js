document.addEventListener("mousemove", function (e) {
  player.x = e.x;
  player.y = e.y;
});

function animate() {
  //Restart after dead
  if (hp > 0) {
    requestAnimationFrame(animate);
  } else {
    location.reload();
  }

  //Clear system
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  //Coolision system
  for (const enemy of enemies) {
    enemy.update();
    const distance = Math.sqrt(
      (player.x - enemy.x) ** 2 + (player.y - enemy.y) ** 2
    );
    if (distance <= enemy.radius * 2) {
      if (enemy.color == enemyColor) {
        score += 1;
        enemyCounter = enemyCounter + enemyCounter * 0.002;
      }
      enemy.color = "#6f6a6a";
    }

    //When player die??
    if (enemy.y + enemy.radius < 0 && enemy.color == enemyColor && hp > 0) {
      hp -= 1;
      enemy.color = "#6f6a6a";
      hearts[hp].style.display = "none";
    }
  }
  player.draw();
  divScore.innerHTML = score;
}
animate();
