// Do not change any of the funcxtion names

const multiplyByTen = (num) => {
  // return num after multiplying it by ten
  // code here
  const product = num * 10;
  return product;
};

const subtractFive = (num) => {
  // return num after subtracting five
  // code here
  const difference = num - 5;
  return difference;
};

const areSameLength = (str1, str2) => {
 // return true if the two strings have the same length
  // otherwise return false
  // code here
  if (str1.length === str2.length) {
    return true;
  }
  return false;
};

const areEqual = (x, y) => {
  // return true if x and y are the same
  // otherwise return false
  // code here
  if (x === y) {
    return true;
  }
  return false;
};

const lessThanNinety = (num) => {
  // return true if num is less than ninety
  // otherwise return false
  // code here
  if (num < 90) {
    return true;
  }
  return false;
};

const greaterThanFifty = (num) => {
  // return true if num is greater than fifty
  // otherwise return false
  // code here
  if (num > 50) {
    return true;
  }
  return false;
};

const add = (x, y) => {
  // add x and y together and return the value
  // code here
  const sum = x + y;
  return sum;
};

const subtract = (x, y) => {
  // subtract y from x and return the value
  // code here
  const difference = x - y;
  return difference;
};

const divide = (x, y) => {
  // divide x by y and return the value
  // code here
  const quotient = x / y;
  return quotient;
};

const multiply = (x, y) => {
  // multiply x by y and return the value
  // code here
  const product = x * y;
  return product;
};

const getRemainder = (x, y) => {
  // return the remainder from dividing x by y
  // code here
  const remainder = x % y;
  return remainder;
};

const isEven = (num) => {
  // return true if num is even
  // otherwise return false
  // code here
  const even = num % 2;
  if (even === 0) {
    return true;
  }
  return false;
};

const isOdd = (num) => {
  // return true if num is odd
  // otherwise return false
  // code here
  const odd = num % 2;
  if (odd !== 0) {
    return true;
  }
  return false;
};

const square = (num) => {
  // square num and return the new value
  // code here
  const secondPower = Math.pow(num, 2);
  return secondPower;
};

const cube = (num) => {
  // cube num and return the new value
  // code here
  const thirdPower = Math.pow(num, 3);
  return thirdPower;
};

const raiseToPower = (num, exponent) => {
  // raise num to whatever power is passed in as exponent
  // code here
  const anyPower = Math.pow(num, exponent);
  return anyPower;
};

const roundNumber = (num) => {
  // round num and return it
  // code here
  const round = Math.round(num);
  return round;
};

const roundUp = (num) => {
  // round num up and return it
  // code here
  const roundHigher = Math.ceil(num);
  return roundHigher;
};

const addExclamationPoint = (str) => {
  // add an exclamation point to the end of str and return the new string
  // 'hello world' -> 'hello world!'
  // code here
  const newString = `${str}!`;
  return newString;
};

const combineNames = (firstName, lastName) => {
  // return firstName and lastName combined as one string and separated by a space.
  // 'Lambda', 'School' -> 'Lambda School'
  // code here
  const combine = `${firstName} ${lastName}`;
  return combine;
};

const getGreeting = (name) => {
  // Take the name string and concatenate other strings onto it so it takes the following form:
  // 'Sam' -> 'Hello Sam!'
  // code here
  const greet = `Hello ${name}!`;
  return greet;
};

// If you can't remember these area formulas then head over to Google or look at the test code.
const getRectangleArea = (length, width) => {
  // return the area of the rectangle by using length and width
  // code here
  const rArea = length * width;
  return rArea;
};

const getTriangleArea = (base, height) => {
  // return the area of the triangle by using base and height
  // code here
  const tArea = 0.5 * base * height;
  return tArea;
};

const getCircleArea = (radius) => {
  // return the rounded area of the circle given the radius
  // code here
  const cArea = Math.round(Math.PI * radius * radius);
  return cArea;
};

const getRectangularPrismVolume = (length, width, height) => {
  // return the volume of the 3D rectangular prism given the length, width, and height
  // code here
  const pVolume = length * width * height;
  return pVolume;
};

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
