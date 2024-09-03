function setup() {
    createCanvas(1000,600);
    noLoop();  
}

  function draw() {
    background(255); 
    drawFlowField(); 
    drawCircularGrid(); 
  }

  function drawFlowField() {
    const fieldSize = 50; 
    const fieldSizeHalf = fieldSize / 2;
    const maxCols = Math.ceil(width / fieldSize);
    const maxRows = Math.ceil(height / fieldSize);
    const divider = 2;
  
    for (let x = 0; x < maxCols; x++) {
        for (let y = 0; y < maxRows; y++) {
          const padding = 10;
          const value = noise(x / divider, y / divider) * Math.PI * 2;
          push();
          translate(x * fieldSize + fieldSizeHalf, y * fieldSize + fieldSizeHalf);
          rotate(value);
          strokeWeight(4);
          fill(0, 0, 0);
          line(-fieldSizeHalf + padding, 0, fieldSizeHalf - padding, 0);
          triangle(
            fieldSizeHalf - padding,
            0,
            fieldSizeHalf - padding * 2,
            padding,
            fieldSizeHalf - padding * 2,
            -padding
          );
          pop();
      }
    }
  }

function drawCircularGrid() {
    const centerX = width / 2;
    const centerY = height / 2;
    const circleRadius = 250; 
    const numberOfRectangles = 400; 
    const minRectSize = 2;   
    const maxRectSize = 15;  
  
    strokeWeight(1);  
    fill(0) 

    for (let i = 0; i < numberOfRectangles; i++) {
        // Random angle and radius for the center of each rectangle (source chatgpt line 21,22,25,26)
        let startAngle = random(TWO_PI);
        let startRadius = random(circleRadius);
    
        // Center point of the rectangle
        let x1 = centerX + startRadius * cos(startAngle);
        let y1 = centerY + startRadius * sin(startAngle);
    
        let rectWidth = random(minRectSize, maxRectSize);
        let rectHeight = random(minRectSize, maxRectSize);
    
        rect(x1, y1, rectWidth, rectHeight);
      }
}