/* eslint-disable no-undef */
const exercises = require('../src/project-1');

describe('Project 1', () => {
  describe('multiplyByTen(num)', () => {
    it('should return the argument after multiplying by ten', () => {
      expect(exercises.multiplyByTen(10)).toBe(100);
      expect(exercises.multiplyByTen(0)).toBe(0);
    });
  });

  describe('subtractFive(num)', () => {
    it('should return the argument after subtracting five', () => {
      expect(exercises.subtractFive(10)).toBe(5);
      expect(exercises.subtractFive(0)).toBe(-5);
    });
  });

  describe('areSameLength(str1, str2)', () => {
    it('should return true if the arguments have the same length', () => {
      expect(exercises.areSameLength('hi', 'there')).toBe(false);
      expect(exercises.areSameLength('javascript', 'bumfuzzled')).toBe(true);
    });
  });

  describe('areEqual(x, y)', () => {
    it('should return true if the arguments are equal', () => {
      expect(exercises.areEqual(15, 15)).toBe(true);
      expect(exercises.areEqual(90, 50)).toBe(false);
      expect(exercises.areEqual('test', 'test')).toBe(true);
    });
  });

  describe('lessThanNinety(num)', () => {
    it('should return true if the argument is less than ninety', () => {
      expect(exercises.lessThanNinety(15)).toBe(true);
      expect(exercises.lessThanNinety(90)).toBe(false);
      expect(exercises.lessThanNinety(100)).toBe(false);
    });
  });

  describe('greaterThanFifty(num)', () => {
    it('should return true if the argument is greater than fifty', () => {
      expect(exercises.greaterThanFifty(15)).toBe(false);
      expect(exercises.greaterThanFifty(50)).toBe(false);
      expect(exercises.greaterThanFifty(60)).toBe(true);
    });
  });

  describe('add(x, y)', () => {
    it('should return the sum of the two arguments', () => {
      expect(exercises.add(5, 5)).toBe(10);
      expect(exercises.add(-1, 5)).toBe(4);
    });
  });

  describe('subtract(x, y)', () => {
    it('should return the difference of the two arguments', () => {
      expect(exercises.subtract(5, 5)).toBe(0);
      expect(exercises.subtract(-1, 5)).toBe(-6);
      expect(exercises.subtract(5, -5)).toBe(10);
      expect(exercises.subtract(0, 0)).toBe(0);
    });
  });

  describe('divide(x, y)', () => {
    it('should return the quotient of the two arguments', () => {
      expect(exercises.divide(5, 5)).toBe(1);
      expect(exercises.divide(10, 5)).toBe(2);
      expect(exercises.divide(11, 2)).toBe(5.5);
    });
  });

  describe('multiply(x, y)', () => {
    it('should return the product of the two arguments', () => {
      expect(exercises.multiply(5, 5)).toBe(25);
      expect(exercises.multiply(10, -5)).toBe(-50);
      expect(exercises.multiply(11, 0)).toBe(0);
    });
  });

  describe('getRemainder(x, y)', () => {
    it('should return the division remainder of the two arguments', () => {
      expect(exercises.getRemainder(5, 5)).toBe(0);
      expect(exercises.getRemainder(10, 5)).toBe(0);
      expect(exercises.getRemainder(11, 2)).toBe(1);
    });
  });

  describe('isEven(num)', () => {
    it('should return the bool true if the argument is even, false otherwise', () => {
      expect(exercises.isEven(6)).toBe(true);
      expect(exercises.isEven(7)).toBe(false);
      expect(exercises.isEven(0)).toBe(true);
    });
  });

  describe('isOdd(num)', () => {
    it('should return the bool true if the argument is odd, false otherwise', () => {
      expect(exercises.isOdd(6)).toBe(false);
      expect(exercises.isOdd(7)).toBe(true);
      expect(exercises.isOdd(0)).toBe(false);
    });
  });

  describe('square(num)', () => {
    it('should return the argument after squaring it', () => {
      expect(exercises.square(6)).toBe(36);
      expect(exercises.square(7)).toBe(49);
      expect(exercises.square(0)).toBe(0);
      expect(exercises.square(-5)).toBe(25);
    });
  });

  describe('cube(num)', () => {
    it('should return the argument after cubing it', () => {
      expect(exercises.cube(3)).toBe(27);
      expect(exercises.cube(0)).toBe(0);
      expect(exercises.cube(-5)).toBe(-125);
    });
  });

  describe('raiseToPower(num, exponent)', () => {
    it('should return the argument after raising it to the exponent\'s power', () => {
      expect(exercises.raiseToPower(2, 2)).toBe(4);
      expect(exercises.raiseToPower(2, 3)).toBe(8);
      expect(exercises.raiseToPower(0, 5)).toBe(0);
      expect(exercises.raiseToPower(10, 1)).toBe(10);
    });
  });

  describe('roundNumber(num)', () => {
    it('should return the argument after rounding it', () => {
      expect(exercises.roundNumber(1.5)).toBe(2);
      expect(exercises.roundNumber(2)).toBe(2);
      expect(exercises.roundNumber(0.1)).toBe(0);
    });
  });

  describe('roundUp(num)', () => {
    it('should return the argument after rounding it up', () => {
      expect(exercises.roundUp(1.5)).toBe(2);
      expect(exercises.roundUp(2)).toBe(2);
      expect(exercises.roundUp(0.1)).toBe(1);
    });
  });

  describe('addExclamationPoint(str)', () => {
    it('should add an exclamation point to the end of the string', () => {
      expect(exercises.addExclamationPoint('hello world')).toBe('hello world!');
      expect(exercises.addExclamationPoint('LambdaSchool')).toBe('LambdaSchool!');
    });
  });

  describe('combineNames(firstName, lastName)', () => {
    it('should return the two strings combined into one with a space separating them', () => {
      expect(exercises.combineNames('hello', 'world')).toBe('hello world');
      expect(exercises.combineNames('Lambda', 'School')).toBe('Lambda School');
    });
  });

  describe('getGreeting(name)', () => {
    it('should return the string \'Hello {name}!\'', () => {
      expect(exercises.getGreeting('Ben')).toBe('Hello Ben!');
      expect(exercises.getGreeting('LambdaSchool')).toBe('Hello LambdaSchool!');
    });
  });

  describe('getRectangleArea(length, width)', () => {
    it('should return the correct area', () => {
      expect(exercises.getRectangleArea(2, 2)).toBe(4);
      expect(exercises.getRectangleArea(3, 6)).toBe(18);
      expect(exercises.getRectangleArea(0, 2)).toBe(0);
    });
  });

  describe('getTriangleArea(base, height)', () => {
    it('should return the correct area', () => {
      expect(exercises.getTriangleArea(2, 2)).toBe(2);
      expect(exercises.getTriangleArea(0, 2)).toBe(0);
    });
  });

  describe('getCircleArea(radius)', () => {
    it('should return the correct area', () => {
      expect(exercises.getCircleArea(4)).toBe(50);
      expect(exercises.getCircleArea(0)).toBe(0);
    });
  });

  describe('getRectangularPrismVolume(length, width, height)', () => {
    it('should return the correct volume', () => {
      expect(exercises.getRectangularPrismVolume(2, 2, 2)).toBe(8);
      expect(exercises.getRectangularPrismVolume(0, 5, 10)).toBe(0);
    });
  });
});
