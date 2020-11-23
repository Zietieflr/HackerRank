const { arrayManipulation } = require("./array-manipulation");

describe("Given a count of elements, all of which start zero, and a list of "
  +"queries which specify a lower index, higher index, and an amount to add "
  +"to those inclusive indexes, return the sum of the largest element(s) "
  +"after the queries have been completed. Indexes start at 1.\n",
() => {
  describe("arrayManipulation\n", () => {
    test("Given 3, [[1, 3, 0], [1, 3, 0], [1, 3, 0]]; return 0.", () => {
      const received = [3, [[1, 3, 0], [1, 3, 0], [1, 3, 0]]];
      const expected = 0;
      expect(arrayManipulation(...received)).toBe(expected);
    });
    test("Given 3, [[1, 3, 1], [1, 3, 1], [1, 3, 1]]; return 3.", () => {
      const received = [3, [[1, 3, 1], [1, 3, 1], [1, 3, 1]]];
      const expected = 3;
      expect(arrayManipulation(...received)).toBe(expected);
    });
    test("Given 3, [[1, 3, 0], [1, 3, 0], [3, 3, 5]]; return 5.", () => {
      const received = [3, [[1, 3, 0], [1, 3, 0], [3, 3, 5]]];
      const expected = 5;
      expect(arrayManipulation(...received)).toBe(expected);
    });
    test("Given 10, [[1, 5, 3], [4, 8, 7], [6, 9, 1]]; return 10.", () => {
      const received = [10, [[1, 5, 3], [4, 8, 7], [6, 9, 1]]];
      const expected = 10;
      expect(arrayManipulation(...received)).toBe(expected);
    });
    test("Given 5, [[1, 2, 100], [2, 5, 100], [3, 4, 100]]; return 200.", () => {
      const received = [5, [[1, 2, 100], [2, 5, 100], [3, 4, 100]]];
      const expected = 200;
      expect(arrayManipulation(...received)).toBe(expected);
    });
  });
});