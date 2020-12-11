const { countTriplets, convertToListLookUp, hasGeometricProgression } = require("./count-triplets");

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
    test("Given [1, 125, 5, 25, 5], 5; return 1.", () => {
      const received = [[1, 125, 5, 25, 5], 5];
      const expected = 1;
      expect(countTriplets(...received)).toBe(expected);
    });
    test("Given [1, 4, 17, 2, 4, 6, 3, 34, 8, 12, 8, 68, 16, 68], 2; " 
      +"return 7.", 
    () => {
      const received = [[1, 4, 17, 2, 4, 6, 3, 34, 8, 12, 8, 68, 16, 68], 2];
      const expected = 9;
      expect(countTriplets(...received)).toBe(expected);
    });
  });
  describe("convertToListLookUp", () => {
    test("Given [1]; return {1: [0]}.", () => {
      const received = [1];
      const expected = {1: [0]};
      expect(convertToListLookUp(received)).toStrictEqual(expected);
    });
    test("Given [1, 2, 3, 4, 4, 4, 5]; "
      +"return {1: [0], 2: [1], 3: [2], 4: [3, 4, 5], 5: [5]}.", 
    () => {
      const received = [1, 2, 3, 4, 4, 4, 5];
      const expected = {1: [0], 2: [1], 3: [2], 4: [3, 4, 5], 5: [6]};
      expect(convertToListLookUp(received)).toStrictEqual(expected);
    });
  });
  describe("hasGeometricProgression", () => {
    test("Given 4, 2, {4: [0, 1]}; return 0.", () => {
      const received = [4, 2, {4: [0, 1]}];
      const expected = 0;
      expect(hasGeometricProgression(...received)).toBe(expected);
    });
    test("Given 4, 2, {2: [0], 4: [1], 8: [2]}; return 1.", () => {
      const received = [2, 2, {2: [0], 4: [1], 8: [2]}];
      const expected = 1;
      expect(hasGeometricProgression(...received)).toBe(expected);
    });
    test("Given 2, 2, {2: [1], 4: [0], 8: [2]}; return 0.", () => {
      const received = [4, 2, {2: [1], 4: [0], 8: [2]}];
      const expected = 0;
      expect(hasGeometricProgression(...received)).toBe(expected);
    });
    test("Given 2, 2, {2: [0, 1], 4: [2], 8: [3]}; return 2.", () => {
      const received = [2, 2, {2: [0, 1], 4: [2], 8: [3]}];
      const expected = 2;
      expect(hasGeometricProgression(...received)).toBe(expected);
    });
    test("Given 2, 2, {2: [0], 4: [1], 8: [2, 3]}; return 2.", () => {
      const received = [2, 2, {2: [0], 4: [1], 8: [2, 3]}];
      const expected = 2;
      expect(hasGeometricProgression(...received)).toBe(expected);
    });
    test("Given 2, 2, {2: [0, 1], 4: [2, 3], 8: [4, 5]}; return 8.", () => {
      const received = [2, 2, {2: [0, 1], 4: [2, 3], 8: [4, 5]}];
      const expected = 8;
      expect(hasGeometricProgression(...received)).toBe(expected);
    });
  });
});