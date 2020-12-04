const { sherlockAndAnagrams } = require("./sherlockAndAnagrams");

describe("Given a string return the number of substrings that are anagrams "
  +"to each other.",
() => {
  describe("sherlockAndAnagrams", () => {
    test("Given aa; return 1.", () => {
      const received = "aa";
      const expected = 1;
      expect(sherlockAndAnagrams(received)).toBe(expected);
    });
    test("Given ab; return 0.", () => {
      const received = "ab";
      const expected = 0;
      expect(sherlockAndAnagrams(received)).toBe(expected);
    });
    test("Given mom; return 2.", () => {
      const received = "mom";
      const expected = 2;
      expect(sherlockAndAnagrams(received)).toBe(expected);
    });
    test("Given abba; return 4.", () => {
      const received = "abba";
      const expected = 4;
      expect(sherlockAndAnagrams(received)).toBe(expected);
    });
    test("Given abcd; return 0.", () => {
      const received = "abcd";
      const expected = 0;
      expect(sherlockAndAnagrams(received)).toBe(expected);
    });
    test("Given ifailuhkqq; return 3.", () => {
      const received = "ifailuhkqq";
      const expected = 3;
      expect(sherlockAndAnagrams(received)).toBe(expected);
    });
    test("Given kkkk; return 10.", () => {
      const received = "kkkk";
      const expected = 10;
      expect(sherlockAndAnagrams(received)).toBe(expected);
    });
    test("Given cdcd; return 5.", () => {
      const received = "cdcd";
      const expected = 5;
      expect(sherlockAndAnagrams(received)).toBe(expected);
    });
    test("Given qwertyewquioweqpaseqwdfgqwehjkqwe; return ?.", () => {
      const received = "qwertyewquioweqpaseqwdfgqwehjkqwe";
      const expected = 0;
      expect(sherlockAndAnagrams(received)).toBe(expected);
    });
  });
});
