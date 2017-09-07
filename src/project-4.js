const getFirstItem = (collection, cb) => {
  // invoke the callback function and pass the first item from the collection in as an argument
  const firstItem = collection[0];
  cb(firstItem);
};

const getLength = (collection, cb) => {
  // Write a function called getLength that passes the length of the array into the callback
  const length = collection.length;
  cb(length);
};

const getLastItem = (collection, cb) => {
  // Write a function called getLastItem which passes the getLastItem item of the array into the callback
  const lastItem = collection[collection.length - 1];
  cb(lastItem);
};


const sumNums = (x, y, cb) => {
  // Write a function called sumNums that adds two numbers and passes the result to the callback
  const sum = x + y;
  cb(sum);
};

const multiplyNums = (x, y, cb) => {
  // Write a function called multiplyNums that multiplies two numbers and passes the result to the callback
  const sum = x * y;
  cb(sum);
};

const contains = (collection, item, cb) => {
  // Write a function called contains that checks if an item is present inside of the given array.
  // Pass true to the callback if it is, otherwise pass false
  for (let i = 0; i < collection.length; i++) {
    if (collection[i] !== item) {
      cb(false);
    } else if (collection[i] === item) {
      cb(true);
    }
  }
};

const removeDuplicates = (collection, cb) => {
  // Write a function called removeDuplicates that removes all duplicate values from the given array.
  // Pass the array to the callback function.  Do not mutate the original array.
  // uses set data structure and from function (see notes)
  const uniqueArray = Array.from(new Set(collection));
  cb(uniqueArray);
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
