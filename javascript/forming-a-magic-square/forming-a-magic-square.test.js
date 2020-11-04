const { formingMagicSquare, findDifferenceOfSquare } = require("./forming-a-magic-square")

describe("Given an array of arrays, with all arrays containing three elements, "
  + "find the shortest route to converting the arrays into a magic square. "
  + "A magic square has the numbers 1-9, without repeating and all the numbers "
  + "in a row, column or diagonal add up to the same number.", 
() => {
  describe("formingMagicSquare", () => {
    test("Given [[4, 9, 2],[3, 5, 7],[8, 1, 5]], return 1.", () => {
      const received = [
        [4, 9, 2],
        [3, 5, 7],
        [8, 1, 5]
      ];
      const expected = 1;
      expect(formingMagicSquare(received)).toBe(expected);
    });
    test("Given [[4, 8, 2], [4, 5, 7], [6, 1, 6]], return 4.", () => {
      const received = [
        [4, 8, 2],
        [4, 5, 7],
        [6, 1, 6]
      ];
      const expected = 4;
      expect(formingMagicSquare(received)).toBe(expected);
    });
    test("Given [[7, 2, 7], [4, 4, 8], [5, 8, 1]], return 9.", () => {
      const received = [
        [7, 2, 7],
        [4, 4, 8],
        [5, 8, 1]
      ];
      const expected = 9;
      expect(formingMagicSquare(received)).toBe(expected);
    });
  });
  describe("findDifferenceOfSquare", () => {
    test("Given [[[8, 1, 6], [3, 5, 7], [4, 9, 2]], "
      + "[[8, 1, 6], [3, 5, 7], [4, 9, 2]]], "
      + "and return 0.", 
    () => {
      const received = [
        [
          [8, 1, 6],
          [3, 5, 7],
          [4, 9, 2]
        ],
        [
          [8, 1, 6],
          [3, 5, 7],
          [4, 9, 2]
        ]
      ];
      const expected = 0;
      expect(findDifferenceOfSquare(...received)).toBe(expected);
    });
    test("Given [[[9, 9, 9], [9, 9, 9], [9, 9, 9]], "
      + "[[8, 1, 6], [3, 5, 7], [4, 9, 2]]], "
      + "and return 36.", 
    () => {
      const received = [
        [
          [9, 9, 9],
          [9, 9, 9],
          [9, 9, 9]
        ],
        [
          [8, 1, 6],
          [3, 5, 7],
          [4, 9, 2]
        ]
      ];
      const expected = 36;
      expect(findDifferenceOfSquare(...received)).toBe(expected);
    });
    test("Given [[[1, 1, 1], [1, 1, 1], [1, 1, 1]], "
      + "[[8, 1, 6], [3, 5, 7], [4, 9, 2]]], "
      + "and return 36.", 
    () => {
      const received = [
        [
          [1, 1, 1],
          [1, 1, 1],
          [1, 1, 1]
        ],
        [
          [8, 1, 6],
          [3, 5, 7],
          [4, 9, 2]
        ]
      ];
      const expected = 36;
      expect(findDifferenceOfSquare(...received)).toBe(expected);
    });
  });
});
