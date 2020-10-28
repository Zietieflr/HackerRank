const { migratoryBirds } = require("./migratory-birds");

describe("Given array of bird species (number representation), return the "
  + "value association seen the most with the smallest representative number.",
() => {
  describe("migratoryBirds", () => {
    test("Given [1, 1, 2, 2, 3], return '1'", () => {
      const received = [1, 1, 2, 2, 3];
      const expected = "1";
      expect(migratoryBirds(received)).toBe(expected);
    });
    test("Given [1, 4, 4, 4, 5, 3], return '1'", () => {
      const received = [1, 4, 4, 4, 5, 3];
      const expected = "4";
      expect(migratoryBirds(received)).toBe(expected);
    });
    test("Given [1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4], return '1'", () => {
      const received = [1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4];
      const expected = "3";
      expect(migratoryBirds(received)).toBe(expected);
    });
  });
});