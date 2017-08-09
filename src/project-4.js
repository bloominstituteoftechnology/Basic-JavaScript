const getFirstItem = (collection, cb) => cb(collection[0]);
// invoke the callback function and pass the first item from the collection in as an argument

const getLength = (collection, cb) => cb(collection.length);
// Write a function called getLength that passes the length of the array into the callback

const getLastItem = (collection, cb) => cb(collection.pop());
// Write a function called getLastItem which passes the getLastItem item of the array into the callback


const sumNums = (x, y, cb) => cb(x + y);
// Write a function called sumNums that adds two numbers and passes the result to the callback

const multiplyNums = (x, y, cb) => cb(x * y);
// Write a function called multiplyNums that adds two numbers and passes the result to the callback


const contains = (collection, item, cb) => cb(collection.includes(item));
// Write a function called contains that checks if an item is present inside of the given array.
// Pass true to the callback if it is, otherwise pass false

const removeDuplicates = (collection, cb) => {
  // Write a function called removeDuplicates that removes all duplicate values from the given array.
  // Pass the array to the callback function.  Do not mutate the original array.

  /*
   * in: [4,5,4,5]
   * out: [] => [4] => [4,5]
   *
   * create output array
   * iterate through input array
   *   push unique values to output array <----- how to test for uniqueness?
   *
   *
   * testForUniqueness(current value)  current value = 4
   *   iterate through the output array from 0th idx on
   *      isDuplicate = false
   *     if(current value is equal to the current element of the output array)
   *        set isDuplicate to true
   *
   *   if isDuplicate is false, push current value to output array
   *
   * i: 1
   * in: [4,5,4,5]
   * out: [4]
   *
   */
  const out = [];
  const testForUniqueness = (val) => {
    let isDuplicate = false;
    for (let i = 0; i < out.length; i++) {
      if (val === out[i]) {
        isDuplicate = true;
      }
    }
    if (isDuplicate === false) {
      out.push(val);
    }
  };
  for (let i = 0; i < collection.length; i++) {
    testForUniqueness(collection[i]);
  }
  cb(out);
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
