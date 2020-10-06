const { countApplesAndOranges, countFruitOnHouse } = require("./apple-and-orange")

describe("Receive information about trees and fruit, write fruit on house", () => {
  describe("Given arguments, return string with newline counting fruit", () => {
    // arguments
      // start of house
      // end of house
      // apple tree
      // orange tree
      // array of distance apples fell from tree
      // array of distance oranges fell from tree
    test("countApplesAndOranges => Test1", () => {
      const argument = [7, 10, 4, 12, [2, 3, -4], [3, -2, -4]];
      const expected = "1\n2";
      expect(countApplesAndOranges(...argument)).toStrictEqual(expected);
    });
    test("countApplesAndOranges => Test2", () => {
      const argument = [7, 11, 5, 15, [-2, 2, 1], [5, -6]];
      const expected = "1\n1";
      expect(countApplesAndOranges(...argument)).toStrictEqual(expected);
    });
  });
  describe("Given trees, house and fruit array, return fruit on house", () => {
    test("countFruitOnHouse => Test1", () => {
      const argument = [7, 10, 4, [2, 3, -4]];
      const expected = 1;
      expect(countFruitOnHouse(...argument)).toBe(expected);
    });
    test("countFruitOnHouse => Test2", () => {
      const argument = [7, 10, 12, [3, -2, -4]];
      const expected = 2;
      expect(countFruitOnHouse(...argument)).toBe(expected);
    });
  })
})