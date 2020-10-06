const { kangaroo } = require("./number-line-jumps");

describe("Can two kangaroos start in two places and finish in the same place in x jumps?", () => {
  describe("kangaroo, given start and jump length of two kangaroos.", () => {
    test("1. Given locations, output YES", () => {
      const argument = [0, 3, 4, 2];
      const expected = "YES";
      expect(kangaroo(...argument)).toBe(expected);
    });
    test("2. Given locations, output NO", () => {
      const argument = [0, 2, 5, 3];
      const expected = "NO";
      expect(kangaroo(...argument)).toBe(expected);
    });
    test("3. Given locations, output NO", () => {
      const argument = [0, 10, 5, 3];
      const expected = "NO";
      expect(kangaroo(...argument)).toBe(expected);
    });
    test("4. Given locations, output YES", () => {
      const argument = [0, 2, 10, 1];
      const expected = "YES";
      expect(kangaroo(...argument)).toBe(expected);
    });
  })
})