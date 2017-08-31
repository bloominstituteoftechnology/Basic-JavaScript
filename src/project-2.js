// Do not change any of the function names

const getBiggest = (x, y) => {
  // x and y are integers.  Return the larger integer
  // if they are the same return either one
  return Math.max(x, y);
};

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

const isTenOrFive = (num) => {
  // return true if num is 10 or 5
  // otherwise return false
  if (num === 10 || num === 5) {
    return true;
  }
  return false;
};

const isInRange = (num) => {
  // return true if num is less than 50 and greater than 20
  if (num < 50 && num > 20) {
    return true;
  }
  return false;
};

const isInteger = (num) => {
  // return true if num is an integer
  // 0.8 -> false
  // 1 -> true
  // -10 -> true
  // otherwise return false
  // hint: you can solve this using Math.floor
  if (num - Math.floor(num) === 0) {
    return true;
  }
  return false;
};

const fizzBuzz = (num) => {
  // if num is divisible by 3 return 'fizz'
  // if num is divisible by 5 return 'buzz'
  // if num is divisible by 3 & 5 return 'fizzbuzz'
  // otherwise return num
  const isDiv3 = num % 3;
  const isDiv5 = num % 5;

  if (!isDiv3 && !isDiv5) {
    return 'fizzbuzz';
  } else if (!isDiv3) {
    return 'fizz';
  } else if (!isDiv5) {
    return 'buzz';
  }
  return num;
};

const isPrime = (num) => {
  // return true if num is prime.
  // otherwise return false
  // hint: a prime number is only evenly divisible by itself and 1
  // hint2: you can solve this using a for loop
  // note: 0 and 1 are NOT considered prime numbers
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (!(num % i)) {
      return false;
    }
  }
  return true;
};

const returnFirst = (arr) => {
  // return the first item from the array
  return arr[0];
};

const returnLast = (arr) => {
  // return the last item of the array
  return arr[arr.length - 1];
};

const getArrayLength = (arr) => {
  // return the length of the array
  return arr.length;
};

const incrementByOne = (arr) => {
  // arr is an array of integers
  // increase each integer by one
  // return the array
  for (let i = 0; i < arr.length; i++) {
    arr[i]++;
  }
  return arr;
};

const addItemToArray = (arr, item) => {
  // add the item to the end of the array
  // return the array
  arr.push(item);
  return arr;
};

const addItemToFront = (arr, item) => {
  // add the item to the front of the array
  // return the array
  // hint: use the array method .unshift
  arr.unshift(item);
  return arr;
};

const wordsToSentence = (words) => {
  // words is an array of strings
  // return a string that is all of the words concatenated together
  // spaces need to be between each word
  // example: ['Hello', 'world!'] -> 'Hello world!'
  return words.join(' ');
};

const contains = (arr, item) => {
  // check to see if item is inside of arr
  // return true if it is, otherwise return false
  return arr.includes(item);
};

const addNumbers = (numbers) => {
  // numbers is an array of integers.
  // add all of the integers and return the value
  return numbers.reduce((x, y) => x + y);
};

const averageTestScore = (testScores) => {
  // testScores is an array.  Iterate over testScores and compute the average.
  // return the average
  let sumAllScores = 0;
  for (let i = 0; i < testScores.length; i++) {
    sumAllScores += testScores[i];
  }
  return sumAllScores / testScores.length;
};

const largestNumber = (numbers) => {
  // numbers is an array of integers
  // return the largest integer
  let largest = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (largest < numbers[i]) {
      largest = numbers[i];
    }
  }
  return largest;
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
