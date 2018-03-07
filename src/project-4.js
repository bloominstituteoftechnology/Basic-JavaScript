const getFirstItem = (collection, cb) => {
  // invoke the callback function and pass the first item from the collection in as an argument
  return cb(collection[0]);
};

const getLength = (collection, cb) => {
  // Write a function called getLength that passes the length of the array into the callback
  return cb(collection.length);
};

const getLastItem = (collection, cb) => {
  // Write a function called getLastItem which passes the getLastItem item of the array into the callback
  return cb(collection[collection.length - 1]);
};

const sumNums = (x, y, cb) => {
  // Write a function called sumNums that adds two numbers and passes the result to the callback
  return cb(x + y);
};

const multiplyNums = (x, y, cb) => {
  // Write a function called multiplyNums that multiplies two numbers and passes the result to the callback
  return cb(x * y);
};

const contains = (collection, item, cb) => {
  // Write a function called contains that checks if an item is present inside of the given array.
  // Pass true to the callback if it is, otherwise pass false
  cb(collection.includes(item));
};

// ??? How do you solve this this way?
//     for (let i = 0; i < collection.length; i++) {
//     if (collection[i] === item) {
//       return true;
//     } return false;
//   }
// };

const removeDuplicates = (collection, cb) => {
  const itemsChecked = [];
  collection.forEach((item, index) => {
    console.log(itemsChecked)
    // This is saying basically IF the item in collection does not match the item in itemsChecked, then push that to itemsChecked
    // indexOf returns -1 only when there are no matches
    if (itemsChecked.indexOf(item) === -1) {
      itemsChecked.push(item);
    }
  });
  cb(itemsChecked);
};

cb = (x) => {
  let newX = x.push('!');
  return newX;
}
const arr = ['a', 'b', 'c', 'c','a','a']
console.log(removeDuplicates(arr, cb))
console.log(arr[-1])

module.exports = {
  getFirstItem,
  getLength,
  getLastItem,
  sumNums,
  multiplyNums,
  contains,
  removeDuplicates
};
