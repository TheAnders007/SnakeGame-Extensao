let grid;
let snake;

function setup(){
  createCanvas(450, 450);
  
  grid = width/15;
  
  rectMode(CENTER);
  noStroke();
  
  snake = new Snake();
}

function draw(){
  background(90, 110, 180);
  
  snake.mostrar()
}


class Snake {
  constructor() {
    this.pos = createVector(225, 225);
  }
  
  mostrar(){
    fill(60, 220, 0);
    
    rect(this.pos.x, this.pos.y, grid);
  }
}
