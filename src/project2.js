// Do not change any of the function names

const getBiggest = (x, y) => {
  if ( x > y) {
    return x;
  } 
  
  else if (y > x){
    return y;
  }

  else if (x === y) {
    return x || y;
  }

};

const greeting = (language) => {

  // return a greeting for three different languages:
  // language: 'German' -> 'Guten Tag!'
  // language: 'Spanish' -> 'Hola!'
  // language: 'Chinese' -> 'Ni Hao!'
  // if language is undefined return 'Hello!'
};

const isTenOrFive = (num) => {
  if (num ==== 10 || num 5){
    return true;
  } return false;
};

const isInRange = (num) => {
if (num < 50) || (num > 20){
  return true;
} return false;

};

const isInteger = (num) => {
    if (Math.floor(num) === num){
        return true;
    } return false;
};

const fizzBuzz = (num) => {
    if ((num % 3 === 0 && num % 5 === 0)){
        return fizzbuzz;
    } return num;

    if else (num % 3 === 0){
        return fizz;
    } return num;

    if else (num % 5 === 0){
        return buzz;
    } return num;
  
};

const isPrime = (num) => {
    if(num % 1 === 0 || num % num === 0){
        return true;
    } return false;
};

const returnFirst = (arr) => {
  let arr = [pink, green, crimson, creme, purple , gold];
    return arr.shift();
};

const returnLast = (arr) => {
  let arr = [pink, green,crimson,creme,purple,gold];
  return arr.pop();
};

const getArrayLength = (arr) => {
    let arr = [frog, elephant, dove, poodle];
    return arr.length;
};

const incrementByOne = (arr) => { 
let arr = [1,2,3,4,5]
function myfunction(){
    arr.map(++1);
}
};

const addItemToArray = (arr, item) => {

  // add the item to the end of the array
  // return the array
};

const addItemToFront = (arr, item) => {
  // add the item to the front of the array
  // return the array
  // hint: use the array method .unshift
};

const wordsToSentence = (words) => {
  // words is an array of strings
  // return a string that is all of the words concatenated together
  // spaces need to be between each word
  // example: ['Hello', 'world!'] -> 'Hello world!'
};

const contains = (arr, item) => {
  // check to see if item is inside of arr
  // return true if it is, otherwise return false
};

const addNumbers = (numbers) => {
  // numbers is an array of integers.
  // add all of the integers and return the value
};

const averageTestScore = (testScores) => {
  // testScores is an array.  Iterate over testScores and compute the average.
  // return the average
};

const largestNumber = (numbers) => {
  // numbers is an array of integers
  // return the largest integer
};

// Do not modify code below this line.
// --------------------------------

module.exports = {
  getBiggest,
  greeting,
  isTenOrFive,
  isInRange,
  isInteger,
  fizzBuzz,
  isPrime,
  returnFirst,
  returnLast,
  getArrayLength,
  incrementByOne,
  addItemToArray,
  addItemToFront,
  wordsToSentence,
  contains,
  addNumbers,
  averageTestScore,
  largestNumber
};
