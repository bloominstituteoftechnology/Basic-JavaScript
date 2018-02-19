// Do not change any of the function names

const getBiggest = (x, y) => {
  if (x > y) {
    return x;
  }
  return y;
};
const greeting = (language) => {
  // return a greeting for three different languages:
  // language: 'German' -> 'Guten Tag!'
  // language: 'Spanish' -> 'Hola!'
  // language: 'Chinese' -> 'Ni Hao!'
  // if language is undefined return 'Hello!'
  if (language === 'German') {
    return 'Guten Tag!';
  }
  if (language === 'Spanish') {
    return 'Hola!';
  }
  if (language === 'Chinese') {
    return 'Ni Hao!';
  }
  return 'Hello!';
};

const isTenOrFive = (num) => {
  return num === 10 || num === 5;
  // return true if num is 10 or 5
  // otherwise return false
};

const isInRange = (num) => {
  // return true if num is less than 50 and greater than 20
  return num < 50 && num > 20;
};

const isInteger = (num) => {
  // return true if num is an integer
  // 0.8 -> false
  // 1 -> true
  // -10 -> true
  // otherwise return false
  // hint: you can solve this using Math.floor
  return num === Math.floor(num) || num === Math.ceil(num);
};

const fizzBuzz = (num) => {
  // if num is divisible by 3 return 'fizz'
  if (num % 3 === 0) {
    if (num % 5 === 0) {
      return 'fizzbuzz';
    }
    return 'fizz';
  }
  if (num % 5 === 0) {
    return 'buzz';
  }
  return num;
  // if num is divisible by 5 return 'buzz'
  // if num is divisible by 3 & 5 return 'fizzbuzz'
  // otherwise return num
};

const isPrime = (num) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
  // return true if num is prime.
  // otherwise return false
  // hint: a prime number is only evenly divisible by itself and 1
  // hint2: you can solve this using a for loop
  // note: 0 and 1 are NOT considered prime numbers
};

const returnFirst = (arr) => {
  return arr[0];
  // return the first item from the array
};

const returnLast = (arr) => {
  return arr[arr.length - 1];
  // return the last item of the array
};

const getArrayLength = (arr) => {
  return arr.length;
  // return the length of the array
};

const incrementByOne = (arr) => {
  // arr is an array of integers
  // increase each integer by one
  // return the array
  const newarr = [];
  for (let i = 0; i < arr.length; i++) {
    newarr[i] = arr[i] + 1;
  }
  return newarr;
};

const addItemToArray = (arr, item) => {
  arr.push(item);
  return arr;
  // add the item to the end of the array
  // return the array
};

const addItemToFront = (arr, item) => {
  arr.unshift(item);
  return arr;
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
  for (let i = 0; i < arr.length; i++) {
    if (item === arr[i]) {
      return true;
    }
  }
  return false;
};

const addNumbers = (numbers) => {
  // numbers is an array of integers.
  // add all of the integers and return the value
  let NewArr = 0;
  for (let i = 0; i < numbers.length; i++) {
    NewArr += (numbers[i]);
  }
  return NewArr;
};

const averageTestScore = (testScores) => {
  let avg = 0;
  let sum = 0;
  for (let i = 0; i < testScores.length; i++) {
    sum += testScores[i];
  }
  avg = sum / testScores.length;
  return avg;
  // testScores is an array.  Iterate over testScores and compute the average.
  // return the average
};

const largestNumber = (numbers) => {
  // numbers is an array of integers
  // return the largest integer
  let maxElement = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > maxElement) {
      maxElement = numbers[i];
    }
  }
  return maxElement;
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
