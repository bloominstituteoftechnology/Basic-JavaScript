// Do not change any of the function names

const getBiggest = (x, y) => {
  // x and y are integers.  Return the larger integer
  // if they are the same return either one
  return x > y ? x : y;
};

const greeting = (language) => {
  // return a greeting for three different languages:
  // language: 'German' -> 'Guten Tag!'
  // language: 'English' -> 'Hello!'
  // language: 'Spanish' -> 'Hola!'
  // if language is undefined return 'Hello!'
  switch (language) {
    case 'German': return 'Guten Tag!';
    case 'Spanish': return 'Hola!';
    case 'English':
    default: return 'Hello!';
  }
};

const isTenOrFive = num => num === 10 || num === 5;
// return true if num is 10 or 5
// otherwise return false

const isInRange = num => num < 50 && num > 20;
// return true if num is less than 50 and greater than 20

const isInteger = num => num % 1 === 0;
// return true if num is an integer
// 0.8 -> false
// 1 -> true
// -10 -> true
// otherwise return false
// hint: you can solve this using Math.floor

const fizzBuzz = (num) => {
  // if num is divisible by 3 return 'fizz'
  // if num is divisible by 5 return 'buzz'
  // if num is divisible by 3 & 5 return 'fizzbuzz'
  // otherwise return num
  let output = '';
  if (num % 3 === 0) output += 'fizz';
  if (num % 5 === 0) output += 'buzz';
  return output || num;
};

const isPrime = (num) => {
  // return true if num is prime.
  // otherwise return false
  // hint: a prime number is only evenly divisible by itself and 1
  // hint2: you can solve this using a for loop
  // note: 0 and 1 are NOT considered prime numbers
  for (let i = 2, max = Math.sqrt(num); i <= max; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

const returnFirst = arr => arr[0];
// return the first item from the array

const returnLast = arr => arr[arr.length - 1];
// return the last item of the array

const getArrayLength = arr => arr.length;
// return the length of the array

const incrementByOne = arr => arr.map(i => i + 1);
// arr is an array of integers
// increase each integer by one
// return the array

const addItemToArray = (arr, item) => arr.concat(item);
  // add the item to the end of the array
  // return the array

const addItemToFront = (arr, item) => [item].concat(arr);
  // add the item to the front of the array
  // return the array
  // hint: use the array method .unshift

const wordsToSentence = words => words.join(' ');
  // words is an array of strings
  // return a string that is all of the words concatenated together
  // spaces need to be between each word
  // example: ['Hello', 'world!'] -> 'Hello world!'

const contains = (arr, item) => arr.indexOf(item) !== -1;
  // check to see if item is inside of arr
  // return true if it is, otherwise return false

const addNumbers = numbers => numbers.reduce((sum, n) => sum + n, 0);
// numbers is an array of integers.
// add all of the integers and return the value

const averageTestScore = testScores => testScores.reduce((sum, n) => sum + n, 0) / testScores.length;
  // testScores is an array.  Iterate over testScores and compute the average.
  // return the average

const largestNumber = (numbers) => {
  // numbers is an array of integers
  // return the largest integer
  let len = numbers.length;
  let max = numbers[len - 1];
  while (len--) {
    if (numbers[len] > max) max = numbers[len];
  }
  return max;
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
