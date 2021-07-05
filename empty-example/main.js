// Alt+L or Alt+o to start live server
const WINDOW_WIDTH = 500;
const WINDOW_HEIGHT = 500;
const BACKGROUND_COLOR = 251;

const SEGMENT_SHORT_SIDE = 30;
const SEGMENT_LONG_SIDE = 80;
const DECIMAL_POINT_RADIUS = 15;
const SEGMENT_OFFSET = 1;
var ON_COLOR;
var OFF_COLOR;

var sevenSegment;
var digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'b', 'C', 'd', 'E', 'F']
var count = 0;

function setup() {
  createCanvas(WINDOW_WIDTH, WINDOW_HEIGHT);
  background(BACKGROUND_COLOR);
  ON_COLOR = color(255, 0, 0);
  OFF_COLOR = color(255, 255, 255);
  frameRate(1);

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
  sevenSegment.show(digits[count % digits.length]);
  count++;
}