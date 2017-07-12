// Do not change any of the function names
// QUESTIONS: multiplyArguments, getUserConstructor, cacheFunction;
//  Could not figure out 'error  Parsing error: Unexpected token'
// always on the last line of the program
// which did not allow us to run the last several tests..

const multiplyArguments = () => {
  // use the arguments keyword to multiply all of the arguments together and return the product
  // if no arguments are passed in return 0
  // if one argument is passed in just return it
  // const count = 0;
  // const args = Array.from(arguments);
  // if (arguments.length === 0) {
  //   return 0;
  // } else if (arguments.length === 1) {
  //   return arguments[0];
  // }
  // args.reduce((total, value) => {
  //   return total * value;
  // }, 1);
  // let total = 1;
  // const args = Array.from(arguments);
  // if (arguments.length === 0) {
  //   return 0;
  // } else if (arguments.length === 1) {
  //   return arguments[0];
  // }
  // for (let i = 0; i < arguments.length; i++) {
  //   total *= arguments[i];
  //   console.log(arguments[i]);
  // }
  // return total;

  // const args = [...arguments];
  // if (args.length === 0) {
  //   return 0;
  // } else if (args.length === 1) {
  //   return args[0];
  // }
  // return args.reduce((previous, arg) => {
  //   return previous *= arg;
  // }, 1);
  const argsProduct = (...args) => {
    if (args.length === 0) {
      return 0;
    } else if (args.length === 1) {
      return args[0];
    }
    let total = 1;
    for (let i = 0; i < args.length; i++) {
      total *= args[i];
    }
    return total;
};

const invokeCallback = (cb) => {
  // invoke cb
  cb();
};

const sumArray = (numbers, cb) => {
  // sum up all of the integers in the numbers array
  // pass the result to cb
  // no return is necessary
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  cb(total);
};

const forEach = (arr, cb) => {
  // iterate over arr and pass its values to cb one by one
  // hint: you will be invoking cb multiple times (once for each value in the array)
  arr.forEach((num) => {
    cb(num);
  });
};

const map = (arr, cb) => {
  // create a new array
  // iterate over each value in arr, pass it to cb, then place the value returned from cb into the new arr
  // the new array should be the same length as the array argument
  const newArray = arr.map((index) => {
    return cb(index);
  });
  return newArray;
};

const getUserConstructor = () => {
  // create a constructor called User
  // it should accept an options object with username, name, email, and password properties
  // in the constructor set the username, name, email, and password properties
  // the constructor should have a method 'sayHi' on its prototype that returns the string 'Hello, my name is {{name}}'
  // {{name}} should be the name set on each instance
  // return the constructor
  //
  // FIRST ATTEMPT
  const User = (options) => {
    this.username = options.username,
    this.name = options.name,
    this.email = options.email,
    this.password = options.password
   };
    User.prototype.sayHi = () => {
      return `Hello, my name is ${this.name}`;
    };
  return User;
};

const addPrototypeMethod = (Constructor) => {
  // add a method to the constructor's prototype
  // the method should be called 'sayHi' and should return the string 'Hello World!'
  Constructor.prototype.sayHi = () => {
    return 'Hello World!';
  }
};

const addReverseString = () => {
  // add a method to the string constructor's prototype that returns a reversed copy of the string
  // name this method reverse
  // hint:
  // you will need to use 'this' inside of reverse
  String.prototype.reverse = (string) => {
    this.string.split().reverse().join();
  }
};

const nFactorial = (n) => {
  // return the factorial for n
  // solve this recursively
  // example:
  // the factorial of 3 is 6 (3 * 2 * 1)
  if (n < 2) {
    return 1;
  } return n * nFactorial(n - 1);
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