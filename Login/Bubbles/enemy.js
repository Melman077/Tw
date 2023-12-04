let enemyColor = "rgb(52, 48, 48)";

class Enemy {
  constructor() {
    this.radius = Math.floor(Math.random() * enemyRadiusMax + enemyRadiusMin);
    this.x = Math.floor(Math.random() * canvas.width);
    this.y = canvas.height + 2 * this.radius;
    this.color = enemyColor;
    this.speed = Math.floor(Math.random() * 5 + 1);
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
  update() {
    this.y -= this.speed;
    this.draw();
  }
}

//Creating infinit enemies
setInterval(() => {
  for (let i = 0; i < enemyCounter; i++) {
    var enemy = new Enemy();
    enemies.push(enemy);
  }
}, 1500);
