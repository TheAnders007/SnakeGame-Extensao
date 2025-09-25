let grid;
let snake;
let fruit;

function setup(){
  frameRate(10);
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
  snake.gameOver()
}



class Snake {
  constructor() {
    this.pos = createVector(width/2, height/2);
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
      fruit.novaPos(this);
      
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
  
  gameOver(){
    if (this.pos.x < 0 || this.pos.x > width || this.pos.y < 0 || this.pos.y > height) {
        this.pos = createVector(width/2, height/2);
        this.length = 1;
        this.posHistoria = [this.pos];
        this.dir = createVector(0, 0);
    }
    else{
    for (let i = 0; i < this.posHistoria.length - 1; i++){
        if (this.pos.x === this.posHistoria[i].x && this.pos.y === this.posHistoria[i].y){
            this.pos = createVector(width/2, height/2);
            this.length = 1;
            this.posHistoria = [this.pos];
            this.dir = createVector(0, 0);
            break;
        }
      }
    }
  }
    
}

class Fruit {
  constructor() {
    this.x = int(random(0, 15)) * 30 + 15;
    this.y = int(random(0, 15)) * 30 + 15;
  }
  
  novaPos(objeto) {
    
    let dif = false;
    while (!dif){
      this.x = int(random(0, 15)) * 30 + 15;
      this.y = int(random(0, 15)) * 30 + 15;
      
      dif = true;
      for (let i = 0; i < objeto.posHistoria.length; i++){
        if (this.x === objeto.posHistoria[i].x && this.y === objeto.posHistoria[i].y){
          dif = false;
          break;
        }
      }
    }
  }
  
  mostrar(){
    fill(220, 0, 30);
    
    rect(this.x, this.y, grid/2);
    
  }
  
}


function keyPressed(){
  if (keyCode == LEFT_ARROW && snake.dir.x!= 1){
    snake.dir = createVector(-1, 0)
  }
  else if (keyCode == RIGHT_ARROW && snake.dir.x!= -1){
    snake.dir = createVector(1, 0)
  }
  else if (keyCode == UP_ARROW && snake.dir.y!= 1){
    snake.dir = createVector(0, -1)
  }
  else if (keyCode == DOWN_ARROW && snake.dir.y!= -1){
    snake.dir = createVector(0, 1)
  }
}
