// Do not change any of the funcxtion names

const multiplyByTen = (num) => {
  // return num after multiplying it by ten
  const byTen = num * 10;
  return byTen;
};
const numByTen = multiplyByTen (5);

console.log (numByTen);

const subtractFive = (num) => {
  // return num after subtracting five
  const minusFive = num - 5;
  return minusFive;
};
const numMinusFive = subtractFive (5);

console.log (numMinusFive);

const areSameLength = (str1, str2) => {
  // return true if the two strings have the same length
  // otherwise return false
  // code here
  if (str1.length === str2.length) {
    return true; 
  } else {
    return false;
  }
};

const checkLength = areSameLength ('boat', 'school');

console.log (checkLength);

const areEqual = (x, y) => {
  // return true if x and y are the same
  // otherwise return false
  // code here
  if (x === y) {
    return true;
  } else {
    return false;
  }
};
const same = areEqual(5, 4); 
console.log(same);

const lessThanNinety = (num) => {
  // return true if num is less than ninety
  // otherwise return false
  // code here
  if (num < 90) {
    return true;
  } else { 
    return false;
  }
};
const lessNine = lessThanNinety(45); 
console.log(lessNine); 

const greaterThanFifty = (num) => {
  // return true if num is greater than fifty
  // otherwise return false
  // code here 
  if (num > 50) {
    return true;
  } else {
    return false;
  }
};
const moreFifty = greaterThanFifty(45); 
console.log(moreFifty);

const add = (x, y) => {
  // add x and y together and return the value
  // code here 
  const add = x + y;
  return add;
};
const sum = add(5, 6); 
console.log(sum);

const subtract = (x, y) => {
  // subtract y from x and return the value
  // code here 
  const minus = x - y; 
  return minus; 
};
const min = subtract(3, 2); 
console.log(min); 

const divide = (x, y) => {
  // divide x by y and return the value
  // code here 
  const div = x / y; 
  return div; 
};
const product = divide(35, 5); 
console.log(product); 

const multiply = (x, y) => {
  // multiply x by y and return the value
  // code here 
  const times = x * y; 
  return times;
};
const answer = multiply(9, 9); 
console.log(answer); 

const getRemainder = (x, y) => {
  // return the remainder from dividing x by y
  // code here 
  const remain = x % y; 
  return remain; 
};
const random = getRemainder(71, 5); 
console.log(random); 

const isEven = (num) => {
  // return true if num is even
  // otherwise return false
  // code here 
  if (num % 2 === 0) {
    return true;
  } else {
    return false; 
  }
};
const even = isEven(4); 
console.log(even); 

const isOdd = (num) => {
  // return true if num is odd
  // otherwise return false
  // code here 
  if (num % 2 !== 0) {
    return true;
  } else {
    return false; 
  }
}; 
const odd = isOdd(5); 
console.log(odd); 

const square = (num) => {
  // square num and return the new value
  // code here
  const squ = num * num; 
  return squ;
}; 
const shape = square(6); 
console.log(shape); 

const cube = (num) => {
  // cube num and return the new value
  // code here  
  const cubed = num * num * num; 
  return cubed;
}; 
const timesThree = cube(9); 
console.log(timesThree); 

const raiseToPower = (num, exponent) => {
  // raise num to whatever power is passed in as exponent
  // code here 
  const raise = Math.pow(num, exponent); 
  return raise;
};
const power = raiseToPower(2, 3); 
console.log(power); 

const roundNumber = (num) => {
  // round num and return it
  // code here 
  const round = Math.round(num); 
  return round; 
};
const round2 = roundNumber(0.5); 
console.log(round2);

const roundUp = (num) => {
  // round num up and return it
  // code here  
  const up = Math.ceil(num); 
  return up
};
const round = roundUp(0.5); 
console.log(round); 

const addExclamationPoint = (str) => {
  // add an exclamation point to the end of str and return the new string
  // 'hello world' -> 'hello world!'
  // code here 
  const str1 = str; 
  return str1; 
};
const str = addExclamationPoint('!'); 
console.log("Hello World" + str); 

const combineNames = (firstName, lastName) => {
  // return firstName and lastName combined as one string and separated by a space.
  // 'Lambda', 'School' -> 'Lambda School'
  // code here 
  const school = firstName + lastName; 
  return school; 
};
const names = combineNames('lambda', ' school'); 
console.log(names); 

const getGreeting = (name) => {
  // Take the name string and concatenate other strings onto it so it takes the following form:
  // 'Sam' -> 'Hello Sam!'
  // code here  
  const hello = `Hello ${name}`;  
  return hello;  

}; 
const greet = getGreeting('Ben'); 
console.log(greet); 


// If you can't remember these area formulas then head over to Google or look at the test code.

const getRectangleArea = (length, width) => {
  // return the area of the rectangle by using length and width
  // code here 
  const area = length * width; 
  return area; 
};
const area = getRectangleArea(4, 3); 
console.log(area);  


const getTriangleArea = (base, height) => {
  // return the area of the triangle by using base and height
  // code here  
  const tri = base * height / 2; 
  return tri; 
}; 
const shape2 = getTriangleArea(3, 5);
console.log(shape2); 

const getCircleArea = (radius) => {
  // return the rounded area of the circle given the radius
  // code here 
  const cir = radius * radius * Math.PI; 
  return cir; 
};
const circle = getCircleArea(3); 
console.log(circle);

const getRectangularPrismVolume = (length, width, height) => {
  // return the volume of the 3D rectangular prism given the length, width, and height
  // code here
  const volume = length * width * height; 
  return volume;
}; 
const prism = getRectangularPrismVolume(3, 4, 5); 
console.log(prism); 

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
