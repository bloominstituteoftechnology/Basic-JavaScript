// Do not change any of the function names

const getBiggest = (x, y) => {
  // x and y are integers.  Return the larger integer
  if (x > y) {
    return x;
  } else if (y > x) {
    return y;
  }
  return x; // return x is the default if they are the same
};

const greeting = (language) => {
  // return a greeting for three different languages:
  // language: 'German' -> 'Guten Tag!'
  // language: 'English' -> 'Hello!'
  // language: 'Spanish' -> 'Hola!'
  // if language is undefined return 'Hello!'
  if (language === 'German') {
    return 'Guten Tag!';
  } else if (language === 'English') {
    return 'Hello!';
  } else if (language === 'Spanish') {
    return 'Hola!';
  }
  return 'Hello!';
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
  if (Number.isInteger(num)) {
    return true;
  }
  return false;
};

const fizzBuzz = (num) => {
  // if num is divisible by 3 return 'fizz'
  // if num is divisible by 5 return 'buzz'
  // if num is divisible by 3 & 5 return 'fizzbuzz'
  // otherwise return num
  if (num % 15 === 0) {
    return 'fizzbuzz';
  } else if (num % 5 === 0) {
    return 'buzz';
  } else if (num % 3 === 0) {
    return 'fizz';
  }
  return num;
};

const isPrime = (num) => {
  // return true if num is prime.
  // otherwise return false
  // hint: a prime number is only evenly divisible by itself and 1
  // hint2: you can solve this using a for loop
  // note: 0 and 1 are NOT considered prime numbers
  if (num % 2 === 0) {
    return false;
  } else if (num === 1) {
    return false;
  } else if (num === 0) {
    return false;
  }
  return true;
};

const returnFirst = (arr) => {
  // return the first item from the array
  return arr[0];
};

const returnLast = (arr) => {
  // return the last item of the array
  const bucket = arr.pop();
  return bucket;
};

const getArrayLength = (arr) => {
  // return the length of the array
  return arr.length;
};

const incrementByOne = (arr) => {
  // arr is an array of integers
  // increase each integer by one
  // return the array
  let i = 0;
  const arrayLength = arr.length;
  for (i; i < arrayLength; i++) {
    arr[i] += 1;
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
  let i = 0;
  let newSentence = '';
  for (i; i < words.length; i++) {
    if (words.indexOf(words[i]) !== words.length - 1) {
      newSentence += `${words[i]} `;
    } else {
      newSentence += `${words[i]}`;
    }
  }
  return newSentence;
};

const contains = (arr, item) => {
  // check to see if item is inside of arr
  // return true if it is, otherwise return false
  if (arr.indexOf(item) !== -1) {
    return true;
  }
  return false;
};

const addNumbers = (numbers) => {
  // numbers is an array of integers.
  // add all of the integers and return the value
  let addUp = 0;
  for (let i = 0; i < numbers.length; i++) {
    addUp += numbers[i];
  }
  return addUp;
};

const averageTestScore = (testScores) => {
  // testScores is an array.  Iterate over testScores and compute the average.
  // return the average
  let sum = 0;
  for (let i = 0; i < testScores.length; i++) {
    sum += testScores[i];
  }
  const average = sum / testScores.length;
  return average;
};

const largestNumber = (numbers) => {
  // numbers is an array of integers
  // return the largest integer
  let largestNum = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largestNum) {
      largestNum = numbers[i];
    }
  }
  return largestNum;
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