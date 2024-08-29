function setup() {
  createCanvas(1000, 600);
  background(255);
  strokeWeight(1);
  drawLines();
  drawAngledLines();
  noLoop();
}

function drawLines() {
  const numberOfLines = 20;
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

function drawAngledLines() {
  const numberOfAngledLines = 30;

  for (let i = 0; i < numberOfAngledLines; i++) {
    let y = (i + 1) * (height / (numberOfAngledLines + 1));

    let startX = random(100, 900);

    let lineLength = random(20, 150);

    let angle = radians(random(10, 60));

    // Calculate the end point using trigonometry (source chatgpt)
    let endX = startX + cos(angle) * lineLength;
    let endY = y - sin(angle) * lineLength; // Subtract to angle upwards

    line(startX, y, endX, endY);
  }
}

function draw() {}
