const { sockMerchant } = require("./sales-by-match");

describe("Return the number of possible sock matches, given an array of unmatched socks.", () => {
  describe("sockMerchant", () => {
    test("Given 7, [1, 2, 1, 2, 1, 3, 2], return 2.", () => {
      const received = [7, [1, 2, 1, 2, 1, 3, 2]];
      const expected = 2;
      expect(sockMerchant(...received)).toBe(expected);
    });
    test("Given 9, [10, 20, 20, 10, 10, 30, 50, 10, 20], return 2.", () => {
      const received = [7, [1, 2, 1, 2, 1, 3, 2]];
      const expected = 2;
      expect(sockMerchant(...received)).toBe(expected);
    });
    test("Given 7, [33, 13, 9, 30, 31, 20, 23], return 2.", () => {
      const received = [7, [33, 13, 9, 30, 31, 20, 23]];
      const expected = 0;
      expect(sockMerchant(...received)).toBe(expected);
    });
    test("Given 9, [33, 33, 33, 33, 33, 33, 33, 33, 33], return 2.", () => {
      const received = [9, [33, 33, 33, 33, 33, 33, 33, 33, 33]];
      const expected = 4;
      expect(sockMerchant(...received)).toBe(expected);
    });
  });
});