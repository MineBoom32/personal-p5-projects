var scrollerFont;

function preload(){
  scrollerFont = loadFont("04B_30__.TTF");
}

var hueShift = 0;
var colorFrameCount = 255;
var inputText = "Greetings from the United States! I am MineBoom, and I'm a novice programmer. I made this short scroller demo as practice. I don't plan on joining the demo or warez scenes, I just made this demo for fun. ===== Shoutouts to my friends! - NobleReign - skatecar - Zeon - Jet - Teddy Behr - Spark";
var scrollerText = inputText.toUpperCase();
var scrollerLength = scrollerText.length;
var scrollerPosition = 700;
var defaultPosition = scrollerPosition;
var minPosition;
var letterSize = 64;

function setup() {
  // put setup code here
  colorMode(HSB,colorFrameCount);
  createCanvas(640, 480);
  console.log(scrollerLength);
  minPosition = width - (scrollerLength*letterSize);
  console.log(minPosition);
  fill(255);
  textAlign(CENTER);
  textSize(letterSize);
  textFont(scrollerFont);
}

function draw() {
  // put drawing code here
  background(0);
  noStroke();
  for (i=0; i<scrollerLength; i++) {
    var letterPosition = scrollerPosition+(i*letterSize);
    if ((letterPosition >= -letterSize/2) && (letterPosition <= width + (letterSize/2))) {
      text(scrollerText.substring(i,i+1), letterPosition, (height/2) + (Math.sin(radians(letterPosition)) * 64) + (letterSize/2))
      // console.log(scrollerText.substring(i,i+1));
    }
  }

  rainbowBar(0);
  rainbowBar(420);
  if (hueShift >= colorFrameCount) {
    hueShift = 0;
  }
  else {
    hueShift++;
  }
  if (scrollerPosition < minPosition) {
    scrollerPosition = defaultPosition;
  }
  else {
    scrollerPosition-=2;
    console.log("Scroller not finished, continuing to position" + scrollerPosition)
  }
}

function rainbowBar(barPos) {
  strokeWeight(1);
  for (i=0; i<60; i++) {
    if (hueShift + i >= colorFrameCount+1) {
      stroke((i+hueShift) - (colorFrameCount+1), colorFrameCount, colorFrameCount);
    }
    else {
      stroke(i+hueShift, colorFrameCount, colorFrameCount);
    }
    line(0, barPos+i, width, barPos+i);
  }
}