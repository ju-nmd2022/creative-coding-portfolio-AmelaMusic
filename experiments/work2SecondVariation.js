function setup() {
    createCanvas(1000,600);
    background(255);
    noLoop();  
    drawCircularGrid();
}

function drawCircularGrid() {
    const centerX = width / 2;
    const centerY = height / 2;
    const circleRadius = 100; 
    const numberOfRectangles = 400; 
    const minRectSize = 2;   
    const maxRectSize = 15;  
  
    strokeWeight(1);  

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