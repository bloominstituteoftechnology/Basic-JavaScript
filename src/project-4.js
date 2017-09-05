const getFirstItem = (collection, cb) => {
  cb(collection[0]);
  // invoke the callback function and pass the first item from the collection in as an argument
};

const getLength = (collection, cb) => {
  cb(collection.length);
  // Write a function called getLength that passes the length of the array into the callback
};

const getLastItem = (collection, cb) => {
  cb(collection[collection.length - 1]);
  // Write a function called getLastItem which passes the getLastItem item of the array into the callback
};

const sumNums = (x, y, cb) => {
  cb(x + y);
  // Write a function called sumNums that adds two numbers and passes the result to the callback
};

const multiplyNums = (x, y, cb) => {
  cb(x * y);
  // Write a function called multiplyNums that multiplies two numbers and passes the result to the callback
};

const contains = (collection, item, cb) => {
  let isPresent = false;
  for (let i = 0; i < collection.length; i++) {
    if (collection[i] === item) {
      isPresent = true;
    }
  } cb(isPresent);
  // Write a function called contains that checks if an item is present inside of the given array.
  // Pass true to the callback if it is, otherwise pass false
};

const removeDuplicates = (collection, cb) => {
  const newArray = collection.slice();
  for (let i = 0; i < newArray.length; i++) {
    for (let j = i + 1; j < newArray.length; j++) {
      if (newArray[i] === newArray[j]) {
        newArray.splice(j, 1);
      }
    }
  } cb(newArray);
  // Write a function called removeDuplicates that removes all duplicate values from the given array.
  // Pass the array to the callback function.  Do not mutate the original array.
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
