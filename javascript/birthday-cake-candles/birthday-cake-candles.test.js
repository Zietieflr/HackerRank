const { birthdayCakeCandles } = require("./birthday-cake-candles");

describe("Given array of candles, return a count of the tallest ones.", () => {
  describe("birthdayCakeCandles", () => {
    test("Given [3, 2, 1, 3], return 2", () => {
      const received = [3, 2, 1, 3];
      const expected = 2;
      expect(birthdayCakeCandles(received)).toBe(expected);
    });
    test("Given [30, 30, 2000, 345, 2031, 301, 104, 392, 92, 99, 101, 2031], "
      + "return 2",
    () => {
      const received = [30, 30, 2000, 345, 2031, 301, 104, 392, 92, 99, 101, 2031];
      const expected = 2;
      expect(birthdayCakeCandles(received)).toBe(expected);
    });
    test("Given [1, 1, 1, 1, 1, 1, 1, 1], return 8", () => {
      const received = [1, 1, 1, 1, 1, 1, 1, 1];
      const expected = 8;
      expect(birthdayCakeCandles(received)).toBe(expected);
    });
  });
});