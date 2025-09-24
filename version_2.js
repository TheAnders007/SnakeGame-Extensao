let grid;
let snake;
let fruit;

function setup(){
  createCanvas(450, 450);
  
  grid = width/15;
  
  rectMode(CENTER);
  noStroke();
  
  snake = new Snake();
  fruit = new Fruit();
}

function draw(){
  background(90, 110, 180);
  
  fruit.mostrar()
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

class Fruit {
  constructor() {
    this.x = int(random(0, 15)) * 30 + 15;
    this.y = int(random(0, 15)) * 30 + 15;
  }
  
  novaPos() {
    this.x = int(random(0, 15)) * 30 + 15;
    this.y = int(random(0, 15)) * 30 + 15;
  }
  
  mostrar(){
    fill(220, 0, 30);
    
    rect(this.x, this.y, grid);
    
    print(this.x, this.y)
  }
}


function keyPressed(){
  if (keyCode == LEFT_ARROW){
    snake.pos.x -= grid
  }
  else if (keyCode == RIGHT_ARROW){
    snake.pos.x += grid
  }
  else if (keyCode == UP_ARROW){
    snake.pos.y -= grid
  }
  else if (keyCode == DOWN_ARROW){
    snake.pos.y += grid
  }
}
