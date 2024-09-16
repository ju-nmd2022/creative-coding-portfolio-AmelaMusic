let timeOffset = 0; 

function setup() {
    createCanvas(1000, 600);
    frameRate(30);  
}

function draw() {
    background(255);  
    drawFlowField();
}

// Function to draw the flow field with Perlin noise-based movement
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
            const value = noise(x / divider, y / divider, timeOffset) * Math.PI * 2; 
            const curveLength = fieldSizeHalf - padding; 

            // Add Perlin noise-based position (source chatgpt)
            const noiseOffsetX = map(noise(x * 0.1 + timeOffset, y * 0.1), 0, 1, -10, 10);
            const noiseOffsetY = map(noise(x * 0.1, y * 0.1 + timeOffset), 0, 1, -10, 10);

            push();
            translate(x * fieldSize + fieldSizeHalf + noiseOffsetX, y * fieldSize + fieldSizeHalf + noiseOffsetY);
            rotate(value);
            strokeWeight(2);
            stroke(0);

            //draw curve instead of arrow (source chatgpt)
            beginShape();
            const startX = -curveLength;
            const startY = 0;
            const controlX1 = -curveLength / 2;
            const controlY1 = (noise(x * 0.2, y * 0.2) - 0.5) * curveLength * 2;
            const controlX2 = curveLength / 2;
            const controlY2 = (noise(x * 0.3, y * 0.3) - 0.5) * curveLength * 2;
            const endX = curveLength;
            const endY = 0;

            // bezier curve to create a smooth curve
            bezier(startX, startY, controlX1, controlY1, controlX2, controlY2, endX, endY);
            endShape();
            pop();
        }
    }

    timeOffset += 0.01;  
}
