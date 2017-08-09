const getFirstItem = (collection, cb) => {
  cb(collection[0]);
};

const getLength = (collection, cb) => {
  cb(collection.length);
};

const getLastItem = (collection, cb) => {
  cb(collection[collection.length - 1]);
};

const sumNums = (x, y, cb) => {
  const numSummed = x + y;
  cb(numSummed);
};

const multiplyNums = (x, y, cb) => {
  const numProduct = x * y;
  cb(numProduct);
};

const contains = (collection, item, cb) => {
  cb(collection.includes(item));
};

const removeDuplicates = (collection, cb) => {
  const itemsChecked = [];
  collection.forEach((item, index) => {
    if (itemsChecked.indexOf(item) === -1) {
      itemsChecked.push(item);
    }
  });
  cb(itemsChecked);
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
