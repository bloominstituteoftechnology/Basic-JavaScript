/* eslint-disable no-undef */
/* eslint-disable eol-last */
const exercises = require('../src/project-4');

describe('Project 4', () => {
  describe('multiplyArguments()', () => {
    it('should return the product of all the arguments', () => {
      const product = exercises.multiplyArguments(5, 5);
      const product2 = exercises.multiplyArguments();
      const product3 = exercises.multiplyArguments(3, 3, 3, 3);
      const product4 = exercises.multiplyArguments(1);
      const product5 = exercises.multiplyArguments(10, 0, 10);
      expect(product).toBe(25);
      expect(product2).toBe(0);
      expect(product3).toBe(81);
      expect(product4).toBe(1);
      expect(product5).toBe(0);
    });
  });

  describe('invokeCallback(cb)', () => {
    it('should invoke the callback that is passed in', () => {
      const cb = jest.fn();
      exercises.invokeCallback(cb);
      expect(cb).toHaveBeenCalled();
    });
  });

  describe('sumArray(cb)', () => {
    it('should pass the sum of all array numbers to cb', (done) => {
      exercises.sumArray([1, 2, 3, 4, 5], (sum) => {
        expect(sum).toBe(15);
        done();
      });
    });
  });

  describe('forEach(arr, cb)', () => {
    it('should pass all array items one by one to cb', () => {
      const nums = [];
      exercises.forEach([1, 2, 3, 4, 5], (num) => {
        nums.push(num);
      });
      expect(nums).toEqual([1, 2, 3, 4, 5]);
    });
  });

  describe('map(arr, cb)', () => {
    it('should return an array of all the processed array elements', () => {
      const squares = exercises.map([1, 2, 3, 4, 5], (num) => {
        return num * num;
      });
      expect(squares).toEqual([1, 4, 9, 16, 25]);
    });
  });

  describe('getUserConstructor()', () => {
    it('should return a user constructor that correctly builds user objects', () => {
      const User = exercises.getUserConstructor();
      const user = new User({ username: 'SunJieMing', name: 'Ben', email: 'ben@lambdaschool.com', password: 'LS Rocks!' });
      expect(user.username).toBe('SunJieMing');
      expect(user.name).toBe('Ben');
      expect(user.email).toBe('ben@lambdaschool.com');
      expect(user.password).toBe('LS Rocks!');
    });
  });

  describe('addPrototypeMethod(Constructor)', () => {
    it('should add the method sayHi to the constructor', () => {
      function Test() {
        this.test = true;
      }
      exercises.addPrototypeMethod(Test);
      const test = new Test();
      expect(test.sayHi()).toBe('Hello World!');
    });
  });

  describe('addReverseString(StringPrototype)', () => {
    it('should add a reverse string method to the String prototype that returns a reversed version of the string', () => {
      exercises.addReverseString();
      const str = 'Hello';
      expect(str.reverse()).toBe('olleH');
    });
  });

  describe('nFactorial(n)', () => {
    it('should return the factorial of n', () => {
      expect(exercises.nFactorial(5)).toBe(120);
      expect(exercises.nFactorial(15)).toBe(1307674368000);
    });
  });

  describe('cacheFunction(cb)', () => {
    it('should return the callback function', () => {
      const cb = () => {};
      expect(typeof exercises.cacheFunction(cb)).toEqual('function');
    });
    it('should return the callback functions result when the cached function is invoked', () => {
      const cb = (x) => {
        return x * 2;
      };
      const cachedFunction = exercises.cacheFunction(cb);
      expect(cachedFunction(5)).toBe(10);
    });
    it('should cache function results', () => {
      const cb = jest.fn();
      const cachedFunction = exercises.cacheFunction(cb);
      cachedFunction(true);
      cachedFunction(true);
      cachedFunction(true);
      cachedFunction(true);
      cachedFunction(true);
      cachedFunction(10);
      cachedFunction(10);
      cachedFunction(10);
      cachedFunction(10);
      expect(cb).toHaveBeenCalledTimes(2);
    });
  });
});
