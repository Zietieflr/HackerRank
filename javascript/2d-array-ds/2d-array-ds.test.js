const { hourglassSum } = require("./2d-array-ds");

describe("Given a 6x6 2d array, return the highest sum from an hourglass shape of numbers in the 6x6 array.", () => {
  describe("hourglassSum", () => {
    test("1. Given 6x6 array, return 7", () => {
      const received = [
        [1, 1, 1, 0, 0, 0],
        [0, 1, 0, 0, 0, 0],
        [1, 1, 1, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
      ];
      const expected = 7;
      expect(hourglassSum(received)).toBe(expected);
    });
    test("2. Given 6x6 array, return 19", () => {
      const received = [
        [1, 1, 1, 0, 0, 0],
        [0, 1, 0, 0, 0, 0],
        [1, 1, 1, 0, 0, 0],
        [0, 0, 2, 4, 4, 0],
        [0, 0, 0, 2, 0, 0],
        [0, 0, 1, 2, 4, 0],
      ];
      const expected = 19;
      expect(hourglassSum(received)).toBe(expected);
    });
    test("3. Given 6x6 array, return 28", () => {
      const received = [
        [-9, -9, -9, 1, 1, 1 ],
        [0, -9, 0, 4, 3, 2],
        [-9, -9, -9, 1, 2, 3],
        [0, 0, 8, 6, 6, 0],
        [0, 0, 0, -2, 0, 0],
        [0, 0, 1, 2, 4, 0],
      ];
      const expected = 28;
      expect(hourglassSum(received)).toBe(expected);
    });
    test("4. Given 6x6 array, return -63", () => {
      const received = [
        [-9, -9, -9, -9, -9, -9 ],
        [-9, -9, -9, -9, -9, -9],
        [-9, -9, -9, -9, -9, -9],
        [-9, -9, -9, -9, -9, -9],
        [-9, -9, -9, -9, -9, -9],
        [-9, -9, -9, -9, -9, -9],
      ];
      const expected = -63;
      expect(hourglassSum(received)).toBe(expected);
    });
    test("5. Given 6x6 array, return 63", () => {
      const received = [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 9, 9, 9],
        [0, 0, 0, 0, 9, 0],
        [0, 0, 0, 9, 9, 9],
      ];
      const expected = 63;
      expect(hourglassSum(received)).toBe(expected);
    });
  });
});