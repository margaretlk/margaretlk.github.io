// setup canvas

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// function to generate random number

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

// function to generate random color

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}

//class for ball - definition of our balls so we call them

class Ball {
  constructor(x, y, velX, velY, color, size) { //making each time we call this class - we make a ball 
    //x and y - coordinates
    //velX and velY - velocity (how fast it moves)
    //color and size - color and size of ball
    this.x = x;
    this.y = y;
    this.velX = velX;
    this.velY = velY;
    this.color = color;
    this.size = size;
    // ^ everytime we call this call, use this constructor with all of the things we need
  }

  draw() {
    //call on our ball object to draw on the screen
    ctx.beginPath(); //start drawing on our canvas (ctx = context)
    ctx.fillStyle = this.color;
    ctx.arc(this.x,this.y,this.size,0,2*Math.PI); //draw a circle
    ctx.fill();
  }

  //making sure ball doesnt go off the screen
updates() {
  if ((this.x + this.size) >= width) {
    this.velX = -(this.velX); //handles right edge of screen
    }
  if ((this.x - this.size) <= 0) { //handles left edge of screen
    this.velX = -(this.velX); //make ball flip velocity if hits right side of screen
  }
//handles the bottom of the screen
    if ((this.y + this.size) >= height) {
    this.velY = -(this.velY);
    }
//handles top of the screen 
     if ((this.y - this.size) <= 0) { 
      this.velY = -(this.velY);
    }
    this.x += this.velX;
    this.y += this.velY;

  }

  collisonDetect() { //to detect if balls run into each other
    for (const ball of balls) {
      if (this !== ball) {
        const dx = this.x - ball.x;
        const dy = this.y - ball.y;
        const distance = Math.sqrt(dx*dx + dy*dy);

        if (distance < this.size + ball.size){
          ball.color = this.color = randomRGB(); //flash different colors when overlap
        }
      }
    }
  }
}

const balls = []; //empty list that will be filled with random balls
while (balls.length < 25) { //while loop based on a condition on length of list
  const size = random(10,20) //every ball will have a randoms size netween 10-20
  const ball = new Ball(
    random(0+size, width-size), //x
    random(0+size, height-size), //y
    random(-7,7), //velocity x
    random(-7,7), //velocity y
    randomRGB(), //random color
    size, //random size

  );
  balls.push(ball);
}

function loop() { //want the fill style to be translucent white 
  ctx.fillStyle = "rgba(0,0,0,0.25)";
  ctx.fillRect(0,0,width,height);
  for (const ball of balls) {
    ball.draw();
    ball.updates();
    ball.collisonDetect();
  }
  requestAnimationFrame(loop); //call the function again so it animates to look smooth
}

loop();