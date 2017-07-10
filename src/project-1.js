// Do not change any of the funcxtion names

const multiplyByTen = num => num * 10;
// return num after multiplying it by ten

const subtractFive = num => num - 5;
// return num after subtracting five

const areSameLength = (str1, str2) => str1.length === str2.length;
// return true if the two strings have the same length
// otherwise return false

const areEqual = (x, y) => x === y;
// return true if x and y are the same
// otherwise return false

const lessThanNinety = num => num < 90;
// return true if num is less than ninety
// otherwise return false

const greaterThanFifty = num => num > 50;
// return true if num is greater than fifty
// otherwise return false

const add = (x, y) => x + y;
// add x and y together and return the value

const subtract = (x, y) => x - y;
  // subtract y from x and return the value

const divide = (x, y) => x / y;
  // divide x by y and return the value

const multiply = (x, y) => x * y;
  // multiply x by y and return the value

const getRemainder = (x, y) => x % y;
  // return the remainder from dividing x by y

const isEven = num => num % 2 === 0;
  // return true if num is even
  // otherwise return false

const isOdd = num => num % 2 !== 0;
  // return true if num is false
  // otherwise return false

const square = num => num ** 2;
  // square num and return the new value

const cube = num => num ** 3;
  // cube num and return the new value

const raiseToPower = (num, exponent) => num ** exponent;
  // raise num to whatever power is passed in as exponent

const roundNumber = (num) => {
  // round num and return it
  const rem = num % 1;
  return rem >= 0.5 ? (num - rem) + 1 : num - rem;
};

const roundUp = (num) => {
  // round num up and return it
  const rem = num % 1;
  return rem ? (num + 1) - rem : num;
};

const addExclamationPoint = str => `${str}!`;
  // add an exclamation point to the end of str and return the new string
  // 'hello world' -> 'hello world!'

const combineNames = (firstName, lastName) => `${firstName} ${lastName}`;
  // return firstName and lastName combined as one string and separated by a space.
  // 'Lambda', 'School' -> 'Lambda School'

const getGreeting = name => `Hello ${name}!`;
  // Take the name string and concatenate other strings onto it so it takes the following form:
  // 'Sam' -> 'Hello Sam!'

// If you can't remember these area formulas then head over to Google or look at the test code.

const getRectangleArea = (length, width) => length * width;
  // return the area of the rectangle by using length and width

const getTriangleArea = (base, height) => (height * base) / 2;
  // return the area of the triangle by using base and height

const getCircleArea = radius => Math.round((radius ** 2) * Math.PI);
  // return the rounded area of the circle given the radius

const getRectangularPrismVolume = (length, width, height) => length * width * height;
  // return the volume of the 3D rectangular prism given the length, width, and height

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
