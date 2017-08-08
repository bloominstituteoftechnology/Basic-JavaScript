const getFirstItem = (collection, cb) => cb(collection[0]);
  // invoke the callback function and pass the first item from the collection in as an argument

const getLength = (collection, cb) => cb(collection.length);
  // Write a function called getLength that passes the length of the array into the callback

const getLastItem = (collection, cb) => cb(collection[collection.length - 1]);
  // Write a function called getLastItem which passes the getLastItem item of the array into the callback

const sumNums = (x, y, cb) => cb(x + y);
  // Write a function called sumNums that adds two numbers and passes the result to the callback

const multiplyNums = (x, y, cb) => cb(x * y);
  // Write a function called multiplyNums that multiplies two numbers and passes the result to the callback

const contains = (collection, item, cb) => cb(collection.indexOf(item) > -1);
  // Write a function called contains that checks if an item is present inside of the given array.
  // Pass true to the callback if it is, otherwise pass false

const removeDuplicates = (collection, cb) => cb(Array.from(new Set(collection)));
  // cb(collection.filter((item, pos) => collection.indexOf(item) === pos));

  // Write a function called removeDuplicates that removes all duplicate values from the given array.
  // Pass the array to the callback function.  Do not mutate the original array.

module.exports = {
  getFirstItem,
  getLength,
  getLastItem,
  sumNums,
  multiplyNums,
  contains,
  removeDuplicates
};
