// Alt+L or Alt+o to start live server
const WINDOW_WIDTH = 500;
const WINDOW_HEIGHT = 500;
const BACKGROUND_COLOR = 251;

const SEGMENT_SHORT_SIDE = 30;
const SEGMENT_LONG_SIDE = 80;
const DECIMAL_POINT_RADIUS = 10;
const SEGMENT_OFFSET = 5;
var ON_COLOR;
var OFF_COLOR;

var sevenSegment;


function setup() {
  createCanvas(WINDOW_WIDTH, WINDOW_HEIGHT);
  background(BACKGROUND_COLOR);
  ON_COLOR = color(255, 0, 0);
  OFF_COLOR = color(255, 255, 255);

  sevenSegment = new SevenSegment(
    5, 
    5, 
    SEGMENT_SHORT_SIDE, 
    SEGMENT_LONG_SIDE, 
    DECIMAL_POINT_RADIUS,
    SEGMENT_OFFSET,
    ON_COLOR,
    OFF_COLOR
  );
}

function draw() {
  sevenSegment.show();
}