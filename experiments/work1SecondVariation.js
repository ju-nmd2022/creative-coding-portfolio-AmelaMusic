function setup() {
    createCanvas(1000, 600);
    frameRate(3);
  }

function draw() {
    background(0);
    strokeWeight(1);
    drawLines();
    drawAngledLines();
  }
  
  function drawLines() {
    const numberOfLines = 20;
    const lineSpacing = height / (numberOfLines + 1);
  
    for (let i = 0; i < numberOfLines; i++) {
      let y = (i + 1) * lineSpacing;
  
      let offset = random(-60, 60);
      let startX = 100 + offset;
      let endX = 900 + offset;
  
      if (endX < startX) {
        endX = startX + random(1, 10);
      }
      
      stroke(random(255), random(255), random(255));  // Set a random color for each line

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
  
      stroke(random(255), random(255), random(255));  // Set a random color for each line
      line(startX, y, endX, endY);
    }
  }