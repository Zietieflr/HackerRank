const { pageCount } = require("./drawing-book");

describe("Given a number of pages and the page to turn to, return the least "
  + "number of page turns starting from either the front or the back.", 
() => {
  describe("pageCount", () => {
    test("Given 6, 2; return 1.", () => {
      const received = [6, 2];
      const expected = 1;
      expect(pageCount(...received)).toBe(expected);
    });
    test("Given 5, 3; return 1.", () => {
      const received = [5, 3];
      const expected = 1;
      expect(pageCount(...received)).toBe(expected);
    });
    test("Given 5, 4; return 0.", () => {
      const received = [5, 4];
      const expected = 0;
      expect(pageCount(...received)).toBe(expected);
    });
    test("Given 39, 12; return 6.", () => {
      const received = [39, 12];
      const expected = 6;
      expect(pageCount(...received)).toBe(expected);
    });
    test("Given 39, 34; return 2.", () => {
      const received = [39, 34];
      const expected = 2;
      expect(pageCount(...received)).toBe(expected);
    });
    test("Given 39, 21; return 9.", () => {
      const received = [39, 21];
      const expected = 9;
      expect(pageCount(...received)).toBe(expected);
    });
    test("Given 50, 1; return 0.", () => {
      const received = [50, 1];
      const expected = 0;
      expect(pageCount(...received)).toBe(expected);
    });
    test("Given 50, 45; return 0.", () => {
      const received = [50, 45];
      const expected = 3;
      expect(pageCount(...received)).toBe(expected);
    });
    test("Given 6, 5; return 1.", () => {
      const received = [6, 5];
      const expected = 1;
      expect(pageCount(...received)).toBe(expected);
    });
    test("Given 9, 8; return 0.", () => {
      const received = [9, 8];
      const expected = 0;
      expect(pageCount(...received)).toBe(expected);
    });
    test("Given 2, 1; return 0.", () => {
      const received = [2, 1];
      const expected = 0;
      expect(pageCount(...received)).toBe(expected);
    });
  });
});