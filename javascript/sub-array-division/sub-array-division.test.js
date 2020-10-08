const { birthday, validateEnoughSquares, initializeSubArraySum } = require("./sub-array-division");

describe("Given array of integers (in example these are chocolate squares), "
  + "return integer of the times a sub array meets criteria, "
  + "being number of elements in sub-array equal integer of month "
  + "and sum of those elements equal integer of days\n", 
  () => {
    describe("birthday, technically the day and month given", () => {
      test("Return 2, given [1, 2, 1, 3, 2], 3, 2.", () => {
        const argument = [[1, 2, 1, 3, 2], 3, 2];
        const expected = 2; 
        expect(birthday(...argument)).toBe(expected);
      });
      test("Return 0, given [1, 1, 1, 1, 1, 1], 3, 2.", () => {
        const argument = [[1, 1, 1, 1, 1, 1], 3, 2];
        const expected = 0; 
        expect(birthday(...argument)).toBe(expected);
      });
      test("Return 1, given [4], 4, 1.", () => {
        const argument = [[4], 4, 1];
        const expected = 1; 
        expect(birthday(...argument)).toBe(expected);
      });
    });
    describe("validateEnoughSquares", () => {
      test("Return true, given [1, 1, 1, 1, 1, 1], 2.", () => {
        const argument = [[1, 1, 1, 1, 1, 1], 2];
        const expected = true;
        expect(validateEnoughSquares(...argument)).toBe(expected);
      });
      test("Return false, given [1, 1], 3.", () => {
        const argument = [[1, 1], 3];
        const expected = false;
        expect(validateEnoughSquares(...argument)).toBe(expected);
      });
    });
    describe("initializeSubArraySum", () => {
      test("Return 20, given [10, 10, 10], 2", () => {
        const argument = [[10, 10, 10], 2];
        const expected = 20;
        expect(initializeSubArraySum(...argument)).toBe(expected);
      });
      test("Return , "
        +"given [31, 22, 2, 13, 16, 11, 7, 9, 24, 27, 1, 1, 5], 12",
        () => {
          const argument = [[31, 22, 2, 13, 16, 11, 7, 9, 24, 27, 1, 1, 5], 12];
          const expected = 164;
          expect(initializeSubArraySum(...argument)).toBe(expected);
        }
      );
      test("Return 13, given [13, 2], 1", () => {
        const argument = [[13, 2], 1];
        const expected = 13;
        expect(initializeSubArraySum(...argument)).toBe(expected);
      });
    });
  }
)