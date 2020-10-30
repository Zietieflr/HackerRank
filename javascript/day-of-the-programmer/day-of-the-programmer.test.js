const { dayOfProgrammer, isLeapYear, } = require("./day-of-the-programmer");

describe("Given a year, return the 256th day, aka Day of the Programmer, for " 
  + "the Russian calendar. Range includes the Julian and Gregorian calendar "
  + "systems.",
() => {
  describe("dayOfProgrammer", () => {
    test("Given 2017, return 13.09.2017.", () => {
      const received = 2017;
      const expected = "13.09.2017";
      expect(dayOfProgrammer(received)).toBe(expected);
    });
    test("Given 2016, return 12.09.2016.", () => {
      const received = 2017;
      const expected = "13.09.2017";
      expect(dayOfProgrammer(received)).toBe(expected);
    });
    test("Given 1800, return 12.09.1800.", () => {
      const received = 2017;
      const expected = "13.09.2017";
      expect(dayOfProgrammer(received)).toBe(expected);
    });
    test("Given 1918, return 26.09.1918.", () => {
      const received = 1918;
      const expected = "26.09.1918";
      expect(dayOfProgrammer(received)).toBe(expected);
    });
  });
  describe("isLeapYear", () => {
    test("Given 2017, return false.", () => {
      const received = 2017;
      const expected = false;
      expect(isLeapYear(received)).toBe(expected);
    });
    test("Given 2016, return true.", () => {
      const received = 2016;
      const expected = true;
      expect(isLeapYear(received)).toBe(expected);
    });
    test("Given 2600, return false.", () => {
      const received = 2017;
      const expected = false;
      expect(isLeapYear(received)).toBe(expected);
    });
    test("Given 1700, return true.", () => {
      const received = 1700;
      const expected = true;
      expect(isLeapYear(received)).toBe(expected);
    });
    test("Given 1853, return true.", () => {
      const received = 1853;
      const expected = false;
      expect(isLeapYear(received)).toBe(expected);
    });
    test("Given 2000, return true.", () => {
      const received = 2000;
      const expected = true;
      expect(isLeapYear(received)).toBe(expected);
    });
  })
});