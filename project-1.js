// Do not change any of the funcxtion names

// return num after multiplying it by ten
const multiplyByTen = num => num * 10;

// return num after subtracting five
const subtractFive = num => num - 5;

// return true if the two strings have the same length
const areSameLength = (str1, str2) => str1.length === str2.length;

// return true if x and y are the same otherwise return false
const areEqual = (x, y) => x === y;

// return true if num is less than ninety otherwise return false
const lessThanNinety = num => num < 90;

// return true if num is greater than fifty otherwise retrun false
const greaterThanFifty = num => num > 50;

// add x and y together and return the value
const add = (x, y) => x + y;

// subtract y from x and return the value
const subtract = (x, y) => x - y;

// divide x by y and return the value
const divide = (x, y) => x / y;

// multiply x by y and return the value
const multiply = (x, y) => x * y;

// return the remainder from dividing x by y
const getRemainder = (x, y) => x % y;

// return true if num is even otherwise return false
const isEven = num => num % 2 === 0;

// return true if num is odd otherwise return false
const isOdd = num => num % 2 !== 0;

// square num and return the new value
const square = num => num ** 2;

// cube num and return the new value
const cube = num => num ** 3;

// raise num to whatever power is passed in as exponent
const raiseToPower = (num, exponent) => num ** exponent;

// round num and return it
const roundNumber = num => Math.round(num);

// round num up and return it
const roundUp = num => Math.ceil(num);

// add an exclamation point to the end of str and return the new string 'hello world' -> 'hello world!'
const addExclamationPoint = str => `${str}!`;

// return firstName and lastName combined as one string and separated by a space. 'Lambda', 'School' -> 'Lambda School'
const combineNames = (firstName, lastName) => `${firstName} ${lastName}`;

// Take the name string and concatenate other strings onto it so it takes the following form: 'Sam' -> 'Hello Sam!'
const getGreeting = name => `Hello ${name}!`;

// If you can't remember these area formulas then head over to Google or look at the test code.

// return the area of the rectangle by using length and width
const getRectangleArea = (length, width) => length * width;

// return the area of the triangle by using base and height
const getTriangleArea = (base, height) => (base / 2) * height;

// return the rounded area of the circle given the radius
const getCircleArea = radius => Math.floor(Math.PI * Math.pow(radius, 2));

// return the volume of the 3D rectangular prism given the length, width, and height
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
