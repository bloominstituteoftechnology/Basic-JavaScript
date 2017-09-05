// Do not change any of the function names

const getBiggest = (x, y) => {
  // x and y are integers.  Return the larger integer
  // if they are the same return either one
  return x >= y ? x : y;
};

const greeting = (language) => {
  // return a greeting for three different languages:
  // language: 'German' -> 'Guten Tag!'
  // language: 'Spanish' -> 'Hola!'
  // language: 'Chinese' -> 'Ni Hao!'
  // if language is undefined return 'Hello!'
  let g = '';
  switch (language) {
    case 'German':
      g = 'Guten Tag!';
      break;
    case 'Spanish':
      g = 'Hola!';
      break;
    case 'Chinese':
      g = 'Ni Hao!';
      break;
    default:
      g = 'Hello!';
  }
  return g;
};

const isTenOrFive = (num) => {
  // return true if num is 10 or 5
  // otherwise return false
  return num === 10 || num === 5;
};

const isInRange = (num) => {
  // return true if num is less than 50 and greater than 20
  return num > 20 && num < 50;
};

const isInteger = (num) => {
  // return true if num is an integer
  // 0.8 -> false
  // 1 -> true
  // -10 -> true
  // otherwise return false
  // hint: you can solve this using Math.floor
  return Number.isInteger(num);
};

const fizzBuzz = (num) => {
  // if num is divisible by 3 return 'fizz'
  // if num is divisible by 5 return 'buzz'
  // if num is divisible by 3 & 5 return 'fizzbuzz'
  // otherwise return num
  let text = '';
  if (num % 3 === 0) {
    text += 'fizz';
  }
  if (num % 5 === 0) {
    text += 'buzz';
  }
  if (text === '') {
    return num;
  }
  return text;
};

// const isPrime = (num) => {
//   // return true if num is prime.
//   // otherwise return false
//   // hint: a prime number is only evenly divisible by itself and 1
//   // hint2: you can solve this using a for loop
//   // note: 0 and 1 are NOT considered prime numbers

// };

const primes = [];
const primeSet = new Set();

function addPrime(prime) {
  primes.push(prime);
  primeSet.add(prime);
}

const isPrime = (num) => {
  // return true if num is prime.
  // otherwise return false
  // hint: a prime number is only evenly divisible by itself and 1
  // hint2: you can solve this using a for loop
  // note: 0 and 1 are NOT considered prime numbers
  if (num > 1 && num % 1 === 0) {
    if (num > 2 && num % 2 === 0) {
      return false;
    }
    let sqrt = Math.sqrt(num);
    if (sqrt % 1 === 0) {
      return false;
    }
    if (primeSet.has(num)) {
      return true;
    }
    sqrt = Math.round(sqrt);
    //  >50% of numbers are taken out before they get here
    for (let i = 0; i < primes.length; i++) {
      if (num % primes[i] === 0) {
        return false;
      }
      if (primes[i] > sqrt) {
        addPrime(num);
        return true;
      }
    }
    //  backfills prime numbers if you start
    //  higher than 2. It will almost never run.
    if (num > 5) {
      for (let j = 2; j < num; j++) {
        isPrime(j);
      }
      return isPrime(num);
    }
    //  this catches 2, 3, and 5
    addPrime(num);
    return true;
  }
  return false;
};
/*
  Benchmark for isPrime above:

  Test #1 - Searching up to 10
  Found 4 prime numbers
  Best time (out of 100): 0 milliseconds

  Test #2 - Searching up to 100
  Found 25 prime numbers
  Best time (out of 100): 0 milliseconds

  Test #3 - Searching up to 1,000
  Found 168 prime numbers
  Best time (out of 100): 0 milliseconds

  Test #4 - Searching up to 10,000
  Found 1,229 prime numbers
  Best time (out of 100): 0 milliseconds

  Test #5 - Searching up to 100,000
  Found 9,592 prime numbers
  Best time (out of 100): 6 milliseconds

  Test #6 - Searching up to 1,000,000
  Found 78,498 prime numbers
  Best time (out of 100): 99 milliseconds

  Test #7 - Searching up to 10,000,000
  Found 664,579 prime numbers
  Best time (out of 100): 1.90 seconds

  Test #8 - Searching up to 100,000,000
  Found 5,761,455 prime numbers
  Best time (out of 100): 35.56 seconds

  Test #9 - Searching up to 300,000,000
  Found 16,252,325 prime numbers
  Best time (out of 100): 2.40 minutes
*/

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
  return arr.map((num) => { return num + 1; });
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
  return arr.indexOf(item) > -1;
};

const addNumbers = (numbers) => {
  // numbers is an array of integers.
  // add all of the integers and return the value
  return numbers.reduce((total, num) => total += num);
};

const averageTestScore = (testScores) => {
  // testScores is an array.  Iterate over testScores and compute the average.
  // return the average
  return addNumbers(testScores) / testScores.length;
};

const largestNumber = (numbers) => {
  // numbers is an array of integers
  // return the largest integer
  return numbers.reduce((largest, num) => largest = largest < num ? num : largest);
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
