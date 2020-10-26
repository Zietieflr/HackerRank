const { divisibleSumPairs } = require("./divisible-sum-pairs");

describe("Given count, divisor, and integers, return count of pairs from "
  + "integers where the divisor evenly divides the sum of the pair.", 
() => {
  describe("divisibleSumPairs", () => {
    test("Given 6, [1, 2, 3, 4, 5, 6], and 5, return 3", () => {
      const received = [6, 5, [1, 2, 3, 4, 5, 6]];
      const expected = 3;
      expect(divisibleSumPairs(...received)).toBe(expected);
    });
    test("Given 6, [1, 3, 2, 6, 1, 2], and 3, return 5", () => {
      const received = [6, 3, [1, 3, 2, 6, 1, 2]];
      const expected = 5;
      expect(divisibleSumPairs(...received)).toBe(expected);
    });
    test("Given 8, [1, 1, 1, 1, 1, 1, 1, 1], and 2, return 28", () => {
      const received = [8, 2, [1, 1, 1, 1, 1, 1, 1, 1]];
      const expected = 28;
      expect(divisibleSumPairs(...received)).toBe(expected);
    });
  });
});
