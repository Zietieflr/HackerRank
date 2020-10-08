const { getTotalX, sortArray, findFactors, checkFactors, evenlyDivides, findLowestCommonDenominator } = require("./between-two-sets");

describe("Given two arrays of integers, return the number of factors", () =>{
  describe("getTotalX", () => {
    test("Given argument, return 2", () => {
      const argument = [[2, 6], [24, 36]];
      const expected = 2;
      expect(getTotalX(...argument)).toBe(expected);
    });
    test("Given argument, return 2", () => {
      const argument = [[2, 4, 8], [16, 32, 96]];
      const expected = 2;
      expect(getTotalX(...argument)).toBe(expected);
    });
    test("Given argument, return 0", () => {
      const argument = [[3, 4], [16, 32, 96]];
      const expected = 0;
      expect(getTotalX(...argument)).toBe(expected);
    });
    test("Given argument, return 1", () => {
      const argument = [[6, 5, 30], [90, 30, 120, 150, 60]];
      const expected = 1;
      expect(getTotalX(...argument)).toBe(expected);
    });
    test("Given argument, return 0", () => {
      const argument = [[2, 4], [16, 4, 12, 13, 24]];
      const expected = 0;
      expect(getTotalX(...argument)).toBe(expected);
    });
    test("Given argument, return 1", () => {
      const argument = [[6, 1, 3, 2], [6, 36, 12, 72, 18]];
      const expected = 1;
      expect(getTotalX(...argument)).toBe(expected);
    });
  });

  describe("sortArray", () => {
    test("Given array, sort into ascending order.", () => {
      const argument = [5, 7, 9, 2, 5, 0, 300, 59, 22, 86];
      const expected = [300, 86, 59, 22, 9, 7, 5, 5, 2, 0];
      expect(sortArray(argument)).toStrictEqual(expected);
    });
  });

  describe("findLowestCommonDenominator", () => {
    test("Given array find lowest common denominator: 12", () => {
      const argument = [3, 4];
      const expected = 12;
      expect(findLowestCommonDenominator(argument)).toBe(expected);
    });
    test("Given array find lowest common denominator: 48", () => {
      const argument = [3, 4, 16];
      const expected = 48;
      expect(findLowestCommonDenominator(argument)).toBe(expected);
    });
    test("Given array find lowest common denominator: 0", () => {
      const argument = sortArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
      const expected = 0;
      expect(findLowestCommonDenominator(argument)).toBe(expected);
    });
    test("Given array find lowest common denominator: 6", () => {
      const argument = [2, 6];
      const expected = 6;
      expect(findLowestCommonDenominator(argument)).toBe(expected);
    });
  });

  describe("findFactors", () => {
    test("Given arguments, return factors. [4, 8, 16]", () => {
      const argument = [4, 16];
      const expected = [4, 8, 16];
      expect(findFactors(...argument)).toStrictEqual(expected);
    });
    test("Given arguments, return factors. []", () => {
      const argument = [3, 10];
      const expected = [];
      expect(findFactors(...argument)).toStrictEqual(expected);
    });
    test("Given arguments, return factors. [1, 2, 4, 5, 10, 20]", () => {
      const argument = [1, 20];
      const expected = [1, 2, 4, 5, 10, 20];
      expect(findFactors(...argument)).toStrictEqual(expected);
    });
  });

  describe("checkFactors", () => {
    test("Given factors, check against remaining integers. 1st", () => {
      const argument = [[4, 8, 16], [32, 64, 72]];
      const expected = [4, 8];
      expect(checkFactors(...argument)).toStrictEqual(expected);
    });
    test("Given factors, check against remaining integers. 2nd", () => {
      const argument = [[3, 9, 36], [3, 18, 36]];
      const expected = [3];
      expect(checkFactors(...argument)).toStrictEqual(expected);
    });
    test("Given factors, check against remaining integers. 3rd", () => {
      const argument = [[4, 8, 16], [3, 28, 56]];
      const expected = [];
      expect(checkFactors(...argument)).toStrictEqual(expected);
    });
  });

  describe("evenlyDivides", () => {
    test("Given factor and integers, return true if factor of all, else return false. True.", () => {
      const argument = [2, [2, 4, 6]];
      const expected = true;
      expect(evenlyDivides(...argument)).toBe(expected);
    });
    test("Given factor and integers, return true if factor of all, else return false. False", () => {
      const argument = [3, [2, 4, 6]];
      const expected = false;
      expect(evenlyDivides(...argument)).toBe(expected);
    });
  });
});