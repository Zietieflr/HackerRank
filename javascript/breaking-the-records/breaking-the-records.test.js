const { breakingRecords } = require("./breaking-the-records");

describe("Given array, return number of times records broken.", () => {
  describe("breakingRecords(scores)", () => {
    test("Given scores, give expected output to be [2, 4]", () => {
      const input = [
        10, 5, 20, 20, 4, 5, 2, 25, 1
      ];
      const expected = [2, 4];
      expect(breakingRecords(input)).toStrictEqual(expected);
    });
    test("Given scores, give expected output to be [4, 0]", () => {
      const input = [
        3, 4, 21, 36, 10, 28, 35, 5, 24, 42
      ];
      const expected = [4, 0];
      expect(breakingRecords(input)).toStrictEqual(expected);
    })
  });
});