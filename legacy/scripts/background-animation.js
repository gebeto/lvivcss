var SquaresBackground = {
  squareHeight: 60,
  squareWidth: 64,
  squares: [],
  squareColor: "#FFFFFF",
  maxSquares: 8,
  minScale: 0.4,
  draw: function() {
    this.setCanvasSize();
    this.ctx.clearRect(0, 0, this.w, this.h);
    for (var i = 0; i < this.squares.length; i++) {
      var square = this.squares[i];
      this.ctx.globalAlpha = square.opacity;
      this.ctx.shadowBlur = 20;
      this.ctx.shadowColor = this.squareColor;
      this.ctx.fillStyle = this.squareColor;
      this.ctx.fillRect(square.x, square.y, square.width, square.height);
    }
    this.move();
  },
  move: function() {
    for(var b = 0; b < this.squares.length; b++) {
      var square = this.squares[b];
      square.y += square.ys;
      square.x += square.xs;
      if(square.y > this.h) {
        square.x = Math.random() * this.w;
        square.y = -1 * this.squareHeight;
      }
    }
  },
  setCanvasSize: function() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.w = this.canvas.width;
    this.h = this.canvas.height;
  },
  initialize: function() {
    this.canvas = document.querySelector('#background-animation');

    if(!this.canvas.getContext)
      return;

    this.setCanvasSize();
    this.ctx = this.canvas.getContext('2d');

    for(var a = 0; a < this.maxSquares; a++) {
      var scale = (Math.random() * (1 - this.minScale)) + this.minScale;
      var plusOrMinus = Math.random() < 0.5 ? -1 : 1;
      this.squares.push({
        x: Math.random() * this.w,
        y: Math.random() * this.h,
        ys: Math.random() + 1,
        xs: Math.random() + 1,
        height: scale * this.squareHeight,
        width: scale * this.squareWidth,
        opacity: scale
      });
    }

    setInterval(this.draw.bind(this), 30);
  }
};

document.addEventListener('DOMContentLoaded', function() {
  console.log("DOMContentLoaded");
  
  SquaresBackground.initialize();
});