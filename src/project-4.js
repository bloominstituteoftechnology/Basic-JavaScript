const getFirstItem = (collection, cb) => {
  // invoke the callback function and pass the first item from the collection in as an argument
  cb(collection[0]);
};

const getLength = (collection, cb) => {
  // Write a function called getLength that passes the length of the array into the callback
  cb(collection.length);
};

const getLastItem = (collection, cb) => {
  // Write a function called getLastItem which passes the getLastItem item of the array into the callback
  cb(collection.pop());
};

const sumNums = (x, y, cb) => {
  // Write a function called sumNums that adds two numbers and passes the result to the callback
  cb(x + y);
};

const multiplyNums = (x, y, cb) => {
  // Write a function called multiplyNums that multiplies two numbers and passes the result to the callback
  const result = x * y;
  cb(result);
};

const contains = (collection, item, cb) => {
  // Write a function called contains that checks if an item is present inside of the given array.
  // Pass true to the callback if it is, otherwise pass false
  let results = false;
  if (collection.includes(item)) {
    results = true;
  }
  cb(results);
};

// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant', 'duck', 'elephant'];
// const arr = ['a', 'b', 'c', 'c'];

const removeDuplicates = (collection, cb) => {
  // Write a function called removeDuplicates that removes all duplicate values from the given array.
  // Pass the array to the callback function.  Do not mutate the original array.
  const newArr = collection.sort((a, b) => {
    return a > b;
  });
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === newArr[i + 1]) {
      newArr.splice(i, 1);
    }
  }
  cb(newArr);
};
// removeDuplicates(animals, function(x) {
//   console.log(x);
// });
// removeDuplicates(arr, function(x) {
//   console.log(x);
// });

module.exports = {
  getFirstItem,
  getLength,
  getLastItem,
  sumNums,
  multiplyNums,
  contains,
  removeDuplicates
};
