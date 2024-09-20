let synth;

      function setup() {
        createCanvas(1000, 600);
        background(255);
        noLoop();
        drawCircularGrid();

        synth = new Tone.Oscillator(440, "sine").toDestination();
      }

      function drawCircularGrid() {
        const centerX = width / 2;
        const centerY = height / 2;
        const circleRadius = 250;
        const numberOfRectangles = 400;
        const minRectSize = 2;
        const maxRectSize = 15;

        strokeWeight(1);
        fill(0);

        for (let i = 0; i < numberOfRectangles; i++) {
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

      function mousePressed() {
        Tone.start(); 
        synth.start(); 
        setTimeout(() => {
          synth.stop(); 
        }, 1000); 
      }



      // EX: higher sounds on top of screen, lower sounds at the bottom
      // different sound based on rectangles size / angle or distance from center
      // Only one rectangle at a time is drawn , each playing a sound
