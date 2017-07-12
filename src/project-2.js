// Do not change any of the function names

const getBiggest = (x, y) => {
  return Math.max(x, y);
};

const greeting = (language) => {
  if (language === 'German') {
    return 'Guten Tag!';
  } else if (language === 'English') {
    return 'Hello!';
  } else if (language === 'Spanish') {
    return 'Hola!';
  } return 'Hello!';
};

const isTenOrFive = (num) => {
  if (num === 10 || num === 5) {
    return true;
  } return false;
};

const isInRange = (num) => {
  if (num < 50 && num > 20) {
    return true;
  } return false;
};

const isInteger = (num) => {
  if (num % 1 === 0) {
    return true;
  } return false;
};

const fizzBuzz = (num) => {
  if (num % 3 === 0 && num % 5 !== 0) {
    return 'fizz';
  } else if (num % 5 === 0 && num % 3 !== 0) {
    return 'buzz';
  } else if (num % 3 === 0 && num % 5 === 0) {
    return 'fizzbuzz';
  } return num;
};

const isPrime = (num) => {
  for (let i = 2; i < num; i++) {
    if (num % i !== 0) {
      return true;
    } return false;
  } return false;
};

const returnFirst = (arr) => {
  const l = arr.length;
  return arr[(l - l)];
};

const returnLast = (arr) => {
  return arr.slice(-1)[0];
};

const getArrayLength = (arr) => {
  return arr.length;
};
const incrementByOne = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] += 1;
  } return arr;
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
  const mySentence = words.join(' ');
  return mySentence;
};

const contains = (arr, item) => {
  if (arr.includes(item) === true) {
    return true;
  } return false;
};

const addNumbers = (numbers) => {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  } return sum;
};

const averageTestScore = (testScores) => {
  let sum = 0;
  for (let i = 0; i < testScores.length; i++) {
    sum += testScores[i];
  } return sum / testScores.length;
};

const largestNumber = (numbers) => {
  return Math.max.apply(null, numbers);
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
