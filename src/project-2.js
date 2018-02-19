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
let arr = [1,2,3,4,5];
    arr.map(++1);
    return arr;
}
};

const addItemToArray = (arr, item) => {
  let arr = [item];
arr.push(item);
return arr;
};

const addItemToFront = (arr, item) => {
 let arr = [item];
 arr.shift(item);
 return arr;
};

const wordsToSentence = (words) => {
  words = ['hello', 'world', 'computer', 'science', 'Lambda'];
  words.join(' ');
  return words;
  
};

const contains = (arr, item) => {
  let arr=['dog','cat','letter','ring'];
  arr.includes();
};

const addNumbers = (numbers) => {
  let arr = [1,2,3,4,5];
  let sum = arr.reduce(const(numbers));
  return numbers;

};

const averageTestScore = (testScores) => {
  testScores=[100,80,19,60,80,88,50];
  let sum = testScores.reduce(const(testScores))=>(testScores)/testScores.length;
  return sum;
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
