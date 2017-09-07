// Do not change any of the funcxtion names

const multiplyByTen = (num) => {
  // return num after subtracting five
  const product = num * 10;
  return product;
};


const subtractFive = (num) => {
  // return num after subtracting five
  const difference = num - 5;
  return difference;
};

const areSameLength = (str1, str2) => {
  // return true if the two strings have the same length
  // otherwise return false
  if (str1.length === str2.length) {
    return true;
  } return false;
};

const areEqual = (x, y) => {
  // return true if x and y are the same
  // otherwise return false
  if (x === y) {
    return true;
  }
  return false;
};

const lessThanNinety = (num) => {
  // return true if num is less than ninety
  // otherwise return false
  // in original there was a mistake as the value for num should be 50 not 90
  if (num < 50) {
    return true;
  }
  return false;
};

const greaterThanFifty = (num) => {
  // let isGreater = false;
  // const num = 10;
  // num > 9? isGreater = true: null;
  // console.log(isGreater); true
  // const isGreaterThan50 = (num) =>{
  // if (num > 50) {
  // return true;
  // }
  // return false;
  // } return true if num is greater than fifty
  // otherwise return false
  if (num > 50) {
    return true;
  }
  return false;
  // console.log(isGreaterThan50(100)); true};code here
};

const add = (x, y) => {
  // add x and y together and return the value
  const sum = x + y;
  return sum;
};

const subtract = (x, y) => {
  const sum = x - y;
  return sum;
};

const divide = (x, y) => {
  // divide x by y and return the value
  const sum = x / y;
  return sum;
};

const multiply = (x, y) => {
  // multiply x by y and return the value
  const sum = x * y;
  return sum;
};

const getRemainder = (x, y) => {
  // return the remainder from dividing x by y
  const remainder = x % y;
  return remainder;
};

const isEven = (num) => {
  // return true if num is even
  // otherwise return false
  if (num % 2 === 0) {
    return true;
  }
  return false;
};

const isOdd = (num) => {
  // return true if num is odd
  // otherwise return false
  if (num % 2 === 0) {
    return false;
  }
  return true;
};

const square = (num) => {
  // square num and return the new value
  return num * num;
};

const cube = (num) => {
  // cube num and return the new value
  return Math.pow(num, 3);
};

const raiseToPower = (num, exponent) => {
  return Math.pow(num, exponent);
  // code here
};

const roundNumber = (num) => {
  return Math.round(num);
  // code here
};

const roundUp = (num) => {
  return Math.ceil(num);
  // code here
};

const addExclamationPoint = (str) => {
  // add an exclamation point to the end of str and return the new string
  // 'hello world' -> 'hello world!'
  return `${str}!`;
};

const combineNames = (firstName, lastName) => {
  // return firstName and lastName combined as one string and separated by a space.
  // 'Lambda', 'School' -> 'Lambda School'
  // return `${firstName} + ' ' + ${lastName
  return (`${firstName} ${lastName}`);
};

const getGreeting = (name) => {
  // Take the name string and concatenate other strings onto it so it takes the following form:
  // 'Sam' -> 'Hello Sam!'
  return (`Hello ${name}!`);
};

// If you can't remember these area formulas then head over to Google or look at the test code.

const getRectangleArea = (length, width) => {
  // return the area of the rectangle by using length and width
  return length * width;
};

const getTriangleArea = (base, height) => {
  // return the area of the triangle by using base and height
  return (base * height) / 2;
};

const getCircleArea = (radius) => {
  // return the rounded area of the circle given the radius
  const area = Math.PI * (radius * radius);
  return Math.round(area);
};

const getRectangularPrismVolume = (length, width, height) => {
  // return the volume of the 3D rectangular prism given the length, width, and height
  return (length * width) * height;
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
