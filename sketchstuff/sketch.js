var x = 0;
var y = 0;
var xSpeed = 2;
var ySpeed = 2;

function xBallShouldBounce(ballPosition) {
  return ballPosition < 0 || ballPosition > 300;
}

function yBallShouldBounce(ballPosition) {
  return ballPosition < 0 || ballPosition > 100;
}

function setup() {
  createCanvas(300, 100);
}

function speed() {
  x = x + xSpeed;
  y = y + ySpeed;
}

function draw() {
  background(0);

  speed();
  // x = x + xSpeed;
  // y = y + ySpeed;

  if (xBallShouldBounce(x)) {
    xSpeed = xSpeed * -1;
  }

  if (yBallShouldBounce(y)) {
    ySpeed = ySpeed * -1;
  }

  ellipse(x, y, 10, 10);
}
