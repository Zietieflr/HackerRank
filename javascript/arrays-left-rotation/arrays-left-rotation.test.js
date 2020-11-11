const { rotLeft } = require("./arrays-left-rotation");

describe("Given an array of integers and an integer less than or equal to " 
  + "the number of elements in the array, return the array rotated left by " 
  + "the integer given.\n",
() => {
  describe("rotLeft\n", () => {
    test("Given [1, 2, 3, 4, 5], 4; return [5, 1, 2, 3, 4].", () => {
      const received = [[1, 2, 3, 4, 5], 4];
      const expected = [5, 1, 2, 3, 4];
      expect(rotLeft(...received)).toStrictEqual(expected);
    });
    test("Given [1], 1; return [1].", () => {
      const received = [[1], 1];
      const expected = [1];
      expect(rotLeft(...received)).toStrictEqual(expected);
    });
    test("Given [99, 33, 50000, 60324, 213, 45], 6; return [99, 33, 50000, 60324, 213, 45].", () => {
      const received = [[99, 33, 50000, 60324, 213, 45], 6];
      const expected = [99, 33, 50000, 60324, 213, 45];
      expect(rotLeft(...received)).toStrictEqual(expected);
    });
    test("Given [56, 49, 2145789, 3542562, 46323, 95421], 3; return [3542562, 46323, 95421, 56, 49, 2145789].", () => {
      const received = [[56, 49, 2145789, 3542562, 46323, 95421], 3];
      const expected = [3542562, 46323, 95421, 56, 49, 2145789];
      expect(rotLeft(...received)).toStrictEqual(expected);
    });
  });
});