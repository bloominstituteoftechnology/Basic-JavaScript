// Do not change any of the function names

const multiplyArguments = (...args) => {
  let sum = 0;
  args.forEach((t, i) => {
    sum = i === 0 ? t : sum *= t;
  });
  return sum;
};

const invokeCallback = (cb) => {
  cb();
};

const sumArray = (numbers, cb) => {
  let sum = 0;
  numbers.forEach((t, i) => {
    sum += t;
  });
  cb(sum);
};

const forEach = (arr, cb) => {
  arr.forEach((t, i) => {
    cb(t);
  });
};

const map = (arr, cb) => {
  const newArr = [];
  arr.forEach((t, i) => {
    cb(t);
    newArr.push(cb(t));
  });
  return newArr;
};

const getUserConstructor = () => {
  class User {
    constructor(user) {
      this.username = user.username;
      this.name = user.name;
      this.email = user.email;
      this.password = user.password;
    }
    sayHi() {
      return `Hello, my name is ${this.name}`;
    }
  }
  return User;
};

const addPrototypeMethod = (Constructor) => {
  Constructor.prototype.sayHi = () => {
    return 'Hello World!';
  };
};

const addReverseString = () => {
  String.prototype.reverse = function () {
    return this.split('').reverse().join('');
  };
};

const nFactorial = (n) => {
  let tmp = n;
  if (n < 0) {
    return -1;
  } else if (n === 0) {
    return 1;
  } while (n-- > 2) {
    tmp *= n;
  } return tmp;
};

const cacheFunction = (cb) => {
  const cache = {};
  return (argument) => {
    if (Object.prototype.hasOwnProperty.call(cache, argument)) {
      return cache[argument];
    }
    cache[argument] = cb(argument);
    return cache[argument];
  };
};


// Do not modify code below this line.
// --------------------------------

module.exports = {
  multiplyArguments,
  invokeCallback,
  sumArray,
  forEach,
  map,
  getUserConstructor,
  addPrototypeMethod,
  addReverseString,
  nFactorial,
  cacheFunction
};
