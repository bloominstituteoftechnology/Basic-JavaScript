// Do not change any of the function names

const getBiggest = (x, y) => {
  // x and y are integers.  Return the larger integer
  // if they are the same return either one
};

const greeting = (language) => {
  if (language === 'German') {
    return ('Guten Tag!');
  } else if (language === 'English') {
    return ('Hello!');
  } else if (language === 'Spanish') {
    return ('Hola!');
  }
  return ('Hello!');
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

const isInRange = (num) => {
  if (num < 50 && num > 20) {
    return true;
  }
  return false;
  // return true if num is less than 50 and greater than 20
};

const isInteger = (num) => {
  // return true if num is an integer
  // 0.8 -> false
  // 1 -> true
  // -10 -> true
  // otherwise return false
  // hint: you can solve this using Math.floor
};

const fizzBuzz = (num) => {
  if (num % 3 === 0 && num % 5 === 0) {
    return ('fizzbuzz');
  } else if (num % 3 === 0) {
    return ('fizz');
  } else if (num % 5 === 0) {
    return ('buzz');
  }
  return num;
  // if num is divisible by 3 return 'fizz'
  // if num is divisible by 5 return 'buzz'
  // if num is divisible by 3 & 5 return 'fizzbuzz'
  // otherwise return num
};

const isPrime = (num) => {
  // return true if num is prime.
  // otherwise return false
  // hint: a prime number is only evenly divisible by itself and 1
  // hint2: you can solve this using a for loop
  // note: 0 and 1 are NOT considered prime numbers
};

const returnFirst = (arr) => {
  return (arr[0]);
  // return the first item from the array
};

const returnLast = (arr) => {
  // return the last item of the array
};

const getArrayLength = (arr) => {
  return (arr.length);
  // return the length of the array
};

const incrementByOne = (arr) => {
  // arr is an array of integers
  // increase each integer by one
  // return the array
};

const addItemToArray = (arr, item) => {
  arr.push(item);
  return (arr);
  // add the item to the end of the array
  // return the array
};

const addItemToFront = (arr, item) => {
  // add the item to the front of the array
  // return the array
  // hint: use the array method .unshift
};

const wordsToSentence = (words) => {
  return (words.join(' '));
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
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  numbers = sum;
  return numbers;
  // numbers is an array of integers.
  // add all of the integers and return the value
};

const averageTestScore = (testScores) => {
  // testScores is an array.  Iterate over testScores and compute the average.
  // return the average
};

const largestNumber = (numbers) => {
  const max = Math.max.apply(null, numbers);
  return max;
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
