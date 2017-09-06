// Do not change any of the funcxtion names

const multiplyByTen = num => num * 10;

const subtractFive = num => num - 5;

const areSameLength = (str1, str2) => str1.length === str2.length;

const areEqual = (x, y) => x === y;

const lessThanNinety = num => num < 90;

const greaterThanFifty = num => num > 50;

const add = (x, y) => x + y;

const subtract = (x, y) => x - y;

const divide = (x, y) => x / y;

const multiply = (x, y) => x * y;

const getRemainder = (x, y) => x % y;

const isEven = num => num % 2 === 0;

const isOdd = num => num % 2 !== 0;

const square = num => num * num;

const cube = num => num * num * num;

const raiseToPower = (num, exponent) => Math.pow(num, exponent);

const roundNumber = num => Math.round(num);

const roundUp = num => Math.ceil(num);

const addExclamationPoint = str => `${str}!`;

const combineNames = (firstName, lastName) => `${firstName} ${lastName}`;

const getGreeting = name => `Hello ${name}!`;

// If you can't remember these area formulas then head over to Google or look at the test code.

const getRectangleArea = (length, width) => length * width;

const getTriangleArea = (base, height) => (base * height) / 2;

const getCircleArea = radius => Math.round(Math.PI * radius * radius);

const getRectangularPrismVolume = (length, width, height) => length * width * height;

// Do not modify code below this line.
// --------------------------------

module.exports = {
  multiplyByTen,
  subtractFive,
  areSameLength,
  areEqual,
  lessThanNinety,
  greaterThanFifty,
  add,
  subtract,
  divide,
  multiply,
  getRemainder,
  isEven,
  isOdd,
  square,
  cube,
  raiseToPower,
  roundNumber,
  roundUp,
  addExclamationPoint,
  combineNames,
  getGreeting,
  getRectangleArea,
  getTriangleArea,
  getCircleArea,
  getRectangularPrismVolume
};
