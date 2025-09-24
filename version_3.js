let grid;
let snake;
let fruit;

function setup(){
  frameRate(8);
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
  snake.mover()
  snake.comer()
  snake.cauda()
  
}



class Snake {
  constructor() {
    this.pos = createVector(225, 225);
    this.length = 1;
    this.posHistoria = [this.pos];
    this.dir = createVector(0, 0);
  }
  
  mostrar(){
    fill(60, 220, 0);
    
    for(var i = 0; i < this.posHistoria.length; i++){
      rect(this.posHistoria[i].x, this.posHistoria[i].y, grid);
  }
  }
  
  mover(){
    this.pos.x += this.dir.x * grid;
    this.pos.y += this.dir.y * grid;
  }
  
  comer(){
    if (this.pos.x === fruit.x && this.pos.y === fruit.y) {
      fruit.novaPos();
      
      this.length += 1;
    } 
    
  }
  
  cauda(){
    this.posHistoria.push(this.pos.copy())
    
    if(this.posHistoria.length > this.length){
      this.posHistoria.splice(0, 1);
    }
    
    print(this.posHistoria.length);
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
    
    rect(this.x, this.y, grid/2);
    
  }
  
}


function keyPressed(){
  if (keyCode == LEFT_ARROW){
    snake.dir = createVector(-1, 0)
  }
  else if (keyCode == RIGHT_ARROW){
    snake.dir = createVector(1, 0)
  }
  else if (keyCode == UP_ARROW){
    snake.dir = createVector(0, -1)
  }
  else if (keyCode == DOWN_ARROW){
    snake.dir = createVector(0, 1)
  }
}
