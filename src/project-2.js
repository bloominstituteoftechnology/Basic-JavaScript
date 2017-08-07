// Do not change any of the function names

const getBiggest = (x, y) => {
  return x > y ? x : y;
};
  // x and y are integers.  Return the larger integer
  // if they are the same return either one

const greeting = (language) => {
  // return a greeting for three different languages:
  // language: 'German' -> 'Guten Tag!'
  // language: 'Spanish' -> 'Hola!'
  // language: 'Chinese' -> 'Ni Hao!'
  // if language is undefined return 'Hello!'
  switch (language) {
    case 'German':
      return 'Guten Tag!';
    case 'Spanish':
      return 'Hola!';
    case 'Chinese':
      return 'Ni Hao!';
    default:
      return 'Hello!';
  }
};

const isTenOrFive = num => num === 10 || num === 5;
  // return true if num is 10 or 5
  // otherwise return false

const isInRange = num => num < 50 && num > 20;
  // return true if num is less than 50 and greater than 20

const isInteger = num => Math.abs(Math.floor(num)) > 0 || num === 0;
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
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  else if (num % 3 === 0) return 'fizz';
  else if (num % 5 === 0) return 'buzz';
  return num;
};

const isPrime = (num) => {
  // return true if num is prime.
  // otherwise return false
  // hint: a prime number is only evenly divisible by itself and 1
  // hint2: you can solve this using a for loop
  // note: 0 and 1 are NOT considered prime numbers
  if (num < 2) return false;

  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
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

const addItemToArray = (arr, item) => {
  arr.push(item);
  return arr;
};
  // add the item to the end of the array
  // return the array

const addItemToFront = (arr, item) => {
  arr.unshift(item);
  return arr;
};
  // add the item to the front of the array
  // return the array
  // hint: use the array method .unshift

const wordsToSentence = words => words.join(' ');
  // words is an array of strings
  // return a string that is all of the words concatenated together
  // spaces need to be between each word
  // example: ['Hello', 'world!'] -> 'Hello world!'

const contains = (arr, item) => arr.indexOf(item) > -1;
  // check to see if item is inside of arr
  // return true if it is, otherwise return false

const addNumbers = (numbers) => {
  return numbers.reduce((sum, value) => sum + value);
};
  // numbers is an array of integers.
  // add all of the integers and return the value

const averageTestScore = (testScores) => {
  return testScores.reduce((sum, value) => sum + value) / testScores.length;
};
  // testScores is an array.  Iterate over testScores and compute the average.
  // return the average


const largestNumber = numbers => Math.max.apply(null, numbers);
  // numbers is an array of integers
  // return the largest integer

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
