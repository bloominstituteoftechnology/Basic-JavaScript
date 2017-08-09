const sayHi = () => {
  console.log('hi');
}

const getFirstItem = (collection, cb) => {
  // invoke the callback function and pass the first item from the collection in as an argument 
  sayHi(); 
};

getFirstItem(function() {
  sayHi();
}); 

const goLong = () => {
  const arry = [4, 5, 6]; 
  console.log(arry.length); 
}
const getLength = (collection, cb) => {
  // Write a function called getLength that passes the length of the array into the callback 
  goLong();
}
 getLength(function() {
  goLong();
});

const black = () => {
  const num = [2, 3, 5]; 
  console.log(num);
}
const getLastItem = (collection, cb) => {
  // Write a function called getLastItem which passes the getLastItem item of the array into the callback 
  black();
}; 
getLastItem(function(){
  black(); 
});
const theAnswer = (x, y) => { 
  const sum = x + y; 
  console.log(sum); 
}
const sumNums = (x, y, cb) => {
  // Write a function called sumNums that adds two numbers and passes the result to the callback 
  theAnswer(5, 6);
};
sumNums(function() {
  theAnswer(5, 6); 
});

const product = (x, y) => {
  const answer = x * y; 
  console.log(answer);
}
const multiplyNums = (x, y, cb) => {
  // Write a function called multiplyNums that adds two numbers and passes the result to the callback 
  product(9, 9);
};
multiplyNums(function() {
  product(9, 9); 
}); 

const list = (collection,item, cb) => {
  let lists = ['a', 'b', 'c'];
  console.log(lists);
}

const contains = (collection, item, cb) => {
  // Write a function called contains that checks if an item is present inside of the given array.
  // Pass true to the callback if it is, otherwise pass false 
}; 

  
const removeDuplicates = (collection, cb) => {
  // Write a function called removeDuplicates that removes all duplicate values from the given array.
  // Pass the array to the callback function.  Do not mutate the original array. 
return function ()  {
  newArr();
  };
} 

const newArr = () => {
  let arr = ["apple", "bannana", "orange", "apple", "orange"];

arr = arr.filter( function( item, index, inputArray ) {
           return inputArray.indexOf(item) == index;
    }); 
          console.log(arr);
} 
  const solu = removeDuplicates(); 
  solu();

module.exports = {
  getFirstItem,
  getLength,
  getLastItem,
  sumNums,
  multiplyNums,
  contains,
  removeDuplicates
};
