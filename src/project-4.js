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
  const lastItem = collection.length - 1;
  cb(collection[lastItem]);
};

const sumNums = (x, y, cb) => {
  // Write a function called sumNums that adds two numbers and passes the result to the callback
  cb(x + y);
};

const multiplyNums = (x, y, cb) => {
  // Write a function called multiplyNums that multiplies two numbers and passes the result to the callback
  cb(x * y);
};

const contains = (collection, item, cb) => {
  // Write a function called contains that checks if an item is present inside of the given array.
  // Pass true to the callback if it is, otherwise pass false

  for (let i = 0; i < collection.length; i++) {
    if (collection[i] === item) {
      return cb(true);
    }
  }
  return cb(false);
};

// Write a function called removeDuplicates that removes all duplicate values from the given array.
// Pass the array to the callback function.  Do not mutate the original array.
const removeDuplicates = (collection, cb) => {
  const uniqueItems = [collection[0]];
  let currentItem = collection[1];
  for (let i = 1; i < collection.length; i++) {
    currentItem = collection[i];
    for (let j = 0; j < uniqueItems.length; j++) {
      if (currentItem !== uniqueItems[j] && j === uniqueItems.length - 1) {
        uniqueItems.push(currentItem);
      }
    }
  }
  cb(uniqueItems);
};

module.exports = {
  getFirstItem,
  getLength,
  getLastItem,
  sumNums,
  multiplyNums,
  contains,
  removeDuplicates
};
