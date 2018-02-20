// Do not change any of the funcxtion names

const multiplyByTen = (num) => {
  return num * 10;

  // return num after multiplying it by ten
  // code here
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
if (str1.length === str2.length) {
  return true;
} else {
  return false;
}
};

const areEqual = (x, y) => {
  // return true if x and y are the same
  // otherwise return false
  // code here
if(x===y){
return true;
}else{
return false;
}
};

const lessThanNinety = (num) => {
  // return true if num is less than ninety
  // otherwise return false
  // code here
if(num<90){
return true;
}else{
return false;
}
};

const greaterThanFifty = (num) => {
  // return true if num is greater than fifty
  // otherwise return false
  // code here
if(num>50){
return true;
}else{
return false;
}
};

const add = (x, y) => {
  // add x and y together and return the value
  // code here
  var result = x+y;
  return result;
};

const subtract = (x, y) => {
  // subtract y from x and return the value
  // code here
var result = x-y;
return result;
};

const divide = (x, y) => {
  // divide x by y and return the value
  // code here
var result = x/y;
return result;
};

const multiply = (x, y) => {
  // multiply x by y and return the value
  // code here
var result = x*y;
return result;
};

const getRemainder = (x, y) => {
  // return the remainder from dividing x by y
  // code here
var result = x%y;
return result;
};

const isEven = (num) => {
  // return true if num is even
  // otherwise return false
  // code here
if(num%2 ==0){
return true;
}else{
return false;
}
};

const isOdd = (num) => {
  // return true if num is odd
  // otherwise return false
  // code here
if(num%2 !=0){
return true;
}else{
return false;
}
};

const square = (num) => {
  // square num and return the new value
  // code here
var result = Math.pow(num,2);
return result;
};

const cube = (num) => {
  // cube num and return the new value
  // code here
var result = Math.pow(num,3);
return result;

};

const raiseToPower = (num, exponent) => {
  // raise num to whatever power is passed in as exponent
  // code here
var result = Math.pow(num,exponent);
return result;

};

const roundNumber = (num) => {
  // round num and return it
  // code here
var result = Math.round(num) 
return result;
};

const roundUp = (num) => {
  // round num up and return it
  // code here
var result = Math.ceil(num)
return result;

};

const addExclamationPoint = (str) => {
  // add an exclamation point to the end of str and return the new string
  // 'hello world' -> 'hello world!'
  // code here
var result = str + '!';
return result;
};

const combineNames = (firstName, lastName) => {
  // return firstName and lastName combined as one string and separated by a space.
  // 'Lambda', 'School' -> 'Lambda School'
  // code here
var result = firsName + ' ' + lastName;
return result;

};

const getGreeting = (name) => {
  // Take the name string and concatenate other strings onto it so it takes the following form:
  // 'Sam' -> 'Hello Sam!'
  // code here
var result = 'Hello' + ' ' + name + '!';
return result;

};

// If you can't remember these area formulas then head over to Google or look at the test code.

const getRectangleArea = (length, width) => {
  // return the area of the rectangle by using length and width
  // code here
var result = length*width;
return result;
};

const getTriangleArea = (base, height) => {
  // return the area of the triangle by using base and height
  // code here
  var result = 0.5 * base * height;
  return result;

};

const getCircleArea = (radius) => {
  // return the rounded area of the circle given the radius
  // code here 
var result = Math.PI*Math.pow(radius,2);
return result;

};

const getRectangularPrismVolume = (length, width, height) => {
  // return the volume of the 3D rectangular prism given the length, width, and height
  // code here
var result = length*width*height;
return result;

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
