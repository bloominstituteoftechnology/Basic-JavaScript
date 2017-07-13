// Do not change any of the function names

const multiplyArguments = (...args) => {
  let sum = 0;
  args.forEach((t, i) => {
    sum = i === 0 ? t : sum *= t;
  });
  return sum;
  // use the arguments keyword to multiply all of the arguments together and return the product
  // if no arguments are passed in return 0
  // if one argument is passed in just return it
};

const invokeCallback = (cb) => {
  // invoke cb
  cb();
};

const sumArray = (numbers, cb) => {
  // sum up all of the integers in the numbers array
  // pass the result to cb
  // no return is necessary
  let sum = 0;
  numbers.forEach((t, i) => {
    sum += t;
  });
  cb(sum);
};

const forEach = (arr, cb) => {
  // iterate over arr and pass its values to cb one by one
  // hint: you will be invoking cb multiple times (once for each value in the array)
  arr.forEach((t, i) => {
    cb(t);
  });
};

const map = (arr, cb) => {
  // create a new array
  // iterate over each value in arr, pass it to cb, then place the value returned from cb into the new arr
  // the new array should be the same length as the array argument
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
  // add a method to the constructor's prototype
  // the method should be called 'sayHi' and should return the string 'Hello World!'
  Constructor.prototype.sayHi = () => {
    return 'Hello World!';
  };
};

const addReverseString = () => {
  // add a method to the string constructor's prototype that returns a reversed copy of the string
  // name this method reverse
  // hint:
  // you will need to use 'this' inside of reverse
  String.prototype.reverse = function () {
    return this.split('').reverse().join('');
  };
};

const nFactorial = (n) => {
  // return the factorial for n
  // solve this recursively
  // example:
  // the factorial of 3 is 6 (3 * 2 * 1)
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
  // Extra Credit
  // use closure to create a cache for the cb function
  // the function that you return should accept a single argument and invoke cb with that argument
  // when the function you return is invoked with an argument it should save that argument and its result
  // when the function you return is called again with an argument that it has seen before it should not call cb
  // but should instead directly returned the previous result
  // example:
  // cb -> function(x) { return x * x; }
  // if the function you return is invoked with 5 it would pass 5 to cb(5) and return 25
  // if the function you return is invoked again with 5 it will look on an object in the closure scope
  // and return 25 directly and will not invoke cb again
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
