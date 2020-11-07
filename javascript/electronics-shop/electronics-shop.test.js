const { getMoneySpent } = require("./electronics-shop");

describe("Given a list of keyboard prices, a list of drive prices, and a "
  + "budget return the cost of the most expensive and affordable combo. If "
  + "none of the combinations work return -1.", 
() => {
  describe("getMoneySpent", () => {
    test("Given [[40, 50, 60], [5, 8, 12], 60]; return 58.", () => {
      const received = [[40, 50, 60], [5, 8, 12], 60];
      const expected = 58;
      expect(getMoneySpent(...received)).toBe(expected);
    });
    test("Given [[3, 1], [5, 2, 8], 10]; return 9.", () => {
      const received = [[3, 1], [5, 2, 8], 10];
      const expected = 9;
      expect(getMoneySpent(...received)).toBe(expected);
    });
    test("Given [[4], [5], 5]; return -1.", () => {
      const received = [[4], [5], 5];
      const expected = -1;
      expect(getMoneySpent(...received)).toBe(expected);
    });
    test("Given [[3], [2], 5]; return 5.", () => {
      const received = [[3], [2], 5];
      const expected = 5;
      expect(getMoneySpent(...received)).toBe(expected);
    });
  });
});