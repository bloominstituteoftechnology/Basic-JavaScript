/* eslint-disable no-undef */
const exercises = require('../src/project-2');

describe('Project 2', () => {
  describe('getBiggest(x, y)', () => {
    it('should return x if it is larger than y', () => {
      expect(exercises.getBiggest(10, 5)).toBe(10);
    });
    it('should return y if it is larger than x', () => {
      expect(exercises.getBiggest(50, 100)).toBe(100);
    });
    it('should return either one if they are the same', () => {
      expect(exercises.getBiggest(1000, 1000)).toBe(1000);
    });
  });

  describe('greeting(language)', () => {
    it('should return \'Guten Tag!\' for German', () => {
      expect(exercises.greeting('German')).toBe('Guten Tag!');
    });
    it('should return \'Hola!\' for Spanish', () => {
      expect(exercises.greeting('Spanish')).toBe('Hola!');
    });
    it('should return \'Hello!\' for English', () => {
      expect(exercises.greeting('English')).toBe('Hello!');
    });
    it('should return \'Hello!\' if no argument is passed in or if a language beyond Spanish, English, and German is passed in.', () => {
      expect(exercises.greeting('French')).toBe('Hello!');
      expect(exercises.greeting()).toBe('Hello!');
    });
  });

  describe('isTenOrFive(num)', () => {
    it('should return true if num is 10 or 5', () => {
      expect(exercises.isTenOrFive(10)).toBe(true);
      expect(exercises.isTenOrFive(5)).toBe(true);
    });
    it('should return false if num is not 10 or 5', () => {
      expect(exercises.isTenOrFive(11)).toBe(false);
      expect(exercises.isTenOrFive(6)).toBe(false);
      expect(exercises.isTenOrFive(0)).toBe(false);
      expect(exercises.isTenOrFive(5.01)).toBe(false);
    });
  });

  describe('isInRange(num)', () => {
    it('should return true if num is inside range', () => {
      expect(exercises.isInRange(35.5)).toBe(true);
      expect(exercises.isInRange(40)).toBe(true);
      expect(exercises.isInRange(49)).toBe(true);
      expect(exercises.isInRange(21)).toBe(true);
    });
    it('should return false if outside of range', () => {
      expect(exercises.isInRange(10)).toBe(false);
      expect(exercises.isInRange(20)).toBe(false);
      expect(exercises.isInRange(50)).toBe(false);
      expect(exercises.isInRange(100)).toBe(false);
    });
  });

  describe('isInteger(num)', () => {
    it('should return true if num is 5', () => {
      expect(exercises.isInteger(5)).toBe(true);
    });
    it('should return false if num is 0.5', () => {
      expect(exercises.isInteger(0.5)).toBe(false);
    });
    it('should return true if num is -20', () => {
      expect(exercises.isInteger(-20)).toBe(true);
    });
    it('should return true for 0', () => {
      expect(exercises.isInteger(0)).toBe(true);
    });
  });

  describe('fizzBuzz(num)', () => {
    it('should return fizz if divisible by 3', () => {
      expect(exercises.fizzBuzz(9)).toBe('fizz');
    });
    it('should return buzz if divisible by 5', () => {
      expect(exercises.fizzBuzz(10)).toBe('buzz');
    });
    it('should return fizzbuzz if divisible by 3 and 5', () => {
      expect(exercises.fizzBuzz(15)).toBe('fizzbuzz');
    });
    it('should return num if not divisible by 3 or 5', () => {
      expect(exercises.fizzBuzz(4)).toBe(4);
    });
  });

  describe('isPrime(num)', () => {
    it('should return true if num is prime', () => {
      expect(exercises.isPrime(7)).toBe(true);
      expect(exercises.isPrime(97)).toBe(true);
    });
    it('should return false if num is not prime', () => {
      expect(exercises.isPrime(10)).toBe(false);
      expect(exercises.isPrime(100)).toBe(false);
      expect(exercises.isPrime(0)).toBe(false);
      expect(exercises.isPrime(1)).toBe(false);
    });
  });

  describe('returnFirst(arr)', () => {
    it('should return the first item in the array', () => {
      expect(exercises.returnFirst([10, 10, 16, 12])).toBe(10);
      expect(exercises.returnFirst([97, 100, 80, 55, 72, 94])).toBe(97);
    });
  });

  describe('returnLast(arr)', () => {
    it('should return the last item in the array', () => {
      expect(exercises.returnLast([10, 10, 16, 12])).toBe(12);
      expect(exercises.returnLast([97, 100, 80, 55, 72, 94])).toBe(94);
      expect(exercises.returnLast(['hi', 'there', 'how', 'are', 'you', 'doing?'])).toBe('doing?');
    });
  });

  describe('getArrayLength(arr)', () => {
    it('should return the length of the array', () => {
      expect(exercises.getArrayLength([10, 10, 16, 12])).toBe(4);
      expect(exercises.getArrayLength([97, 100, 80, 55, 72, 94])).toBe(6);
      expect(exercises.getArrayLength(['hi', 'there', 'how', 'are', 'you', 'doing?'])).toBe(6);
    });
  });

  describe('incrementByOne(arr)', () => {
    it('should return the array with each value incremented by one', () => {
      expect(exercises.incrementByOne([10, 10, 16, 12])).toEqual([11, 11, 17, 13]);
      expect(exercises.incrementByOne([97, 100, 80, 55, 72, 94])).toEqual([98, 101, 81, 56, 73, 95]);
      expect(exercises.incrementByOne([])).toEqual([]);
    });
  });

  describe('addItemToArray(arr, item)', () => {
    it('should return the array with the item added to the end', () => {
      expect(exercises.addItemToArray([10, 10, 16, 12], 10)).toEqual([10, 10, 16, 12, 10]);
      expect(exercises.addItemToArray([97, 100, 80, 55, 72, 94], 'Hello')).toEqual([97, 100, 80, 55, 72, 94, 'Hello']);
      expect(exercises.addItemToArray([], true)).toEqual([true]);
    });
  });

  describe('addItemToFront(arr, item)', () => {
    it('should return the array with the item added to the front', () => {
      expect(exercises.addItemToFront([10, 10, 16, 12], 10)).toEqual([10, 10, 10, 16, 12]);
      expect(exercises.addItemToFront([97, 100, 80, 55, 72, 94], 'Hello')).toEqual(['Hello', 97, 100, 80, 55, 72, 94]);
      expect(exercises.addItemToFront([], true)).toEqual([true]);
    });
  });

  describe('wordsToSentence(words)', () => {
    it('should return a string that has all of the words from the array separated by spaces', () => {
      expect(exercises.wordsToSentence(['LambdaSchool', 'JavaScript', 'Class'])).toBe('LambdaSchool JavaScript Class');
      expect(exercises.wordsToSentence(['LambdaSchool'])).toBe('LambdaSchool');
    });
  });

  describe('contains(arr, item)', () => {
    it('should return true if the array contains the item', () => {
      expect(exercises.contains([10, 10, 16, 12], 10)).toBe(true);
      expect(exercises.contains([97, 100, 80, 55, 72, 94], 'Hello')).toBe(false);
      expect(exercises.contains([], true)).toBe(false);
    });
  });

  describe('addNumbers(numbers)', () => {
    it('should add all of the numbers in the array together and return the sum', () => {
      expect(exercises.addNumbers([10, 10, 16])).toBe(36);
      expect(exercises.addNumbers([97, 100])).toBe(197);
      expect(exercises.addNumbers([0])).toBe(0);
    });
  });

  describe('averageTestScore(testScores)', () => {
    it('should return the average test score', () => {
      expect(exercises.averageTestScore([10, 10, 16, 12])).toBe(12);
      expect(exercises.averageTestScore([97, 100, 80, 55, 72, 94])).toBe(83);
    });
  });

  describe('largestNumber(numbers)', () => {
    it('should return the largest number', () => {
      expect(exercises.largestNumber([10, 10, 16, 12])).toBe(16);
      expect(exercises.largestNumber([97, 100, 80, 55, 72, 94])).toBe(100);
      expect(exercises.largestNumber([97, 10000, 80, 55, 7.2, -94])).toBe(10000);
    });
  });
});
