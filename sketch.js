
let shapes = [];
let cols = 3; let rows =3;
let gridSize;

function setup() {
  createCanvas(400, 400);
  gridSize = width/cols;
  angleMode(DEGREES);
  
 s = new Shape(gridSize, 100, 200);
}

function draw() {
  background(220);
  s.display();
  s.move();
  
}