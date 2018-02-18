// Do not change any of the funcxtion names

const multiplyByTen = (num) => {
  // return num after multiplying it by ten
  // code here
  return num * 10;
};

const subtractFive = (num) => {
  // return num after subtracting five
  // code here
  return num - 5;
};

const areSameLength = (str1, str2) => {
  // return true if the two strings have the same length
  // otherwise return false
  // code here
  return str1.length === str2.length;
};

const areEqual = (x, y) => {
  // return true if x and y are the same
  // otherwise return false
  // code here
  return x === y;
};

const lessThanNinety = (num) => {
  // return true if num is less than ninety
  // otherwise return false
  // code here
  return num < 90;
};

const greaterThanFifty = (num) => {
  // return true if num is greater than fifty
  // otherwise return false
  // code here
  return num > 50;
};

const add = (x, y) => {
  // add x and y together and return the value
  // code here
  return x + y;
};

const subtract = (x, y) => {
  // subtract y from x and return the value
  // code here
  return x - y;
};

const divide = (x, y) => {
  // divide x by y and return the value
  // code here
  return x / y;
};

const multiply = (x, y) => {
  // multiply x by y and return the value
  // code here
  return x * y;
};

const getRemainder = (x, y) => {
  // return the remainder from dividing x by y
  // code here
  return x % y;
};

const isEven = (num) => {
  // return true if num is even
  // otherwise return false
  // code here
  return num % 2 === 0;
};

const isOdd = (num) => {
  // return true if num is odd
  // otherwise return false
  // code here
  return num % 2 === 1;
};

const square = (num) => {
  // square num and return the new value
  // code here
  return Math.pow(num, 2);
};

const cube = (num) => {
  // cube num and return the new value
  // code here
  return Math.pow(num, 3);
};

const raiseToPower = (num, exponent) => {
  // raise num to whatever power is passed in as exponent
  // code here
  return Math.pow(num, exponent);
};

const roundNumber = (num) => {
  // round num and return it
  // code here
  return Math.round(num);
};

const roundUp = (num) => {
  // round num up and return it
  // code here
  return Math.ceil(num);
};

const addExclamationPoint = (str) => {
  // add an exclamation point to the end of str and return the new string
  // 'hello world' -> 'hello world!'
  // code here
  return `${str}!`;
};

const combineNames = (firstName, lastName) => {
  // return firstName and lastName combined as one string and separated by a space.
  // 'Lambda', 'School' -> 'Lambda School'
  // code here
  return `${firstName} ${lastName}`;
};

const getGreeting = (name) => {
  // Take the name string and concatenate other strings onto it so it takes the following form:
  // 'Sam' -> 'Hello Sam!'
  // code here
  return `Hello ${name}!`;
};

// If you can't remember these area formulas then head over to Google or look at the test code.

const getRectangleArea = (length, width) => {
  // return the area of the rectangle by using length and width
  // code here
  return length * width;
};

const getTriangleArea = (base, height) => {
  // return the area of the triangle by using base and height
  // code here
  return (base * height) * 0.5;
};

const getCircleArea = (radius) => {
  // return the rounded area of the circle given the radius
  // code here
  return Math.round((Math.PI * (Math.pow(radius, 2))));
};

const getRectangularPrismVolume = (length, width, height) => {
  // return the volume of the 3D rectangular prism given the length, width, and height
  // code here
  return length * width * height;
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
