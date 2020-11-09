const { catAndMouse } = require("./cats-and-a-mouse");

describe("Given locations of two cats and a mouse, return which cat gets to "
  + "the mouse first or the mouse if they arrive at the same time.", 
() => {
  describe("catAndMouse", () => {
    test("Given 2, 5, 4; return 'Cat B'.", () => {
      const received = [2, 5, 4];
      const expected = "Cat B";
      expect(catAndMouse(...received)).toBe(expected)
    });
    test("Given 1, 2, 3; return 'Mouse C'.", () => {
      const received = [1, 3, 2];
      const expected = "Mouse C";
      expect(catAndMouse(...received)).toBe(expected)
    });
    test("Given 1, 3, 2; return 'Cat B'.", () => {
      const received = [1, 2, 3];
      const expected = "Cat B";
      expect(catAndMouse(...received)).toBe(expected)
    });
    test("Given 5, 45, 100; return 'Cat A'.", () => {
      const received = [5, 100, 45];
      const expected = "Cat A";
      expect(catAndMouse(...received)).toBe(expected)
    });
  });
});