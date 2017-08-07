// Do not change any of the function names

const getBiggest = (x, y) => {
  if (x > y) {
    return x;
  }
  return y;
};

const greeting = (language) => {
  if (language === 'German') {
    return 'Guten Tag!';
  } if (language === 'Chinese') {
    return 'Ni Hao!';
  } if (language === 'Spanish') {
    return 'Hola!';
  }
  return 'Hello!';
};

const isTenOrFive = (num) => {
  if (num === 10 || num === 5) {
    return true;
  }
  return false;
};

const isInRange = (num) => {
  if (num < 50 && num > 20) {
    return true;
  }
  return false;
};

const isInteger = (num) => {
  if (num === Math.floor(num)) {
    return true;
  }
  return false;
};

const fizzBuzz = (num) => {
  if (num % 3 === 0 && num % 5 === 0) {
    return 'fizzbuzz';
  } if (num % 3 === 0 && num % 5 !== 0) {
    return 'fizz';
  } if (num % 3 !== 0 && num % 5 === 0) {
    return 'buzz';
  }
  return num;
};

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const returnFirst = arr => arr[0];

const returnLast = arr => arr[arr.length - 1];

const getArrayLength = arr => arr.length;

const incrementByOne = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] += 1;
  }
  return arr;
};

const addItemToArray = (arr, item) => {
  arr.push(item);
  return arr;
};

const addItemToFront = (arr, item) => {
  arr.unshift(item);
  return arr;
};

const wordsToSentence = (words) => {
  let allWords = '';
  for (let i = 0; i < words.length; i++) {
    if (i === words.length - 1) {
      allWords += words[i];
    } else {
      allWords += `${words[i]} `;
    }
  }
  return allWords;
};

const contains = (arr, item) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      return true;
    }
  }
  return false;
};

const addNumbers = (numbers) => {
  let allNumbers = 0;
  for (let i = 0; i < numbers.length; i++) {
    allNumbers += numbers[i];
  }
  return allNumbers;
};

const averageTestScore = (testScores) => {
  let allNumbers = 0;
  for (let i = 0; i < testScores.length; i++) {
    allNumbers += testScores[i];
  }
  return allNumbers / testScores.length;
};

const largestNumber = (numbers) => {
  let maxNumber = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > maxNumber) {
      maxNumber = numbers[i];
    }
  }
  return maxNumber;
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
