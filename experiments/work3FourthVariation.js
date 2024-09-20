let time = 0;  
let mouseInteraction = false;  

function setup() {
    createCanvas(1000, 600);
    noLoop();  
}

function draw() {
    background(255); 
    drawFlowField(); 
    drawGridBackground();
    drawInteractiveRectangles();
}

function drawFlowField() {
     // (source garrit lecture slide example)
    const fieldSize = 50; 
    const fieldSizeHalf = fieldSize / 2;
    const maxCols = Math.ceil(width / fieldSize);
    const maxRows = Math.ceil(height / fieldSize);
    const divider = 2; 
  
    for (let x = 0; x < maxCols; x++) {
        for (let y = 0; y < maxRows; y++) {
            const padding = 5;
            const value = noise(x / divider, y / divider) * Math.PI * 2;
            const curveLength = fieldSizeHalf - padding; 
            push();
            translate(x * fieldSize + fieldSizeHalf, y * fieldSize + fieldSizeHalf);
            rotate(value);
            strokeWeight(4);
            
            // Use dynamic color
            stroke((value * 180 / PI) % 255, 100, 150);

             // Draw curve instead of arrow (source chatgpt)
            for (let i = 0; i < 25; i++) {
                const offset = i * 5;
                beginShape();
                const startX = -curveLength + offset;
                const startY = 0;
                const controlX1 = -curveLength / 2 + offset;
                const controlY1 = random(-curveLength, curveLength); 
                const controlX2 = curveLength / 2 + offset;
                const controlY2 = random(-curveLength, curveLength); 
                const endX = curveLength + offset;
                const endY = 0;
        
                // Bezier curve to create a smooth curve
                bezier(startX, startY, controlX1, controlY1, controlX2, controlY2, endX, endY);
        
                endShape();
            }
            pop();
        }
    }
}

// Draw white background for the circular grid
function drawGridBackground() {
    const centerX = width / 2;
    const centerY = height / 2;
    const gridRadius = 250; 
    
    fill(255); 
    noStroke();
    ellipse(centerX, centerY, gridRadius * 2); 
}

function drawInteractiveRectangles() {
    // (source chatgpt)
    const centerX = width / 2;
    const centerY = height / 2;
    const circleRadius = 250; 
    const numberOfRectangles = 400; 
    const minRectSize = 2;   
    const maxRectSize = 15;  
    
    strokeWeight(1);  
    
    time += 0.01; // Increment time for animation

    for (let i = 0; i < numberOfRectangles; i++) {
        // Random angle and radius for the center of each rectangle
        let startAngle = random(TWO_PI);
        let startRadius = random(circleRadius);
    
        // Center point of the rectangle
        let x1 = centerX + startRadius * cos(startAngle);
        let y1 = centerY + startRadius * sin(startAngle);

        // Calculate the distance from the mouse to the center of the canvas
        let distanceFromCenter = dist(mouseX, mouseY, centerX, centerY);
        distanceFromCenter = constrain(distanceFromCenter, 0, circleRadius);
        
        // Map the distance to rectangle size
        let rectSize = minRectSize + (maxRectSize - minRectSize) * (0.5 + 0.5 * sin(time + i)); // Pulsating effect

        // Dynamic color based on mouse position
        let colorVal = map(distanceFromCenter, 0, circleRadius, 0, 255);
        fill(colorVal, 100, 150);  

        // Dynamic stroke weight based on rectangle size
        let strokeW = map(rectSize, minRectSize, maxRectSize, 1, 4);  
        strokeWeight(strokeW);
        stroke(0);  // Black color for stroke

        // Add rotation to rectangles
        push();
        translate(x1, y1);
        rotate(random(TWO_PI));
        rectMode(CENTER);
        rect(0, 0, rectSize, rectSize);  // Square shape
        pop();
    }
}

function mousePressed() {
    mouseInteraction = !mouseInteraction;
    if (mouseInteraction) {
        loop(); 
    } else {
        noLoop(); 
    }
}
