function setup() {
    createCanvas(1000, 600);
    background(255);
    strokeWeight(3);
    drawGrid();
    drawLines();
    drawAngledLines();
    noLoop();
  }

  function drawGrid() {
    const gridSpacing = 30; 
  
    stroke(200); 
    strokeWeight(1); 
  
    // Draw vertical lines (source chatgpt line 18,19)
    for (let x = 0; x <= width; x += gridSpacing) {
      line(x, 0, x, height);
    }
  
    // Draw horizontal lines (source chatgpt line 23,24)
    for (let y = 0; y <= height; y += gridSpacing) {
      line(0, y, width, y);
    }
  }
  
  function drawLines() {
    const numberOfLines = 20;
    const lineSpacing = height / (numberOfLines + 1);
  
    for (let i = 0; i < numberOfLines; i++) {
      let y = (i + 1) * lineSpacing;
  
      // ad offset (source chatgpt line 18,19,20)
      let offset = random(-60, 60);
      let startX = 100 + offset;
      let endX = 900 + offset;
  
      if (endX < startX) {
        endX = startX + random(1, 10);
      }

      stroke(30, 100, 255);
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