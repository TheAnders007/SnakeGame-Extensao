let snake;

function setup(){
  createCanvas(400, 400);
  snake = createVector(50, 50);
  strokeWeight(5);
}

function draw(){
  background(220);
  point(snake);
}

function keyPressed(){
  if (keyCode == RIGHT_ARROW) snake.x += 5;
  else if (keyCode == LEFT_ARROW) snake.x -= 5;
  else if (keyCode == UP_ARROW) snake.y -= 5;
  else if (keyCode == DOWN_ARROW) snake.y += 5;
}
