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
  cb(collection[collection.length - 1]);
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
  const seen = {
    seen: false
  };

  for (let i = 0; i < collection.length; i++) {
    if (collection[i] === item) {
      seen[seen] = true;
    }
  }

  if (seen[seen]) {
    cb(true);
  } else {
    cb(false);
  }
};

const removeDuplicates = (collection, cb) => {
  // Write a function called removeDuplicates that removes all duplicate values from the given array.
  // Pass the array to the callback function.  Do not mutate the original array.
  cb(collection.filter((el, i, arr) => arr.indexOf(el) === i));
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
