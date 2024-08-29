function setup() {
  createCanvas(1000, 600);
  background(255);
  strokeWeight(1);
  drawLines();
  noLoop();
}

function drawLines() {
  const numberOfLines = 15;
  const lineSpacing = height / (numberOfLines + 1);
  const lineLength = 200;

  for (let i = 0; i < numberOfLines; i++) {
    let y = (i + 1) * lineSpacing;

    let offset = random(-60, 60);
    let startX = 100 + offset;
    let endX = 900 + offset;

    if (endX < startX) {
      endX = startX + random(1, 10);
    }

    line(startX, y, endX, y);
  }
}

function draw() {}
