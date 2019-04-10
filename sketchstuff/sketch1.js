function square(x, y, size) {
  rect(x, y, size, size);
}

function roof(x, y, w, h) {
  // ...
  triangle(x, y, x + w / 2, y - h / 2, x + w, y);
}

function house(x, y, w, h) {
  // ...
  roof(x, y, w, h);
  rect(x, y, w, h);
}

function setup() {
  // setup defines initial program parameters such as size (createCanvas), and background colour (background).
  createCanvas(800, 800);
  background(255);
}

function draw() {
  // draw is a function that describes a continuous execution of code, for instance shapes,
  // transformations, at the current framerate (default 60).
  fill(255, 130, 0);
  // fill defines the fill colour of the shapes to be defined after, in this instance using RGB values.
  stroke(0);
  // stroke defines the border colour of the shapes to be defined, in this instance using grayscale integer values.
  house(0, 40, 90, 90);
  house(100, 40, 100, 110);
  house(210, 40, 200, 300);
  house(mouseX, mouseY, mouseX, mouseY);
}
