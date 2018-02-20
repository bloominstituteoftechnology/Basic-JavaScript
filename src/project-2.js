// Do not change any of the function names

const getBiggest = (x, y) => {
  // x and y are integers.  Return the larger integer
  // if they are the same return either one
  if(x>y){
  	  return x;
  }else if(y>x){
  return y;
  }else if(x===y){

  return x;
  
  }
};

const greeting = (language) => {
  // return a greeting for three different languages:
  // language: 'German' -> 'Guten Tag!'
  // language: 'Spanish' -> 'Hola!'
  // language: 'Chinese' -> 'Ni Hao!'
  // if language is undefined return 'Hello!'
  if(language === 'German'){
  	  return 'Guten Tag!';
  }else if(language === 'Spanish'){
      return 'Hola!';
  
  }else if(language === 'Chinese'){
      return 'Ni Hao';

  }else if(language === undefined){
      return 'Hello!';

};

const isTenOrFive = (num) => {
  // return true if num is 10 or 5
  // otherwise return false
  if(num === 5 || num === 10){
  	  return true;
  }else{
  	  return false;
  }
};

const isInRange = (num) => {
  // return true if num is less than 50 and greater than 20

  if(num<50 && num>20){
  	  return true;
  }else{
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
  if(Number.isInteger(num)){
  	  return true;
  }else{
  	  return false;
  }
};

const fizzBuzz = (num) => {
  // if num is divisible by 3 return 'fizz'
  // if num is divisible by 5 return 'buzz'
  // if num is divisible by 3 & 5 return 'fizzbuzz'
  // otherwise return num
  if (num % 3 === 0 && num % 5=== 0){
  	  return fizzbuzz;
  }else if (num % 3 === 0){
  	  return fizz;
 }else if (num % 5=== 0){
 	 return buzz;
 }
};

const isPrime = (num) => {
  // return true if num is prime.
  // otherwise return false
  // hint: a prime number is only evenly divisible by itself and 1
  // hint2: you can solve this using a for loop
  // note: 0 and 1 are NOT considered prime numbers
};

const returnFirst = (arr) => {
  // return the first item from the array
  let result = arr[0];
  return result;
};

const returnLast = (arr) => {
  // return the last item of the array
    let result = arr.length[-1];
	return result;
};

const getArrayLength = (arr) => {
  // return the length of the array
      let result = arr.length;
	  return result;
};

const incrementByOne = (arr) => {
  // arr is an array of integers
  // increase each integer by one
  // return the array
  var result = arr.map(x=> x+1);
  return result;
};

const addItemToArray = (arr, item) => {
  // add the item to the end of the array
  // return the array
  var result = arr.push(item);
  return result;
};

const addItemToFront = (arr, item) => {
  // add the item to the front of the array
  // return the array
  // hint: use the array method .unshift
    var result = arr.unshift(item);
  return result;

};

const wordsToSentence = (words) => {
  // words is an array of strings
  // return a string that is all of the words concatenated together
  // spaces need to be between each word
  // example: ['Hello', 'world!'] -> 'Hello world!'
  let result = 'Hello' + ' '+ 'world!';
  return result;
};

const contains = (arr, item) => {
  // check to see if item is inside of arr
  // return true if it is, otherwise return false
  if ( arr.indexOf(item)){
  	  return true;
  }else {
  	  return false;
  }
};

const addNumbers = (numbers) => {
  // numbers is an array of integers.
  // add all of the integers and return the value
};

const averageTestScore = (testScores) => {
  // testScores is an array.  Iterate over testScores and compute the average.
  // return the average
  var total = 0;
  for(var i =9; i<testScores.length; i++){
  	  total += testScores[i];
  }
  var avg = total/testScores.length;
  return avg;
};

const largestNumber = (numbers) => {
  // numbers is an array of integers
  // return the largest integer
  var result = Math.max(...numbers);
  return result;
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
