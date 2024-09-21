let synth;
let rectangleIndex = 0;
let rectangles = [];
let timeoutID; // To track and clear timeouts

function setup() {
  createCanvas(1000, 600);
  background(255);
  noLoop();

  // Initialize the Tone.js synth (simple oscillator)
  synth = new Tone.Synth().toDestination();

  // Prepare the rectangles for later sequential drawing
  prepareRectangles();

  textAlign(CENTER, CENTER);
  textSize(24);
  fill(0);
  text('Click to start sound!', width / 2, height / 2);
}

// Prepare the data for rectangles
function prepareRectangles() {
  const centerX = width / 2;
  const centerY = height / 2;
  const circleRadius = 250;
  const numberOfRectangles = 400;
  const minRectSize = 2;
  const maxRectSize = 15;

  for (let i = 0; i < numberOfRectangles; i++) {
    // Random angle and radius for the center of each rectangle (source chatgpt)

    let startAngle = random(TWO_PI);
    let startRadius = random(circleRadius);

    // Center point of the rectangle
    let x1 = centerX + startRadius * cos(startAngle);
    let y1 = centerY + startRadius * sin(startAngle);

    let rectWidth = random(minRectSize, maxRectSize);
    let rectHeight = random(minRectSize, maxRectSize);

    rectangles.push({
      x: x1,
      y: y1,
      width: rectWidth,
      height: rectHeight,
    });
  }
}

function mousePressed() {
  Tone.start(); 
  background(255); 
  rectangleIndex = 0; 

  // Clear any ongoing timeouts to prevent speeding up (chatgpt)
  if (timeoutID) {
    clearTimeout(timeoutID);
  }

  drawRectanglesSequentially();
}

// Draw rectangles one by one with sound (chatgpt)
function drawRectanglesSequentially() {
  if (rectangleIndex < rectangles.length) {
    let rectData = rectangles[rectangleIndex];

    rect(rectData.x, rectData.y, rectData.width, rectData.height);

    let frequency = map(
      rectData.width * rectData.height,
      4, // minRectSize * minRectSize
      225, // maxRectSize * maxRectSize
      200,
      800
    );

    // Calculate volume based on distance from the center
    let distance = dist(width / 2, height / 2, rectData.x, rectData.y);
    let volume = map(distance, 0, 250, -12, 0); // Volume decreases with distance

    playSound(frequency, volume);

    rectangleIndex++;
    
    // Schedule the next rectangle to be drawn after a delay
    timeoutID = setTimeout(drawRectanglesSequentially, 400);
  }
}

// Play sound based on calculated frequency and volume
function playSound(frequency, volume) {
  synth.volume.value = volume; 
  synth.triggerAttackRelease(frequency, "8n");
}