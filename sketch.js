// Variable for rotation
let rotationValue = 0;

// Array for circle colors
let circleColors = [
  '#F92A82',
  '#53917E',
  '#5B507A'
]

// Array for accent colors
let accentColors = [
  '#0CF574',
  '#EDF4ED'
]

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  
  for (let i = 0; i < 8; i++) {
    if (i%2 == 0) {
      fill(accentColors[1]);
    } else {
      fill(accentColors[0]);
    }
    stroke(circleColors[2]);
    push();
    translate(width/2,height/2);
    rotate(-rotationValue+(i*45));
    rect(0,0,27,300);
    pop();
  }
  
  fill(accentColors[1]);
  ellipse(200,200,70);
  
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
      noStroke();
      myDesign(i,j,0);
      myDesign(-i,-j,0);
      myDesign(i,j,45);
      myDesign(-i,-j,45);
      myDesign(i,j,90);
      myDesign(-i,-j,90);
      myDesign(i,j,135);
      myDesign(-i,-j,135);
      myDesign(i,j,180);
      myDesign(-i,-j,180);
      myDesign(i,j,225);
      myDesign(-i,-j,225);
      myDesign(i,j,270);
      myDesign(-i,-j,270);
      myDesign(i,j,315);
      myDesign(-i,-j,315);
      myDesign(i,j,360);
      myDesign(-i,-j,360);
    }
  }
  
  rotationValue++;
}

// function for circles, i and j from for loops
// passed in for x and y. r sets rotation offset
function myDesign(x,y,r) {
  if (x == -1) {
    fill(circleColors[0]);
  } else if (x == 0) {
    fill(circleColors[1]);
  } else if (x == 1){
    fill(circleColors[2]);
  }
  push();
  translate(width/2,height/2);
  rotate(rotationValue+r);
  ellipse((x*50)-75,(y*50)-75,27);
  pop();
}