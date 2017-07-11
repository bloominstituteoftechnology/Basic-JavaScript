// Do not change any of the funcxtion names
const multiplyByTen = num => num * 10;

const subtractFive = num => num - 5;

const areSameLength = (str1, str2) => str1.length === str2.length;

const areEqual = (x, y) => x === y;

const lessThanNinety = num => num < 90;

const greaterThanFifty = num => num > 50;

const add = (x = 0, y = 0) => x + y;

const subtract = (x = 0, y = 0) => x - y;

const divide = (x = 0, y = 0) => x / y;

const multiply = (x = 0, y = 0) => x * y;

const getRemainder = (x, y) => x % y;

const isEven = num => num % 2 === 0;

const isOdd = num => num % 2 > 0;

const square = (num = 0) => num * num;

const cube = num => num * num * num;

const raiseToPower = (num, exponent) => num ** exponent;

const roundNumber = num => Math.round(num);

const roundUp = num => Math.ceil(num);

const addExclamationPoint = str => str.concat('!');

const combineNames = (firstName, lastName) => firstName + ' '.concat(lastName);

const getGreeting = name => 'Hello '.concat(name).concat('!');

const getRectangleArea = (length, width) => length * width;

const getTriangleArea = (base, height) => ((base * height) / 2);

const getCircleArea = radius => Math.round(Math.PI * (radius * radius));

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
