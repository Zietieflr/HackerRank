const { countingValleys } = require("./counting-valleys");

describe("Given number of steps and a string of characters representing up "
  + "and down, return how many valleys the hiker traversed.",
() => {
  describe("countingValleys", () => {
    test("Given 8, 'UDDDUDUU', return 1.", () => {
      const received = [8, 'UDDDUDUU'];
      const expected = 1;
      expect(countingValleys(...received)).toBe(expected);
    });
    test("Given 12, 'DUDUDUDUDUDU', return 6.", () => {
      const received = [12, 'DUDUDUDUDUDU'];
      const expected = 6;
      expect(countingValleys(...received)).toBe(expected);
    });
    test("Given 16, 'UUDUUDDUUDDUUDDD', return 0.", () => {
      const received = [16, 'UUDUUDDUUDDUUDDD'];
      const expected = 0;
      expect(countingValleys(...received)).toBe(expected);
    });
  });
});