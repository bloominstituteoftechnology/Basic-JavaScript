// Do not change any of the function names

const getBiggest = (x, y) => {
  // x and y are integers.  Return the larger integer
  // if they are the same return either one
  if (x > y) {
    return x;
  }
  if (x < y) {
    return y;
  }
  return x || y;
};

const greeting = (language) => {
  // return a greeting for three different languages:
  // language: 'German' -> 'Guten Tag!'
  // language: 'Spanish' -> 'Hola!'
  // language: 'Chinese' -> 'Ni Hao!'
  // if language is undefined return 'Hello!'
  // let greeting = ('Guten Tag!');
  if (language === 'German') {
    return ('Guten Tag!');
  }
  // language = 'English';
  // greeting = ('Hello!');
  if (language === 'Chinese') {
    return ('Ni Hao!');
  }
  // language = 'Spanish';
  // greeting = ('Hola!');
  if (language === 'Spanish') {
    return ('Hola!');
  }
  // if language is undefined return 'Hello!'
  // language !== 'German' || 'Spanish' || 'English';
  if (language !== 'German' || 'Spanish' || 'Chinese') {
    return ('Hello!');
  }
};

const isTenOrFive = (num) => {
  // return true if num is 10 or 5
  // otherwise return false
  if (num === 10) {
    return true;
  }

  if (num === 5) {
    return true;
  } else if (num !== 10 || 5) {
    return false;
  }
};

const isInRange = (num) => {
  if (num > 20 && num < 50) {
    return true;
  } else if (num <= 20 || num >= 50) {
    return false;
  }
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
  // if num is divisible by 3 return 'fizz'
  // if num is divisible by 5 return 'buzz'
  // if num is divisible by 3 & 5 return 'fizzbuzz'
  // otherwise return num
  if (num % 3 === 0 && num % 5 === 0) {
    return ('fizzbuzz');
  } else if (num % 3 === 0) {
    return ('fizz');
  } else if (num % 5 === 0) {
    return ('buzz');
  }
  return (num);
};

const isPrime = (num) => {
  // return true if num is prime.
  // otherwise return false
  // hint: a prime number is only evenly divisible by itself and 1
  // hint2: you can solve this using a for loop
  // note: 0 and 1 are NOT considered prime numbers
  if (num === 1) {
    return false;
  } else if (num === 0) {
    return false;
  } else if (num === 2) {
    return true;
  }
  for (let x = 2; x < num; x++) {
    if (num % x === 0) {
      return false;
    } return true;
  }
};

const returnFirst = (arr) => {
  // return the first item from the array
  return (arr[0]);
};

const returnLast = (arr) => {
  // return the last item of the array
  const last = arr.slice(-1)[0];
  return last;
};

const getArrayLength = (arr) => {
  // return the length of the array
  return (arr.length);
};

const incrementByOne = (arr) => {
  // arr is an array of integers
  // increase each integer by one
  // return the array
  const addedOne = arr.map((x) => {
    return x + 1;
  });
  return addedOne;
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
  return words.join(' ');
};

const contains = (arr, item) => {
  // check to see if item is inside of arr
  // return true if it is, otherwise return false
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      return true;
    }
  }
  return false;
};

const addNumbers = (numbers) => {
  // numbers is an array of integers.
  // add all of the integers and return the value
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
};

const averageTestScore = (testScores) => {
  // testScores is an array.  Iterate over testScores and compute the average.
  // return the average
  let sum = 0; for (let i = 0; i < testScores.length; i++) {
    sum += parseInt(testScores[i], 10);
  }
  const AverageTestScore = sum / testScores.length;
  return AverageTestScore;
};

const largestNumber = (numbers) => {
  // numbers is an array of integers
  // return the largest integer
  let i = 0;
  const n = numbers.length;
  let m = -Infinity;
  for (; i !== n; ++i) { if (numbers[i] > m) { m = numbers[i]; } } return m;
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
