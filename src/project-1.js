// Do not change any of the funcxtion names

const multiplyByTen = (num) => {
  return 10 * num
};

const subtractFive = (num) => {
 return num - 5
};

const areSameLength = (str1, str2) => {
 if (str1.length === str2.length){
   return true;
 } return false;
};

const areEqual = (x, y) => {
  if (x === y) {
    return true;
  } return false;
};

const lessThanNinety = (num) => {
  if (num < 90) {
    return true;
  } return false;
};

const greaterThanFifty = (num) => {
  if(num > 50) {
    return true;
  } return false;
};

const add = (x, y) => {
 let sum = x + y;
 return sum;
};

const subtract = (x, y) => {
  let sum = x - y;
  return sum;
};

const divide = (x, y) => {
  let sum = x / y;
  return sum;
};

const multiply = (x, y) => {
  let sum - x * y;
  return sum;
};

const getRemainder = (x, y) => {
  let sum = x % y;
  return sum;
};

const isEven = (num) => {
  if (num % 2 === 0) {
  return true;
} return false;
};

const isOdd = (num) => {
  if (num % 2 === 1) {
    return true:
  } return false;
};

const square = (num) => {
  let sum = num * num 
  return sum;
};

const cube = (num) => {
  return Math.pow(num,3)
};

const raiseToPower = (num, exponent) => {
  retun Math.pow(num,x)
};

const roundNumber = (num) => {
  return Math.round(num);
};

const roundUp = (num) => {
  return Math.ceil(num)
};

const addExclamationPoint = (str) => {
  let sum = str + '!'
  return sum
};

const combineNames = (firstName, lastName) => {
  return firstname + lastname; 
};

const getGreeting = (name) => {
  return Hello + sam + "!";
};

// If you can't remember these area formulas then head over to Google or look at the test code.

const getRectangleArea = (length, width) => {
  let area = l * w;
  return area
};

const getTriangleArea = (base, height) => {
  let area = (base*height)/2;
  return area 
};

const getCircleArea = (radius) => {
  let area = Math.PI(radius *radius)
  return area
};

const getRectangularPrismVolume = (length, width, height) => {
  let volume = (length * width)*height
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
