class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = playerRadius;
    this.color = "black";
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}
var player = new Player();
