// array has 1 <= elements <= 100
// integer for day of month 1 <= day <= 31
// integer for month of year 1 <= month <= 12
//   receive all as arguments 

// number of elements used === month
// sum of elements === day
// maintain array element order
// return the number of times elements can be used in this way.

const { birthdays } = require("./sub-array-division");

describe("Given array of integers, " 
  + "return integer of the times a sub array meets criteria, "
  + "being number of elements in array equal integer of month "
  + "and sum of those elements equal days in month", 
  () => {
    describe("birthdays (technically the day and month given)", () => {
      test("Return 2, given [1, 2, 1, 3, 2], 3, 2.", () => {
        const argument = [[1, 2, 1, 3, 2], 3, 2];
        const expected = 2; 
        expect(birthdays(...argument)).toBe(expected);
      });
    });
  }
)