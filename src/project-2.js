// Do not change any of the function names

// x and y are integers.  Return the larger integer if they are the same return either one
const getBiggest = (x, y) => (x > y ? x : y);

// return a greeting for three different languages:
// language: 'German' -> 'Guten Tag!'
// language: 'Spanish' -> 'Hola!'
// language: 'Chinese' -> 'Ni Hao!'
// if language is undefined return 'Hello!'
const greeting = (language = 'English') => {
  if (language === 'German') {
    return 'Guten Tag!';
  }
  if (language === 'Spanish') {
    return 'Hola!';
  }
  if (language === 'Chinese') {
    return 'Ni Hao!';
  }
  if (language === 'English' || language) {
    return 'Hello!';
  }
};

// return true if num is 10 or 5 otherwise return false
const isTenOrFive = num => (num === 10) || (num === 5);

// return true if num is less than 50 and greater than 20
const isInRange = num => num > 20 && num < 50;

// return true if num is an integer
// 0.8 -> false
// 1 -> true
// -10 -> true
// otherwise return false
// hint: you can solve this using Math.floor
const isInteger = num => Math.floor(num) === num;

// if num is divisible by 3 return 'fizz'
// if num is divisible by 5 return 'buzz'
// if num is divisible by 3 & 5 return 'fizzbuzz'
// otherwise return num
const fizzBuzz = (num) => {
  if (num % 3 === 0 && num % 5 === 0) {
    return 'fizzbuzz';
  }
  if (num % 3 === 0) {
    return 'fizz';
  }
  if (num % 5 === 0) {
    return 'buzz';
  }
  return num;
};

// return true if num is prime.
// otherwise return false
// hint: a prime number is only evenly divisible by itself and 1
// hint2: you can solve this using a for loop
// note: 0 and 1 are NOT considered prime numbers
const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i < num; i++) {
    if (Math.floor(num / i) === num / i) {
      return false;
    }
  }
  return true;
};

// return the first item from the array
const returnFirst = arr => arr[0];

// return the last item of the array
const returnLast = arr => arr.slice(arr.length - 1)[0];

const getArrayLength = arr => arr.length;

// arr is an array of integers
// increase each integer by one
// return the array
const incrementByOne = arr => arr.map(i => i += 1);

// add the item to the end of the array
const addItemToArray = (arr, item) => {
  arr.push(item);
  return arr;
};

// add the item to the front of the array return the array hint: use the array method .unshift
const addItemToFront = (arr, item) => {
  arr.unshift(item);
  return arr;
};

// words is an array of strings
// return a string that is all of the words concatenated together
// spaces need to be between each word
// example: ['Hello', 'world!'] -> 'Hello world!'
const wordsToSentence = words => words.join(' ');

// check to see if item is inside of arr
// return true if it is, otherwise return false
const contains = (arr, item) => arr.filter(value => value === item).length > 0;

// numbers is an array of integers.
// add all of the integers and return the value
const addNumbers = (numbers) => {
  let total = 0;
  numbers.forEach(number => total += number);
  return total;
};

// testScores is an array.  Iterate over testScores and compute the average. return the average
const averageTestScore = (testScores) => {
  let total = 0;
  testScores.forEach(testScore => total += testScore);
  return total / testScores.length;
};

  // numbers is an array of integers
  // return the largest integer
const largestNumber = (numbers) => {
  let currNum = 0;
  numbers.forEach((number) => {
    if (currNum < number) {
      currNum = number;
    }
  });
  return currNum;
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
