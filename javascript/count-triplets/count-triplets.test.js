const { countTriplets } = require("./count-triplets");

describe("Given a list of integers, determine how many triplets have a "
  +"geometric progression.",
() => {
  describe("countTriplets", () => {
    test("Given [1, 2, 4], 2; return 1.", () => {
      const received = [[1, 2, 4], 2];
      const expected = 1;
      expect(countTriplets(...received)).toBe(expected);
    });
    test("Given [1, 2, 2, 4], 2; return 2.", () => {
      const received = [[1, 2, 2, 4], 2];
      const expected = 2;
      expect(countTriplets(...received)).toBe(expected);
    });
    test("Given [1, 4], 4; return 0.", () => {
      const received = [[1, 4], 4];
      const expected = 0;
      expect(countTriplets(...received)).toBe(expected);
    });
    test("Given [1, 4, 4], 4; return 0.", () => {
      const received = [[1, 4, 4], 4];
      const expected = 0;
      expect(countTriplets(...received)).toBe(expected);
    });
    test("Given [1, 4, 8], 4; return 0.", () => {
      const received = [[1, 4, 8], 4];
      const expected = 0;
      expect(countTriplets(...received)).toBe(expected);
    });
    test("Given [1, 4, 9, 16], 4; return 1.", () => {
      const received = [[1, 4, 9, 16], 4];
      const expected = 1;
      expect(countTriplets(...received)).toBe(expected);
    });
    test("Given [1, 4, 16, 64], 4; return 2.", () => {
      const received = [[1, 4, 16, 64], 4];
      const expected = 2;
      expect(countTriplets(...received)).toBe(expected);
    });
    test("Given [1, 3, 9, 9, 27, 81], 3; return 6.", () => {
      const received = [[1, 3, 9, 9, 27, 81], 3];
      const expected = 6;
      expect(countTriplets(...received)).toBe(expected);
    });
    test("Given [1, 5, 5, 25, 125], 5; return 4.", () => {
      const received = [[1, 5, 5, 25, 125], 5];
      const expected = 4;
      expect(countTriplets(...received)).toBe(expected);
    });
    test("Given [1, 125, 5, 25, 5], 25; return 1.", () => {
      const received = [[1, 5, 5, 25, 125], 5];
      const expected = 1;
      expect(countTriplets(...received)).toBe(expected);
    });
    test("Given [1, 4, 17, 2, 4, 6, 3, 34, 8, 12, 8, 68, 16, 68], 2; " 
      +"return 7.", 
    () => {
      const received = [[1, 4, 17, 2, 4, 6, 3, 34, 8, 12, 8, 68, 16, 68], 2];
      const expected = 7;
      expect(countTriplets(...received)).toBe(expected);
    });
  });
});