const { minimumSwaps } = require("./minimum-swaps-2");

describe("Given array of jumbled integers, find the minimum number of swaps "
  +"to sort the integers in ascending order. Numbers do not repeat.\n",
() => {
  describe("minimumSwaps\n", () => {
    test("Given 1, 2, 3, 4; return 0.", () => {
      const received = [1, 2, 3, 4];
      const expected = 0;
      expect(minimumSwaps(received)).toBe(expected);
    });
    test("Given 4, 2, 3, 1; return 1.", () => {
      const received = [4, 2, 3, 1];
      const expected = 1;
      expect(minimumSwaps(received)).toBe(expected);
    });
    test("Given 4, 3, 1, 2; return 3.", () => {
      const received = [4, 3, 1, 2];
      const expected = 3;
      expect(minimumSwaps(received)).toBe(expected);
    });
    test("Given 2, 3, 4, 1, 5; return 3.", () => {
      const received = [2, 3, 4, 1, 5];
      const expected = 3;
      expect(minimumSwaps(received)).toBe(expected);
    });
    test("Given 1, 3, 5, 2, 4, 6, 7; return 3.", () => {
      const received = [1, 3, 5, 2, 4, 6, 7];
      const expected = 3;
      expect(minimumSwaps(received)).toBe(expected);
    });
    test("Given 7, 1, 3, 2, 4, 5, 6; return 5.", () => {
      const received = [7, 1, 3, 2, 4, 5, 6];
      const expected = 5;
      expect(minimumSwaps(received)).toBe(expected);
    });
  });
});