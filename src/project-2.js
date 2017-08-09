// Do not change any of the function names

const getBiggest = (x, y) => {
  // x and y are integers.  Return the larger integer
  // if they are the same return either one
  if (x > y) {
    return x;
  } else if(x < y){
    return y;
  } else {
    return x || y;
  }
};

const large = getBiggest (4, 9);
console.log(large);

const greeting = (language) => {
  // return a greeting for three different languages:
  // language: 'German' -> 'Guten Tag!'
  // language: 'Spanish' -> 'Hola!'
  // language: 'Chinese' -> 'Ni Hao!'
  // if language is undefined return 'Hello!'
  if (language === 'German') {
    return 'Guten Tag!';
  } else if (language === 'Spanish') {
    return 'Hola!';
  } else if (language === 'Chinese') {
    return 'Ni Hao!';
  } else {
    return 'Hello1';
  }

};
const lang = greeting ('German');
console.log(lang);

const isTenOrFive = (num) => {
  // return true if num is 10 or 5
  // otherwise return false
  if (num === 10 || num === 5) {
    return true;
  } else {
    return false;
  }
};
const numb = isTenOrFive(5);
console.log(numb);

const isInRange = (num) => {
  // return true if num is less than 50 and greater than 20
  if (num < 50 && num > 20) {
    return true;
  } else {
    return false;
  }
};
const range = isInRange(38);
console.log(range);

const isInteger = (num) => {
  // return true if num is an integer
  // 0.8 -> false
  // 1 -> true
  // -10 -> true
  // otherwise return false
  // hint: you can solve this using Math.floor
  const answer = Math.floor(num);
  if (answer === 0.8) {
    return false;
  } else if (answer === 1) {
    return true;
  } else if (answer === -10) {
    return true;
  } else {
    return false;
  }
};
const int2 = isInteger(1.5);
console.log(int2);


const fizzBuzz = (num) => {
  // if num is divisible by 3 return 'fizz'
  // if num is divisible by 5 return 'buzz'
  // if num is divisible by 3 & 5 return 'fizzbuzz'
  // otherwise return num 
  for (let i = num; i <= 20; i++) {
    if (i / 3 == 0) {
      console.log('fizz');
    } else if (i / 5 == 0) {
      console.log('buzz');
    } else {
      console.log('fizzbuzz'); 
    } 
  }
};
const sum3 = fizzBuzz(15); 
console.log(sum3); 

const isPrime = (num) => {
  // return true if num is prime.
  // otherwise return false
  // hint: a prime number is only evenly divisible by itself and 1
  // hint2: you can solve this using a for loop
  // note: 0 and 1 are NOT considered prime numbers 
 for (let i = 2; i < num; i++) {
   if (num % i === 0) {
     return false;
   } else {
     return num !== 1;
   }
 }
}; 
var prim = isPrime(3); 
console.log(prim); 

const returnFirst = (arr) => {
  // return the first item from the array 
  const item = ['dog', 'cat','hamster']; 
  return item[0];
};
const arry = returnFirst(); 
console.log(arry); 

const returnLast = (arr) => {
  // return the last item of the array 
  const item = ['dog', 'cat','hamster']; 
  return item[2];
};
const arry1 = returnLast(); 
console.log(arry1);

const getArrayLength = (arr) => {
  // return the length of the array 
  const item = ['dog', 'cat','hamster']; 
  return item.length; 
}; 
const size = getArrayLength(); 
console.log(size); 

const incrementByOne = (arr) => {
  // arr is an array of integers
  // increase each integer by one
  // return the array
const myArray = [1, 2, 3];
for (let i = 0; i < myArray.length; i++){
    myArray[i] = myArray[i] + 1;
}
  return myArray;
};
const num3 = incrementByOne(); 
console.log(num3); 

const addItemToArray = (arr, item) => {
  // add the item to the end of the array
  // return the array 
  const myItem = ['dog', 'cat']; 
  myItem.push('hamster');
  return myItem;
};
const item9 = addItemToArray(); 
console.log(item9); 

const addItemToFront = (arr, item) => {
  // add the item to the front of the array
  // return the array
  // hint: use the array method .unshift
  let mylist = ['eat', 'sleep', 'clean']; 
  mylist.splice(1, 0, 'brush');  
  return mylist;
};
const start = addItemToFront();
console.log(start); 

const wordsToSentence = (words) => {
  // words is an array of strings
  // return a string that is all of the words concatenated together
  // spaces need to be between each word
  // example: ['Hello', 'world!'] -> 'Hello world!' 
  const letters = ['hello', ' world'];
  const string = letters[0] + letters[1]; 
  return string; 
};
const Hello = wordsToSentence(); 
console.log(Hello); 

const contains = (arr, item) => {
  // check to see if item is inside of arr
  // return true if it is, otherwise return false 
  const items = ['a', 'b', 'c']; 
  if (arr === items[0] || arr === items[1] || arr === items[2]) {
    return true
  } else {
    return false;
  }
};
const conta = contains('d'); 
console.log(conta); 

const addNumbers = (numbers) => {
  // numbers is an array of integers.
  // add all of the integers and return the value 
  const num = [1, 2, 3,]; 
  const add = num[0] + num[1] + num[2]; 
  return add;
};
const sum = addNumbers(); 
console.log(sum); 

const averageTestScore = (testScores) => {
  // testScores is an array.  Iterate over testScores and compute the average.
  // return the average 
  const scores = [70, 90, 60]; 
  const add = scores[0] + scores[1] + scores[2]; 
  const solu = add / scores.length;
  return solu;
};
const sum1 = averageTestScore(); 
console.log(sum1); 



const largestNumber = (numbers) => {
  // numbers is an array of integers
  // return the largest integer
  const array = [5, 10, 7]; 
  let maximumValue = (array[0]);
  let maximumElement = array[0];
  
  for (let i = 0; i < array.length; i++) {
    if ((array[i]) > maximumValue) {
      maximumValue = (array[i]);
      maximumElement = array[i];
    }
  }
  
  return maximumElement;
};
const big = largestNumber(); 
console.log(big); 

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
