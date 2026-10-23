let circleHue = 0;

function setup() {
  createCanvas(800, 784);
  colorMode(HSB, 360, 100, 100);
}

function draw() {
  background(0, 0, 94);


  noStroke();
  fill(circleHue, 90, 98);
  rect(0, 0, 360, 315);


  fill(0, 0, 98);
  rect(360, 0, 440, 315);
  rect(0, 315, 800, 200);

  fill(48, 96, 94);
  rect(0, 515, 80, 269);

  fill(0, 0, 98);
  rect(80, 515, 280, 269);

  fill(220, 100, 43);
  rect(360, 515, 240, 240);

 
  stroke(0, 0, 0);
  strokeWeight(10);
  line(360, 0, 360, 784);
  line(80, 515, 80, 784);
  line(600, 515, 600, 784);
  line(360, 755, 600, 755);

  strokeWeight(15);
  line(0, 315, 800, 315);
  line(0, 515, 800, 515);


  circleHue = circleHue + 1;

  if (circleHue >= 360) {
    circleHue = 0;
  }
}