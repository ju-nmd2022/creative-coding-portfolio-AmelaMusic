function setup() {
  createCanvas(1000, 800);
  background(255);
  strokeWeight(2);
  drawLines();
  noLoop();
}

function drawLines() {
  const numberOfLines = 15;
  const lineSpacing = height / (numberOfLines + 1);

  for (let i = 0; i < numberOfLines; i++) {
    let y = (i + 1) * lineSpacing;
    line(100, y, 900, y);
  }
}

function draw() {}
