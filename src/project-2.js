// Do not change any of the function names

const getBiggest = (x, y) => {
  // x and y are integers.  Return the larger integer
  // if they are the same return either one
};

const greeting = (language) => {
  // return a greeting for three different languages:
  // language: 'German' -> 'Guten Tag!'
  // language: 'English' -> 'Hello!'
  // language: 'Spanish' -> 'Hola!'
  // if language is undefined return 'Hello!'
};

const isTenOrFive = (num) => {
  // return true if num is 10 or 5
  // otherwise return false
};

const isInRange = num => num > 20 && num < 50;

const isInteger = num => num % 1 === 0;

const fizzBuzz = (num) => {
  const isDivisible = () => {
    this.by3 = num % 3 === 0;
    this.by5 = num % 5 === 0;
    this.bitmap = [this.by5 && this.by3 ? 'fizzbuzz' : false, this.by5 === true ? 'buzz' : false, this.by3 === true ? 'fizz' : false];
    let result = num;
    this.bitmap.forEach((t, i) => {
      result = t !== false && (result.length < t.length || result.length === undefined) ? t : result;
    });
    return result;
  };
  return isDivisible();
};

const isPrime = (num) => {
  // return true if num is prime.
  // otherwise return false
  // hint: a prime number is only evenly divisible by itself and 1
  // hint2: you can solve this using a for loop
  // note: 0 and 1 are NOT considered prime numbers
};

const returnFirst = (arr) => {
  // return the first item from the array
};

const returnLast = (arr) => {
  // return the last item of the array
};

const getArrayLength = (arr) => {
  // return the length of the array
};

const incrementByOne = (arr) => {
  // arr is an array of integers
  // increase each integer by one
  // return the array
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
