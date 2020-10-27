const { bonAppetit } = require("./bill-division");

describe("Receive a list of ordered item costs, an index of an item not eaten, "
  + "and the the split bill. Return 'Bon Appetit' if correct, or the " 
  + "difference if split incorrectly.",
() => {
  describe("bonAppetit", () => {
    test("Given [3, 10, 2, 9], 1, 12; return 5", () => {
      const received = [[3, 10, 2, 9], 1, 12];
      const expected = "5";
      expect(bonAppetit(...received)).toBe(expected);
    });
    test("Given [3, 10, 2, 9], 1, 7; return 'Bon Appetit'", () => {
      const received = [[3, 10, 2, 9], 1, 7];
      const expected = "Bon Appetit";
      expect(bonAppetit(...received)).toBe(expected);
    });
    test("Given [14, 16], 0, 15; return 7", () => {
      const received = [[14, 16], 0, 15];
      const expected = "7";
      expect(bonAppetit(...received)).toBe(expected);
    });
    test("Given [14, 16], 0, 8; return 'Bon Appetit'", () => {
      const received = [[10, 16], 0, 8];
      const expected = "Bon Appetit";
      expect(bonAppetit(...received)).toBe(expected);
    });
    test("Given [12, 13, 14, 10, 223, 10034, 39, 22, 555], 5, 5461; return 5017", () => {
      const received = [[12, 13, 14, 10, 223, 10034, 39, 22, 555], 5, 5461];
      const expected = "5017";
      expect(bonAppetit(...received)).toBe(expected);
    });
    test("Given [12, 13, 14, 10, 223, 10034, 39, 22, 555], 5, 444; return 'Bon Appetit'", () => {
      const received = [[12, 13, 14, 10, 223, 10034, 39, 22, 555], 5, 444];
      const expected = "Bon Appetit";
      expect(bonAppetit(...received)).toBe(expected);
    });
  });
});