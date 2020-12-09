const { 
  sherlockAndAnagrams,
  listSubstrings,
  countAnagrams,
  checkForAnagram,
  checkForDuplicateLetters
} = require("./sherlockAndAnagrams");

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
      // For some reason I thought I would be able to calculate this
      // when I made it. I was wrong, or at least not willing to take
      // that much time for me manually calculate it.
      const received = "qwertyewquioweqpaseqwdfgqwehjkqwe";
      const expected = 162;
      expect(sherlockAndAnagrams(received)).toBe(expected);
    });
  });
  describe("listSubstrings", () => {
    test("Given aa; return [a, aa, a]", () => {
      const received = "aa";
      const expected = ["a", "aa", "a"];
      expect(listSubstrings(received)).toEqual(expected);
    });
    test("Given aaaa; return [a, aa, aaa, aaaa, a, aa, aaa, a, aa, a]", () => {
      const received = "aaaa";
      const expected = [
        "a", "aa", "aaa", "aaaa", "a", "aa", "aaa", "a", "aa", "a"
      ];
      expect(listSubstrings(received)).toEqual(expected);
    });
  });
  describe("countAnagrams", () => {
    test("Given [a, aa, a]; return 1.", () => {
      const received = ["a", "aa", "a"];
      const expected = 1;
      expect(countAnagrams(received)).toBe(expected);
    });
    test("Given [a, aa, aaa, aaaa, a, aa, aaa, a, aa, a]; return 10.", () => {
      const received = [
        "a", "aa", "aaa", "aaaa", "a", "aa", "aaa", "a", "aa", "a"
      ];
      const expected = 10;
      expect(countAnagrams(received)).toBe(expected);
    });
  });
  describe("checkForAnagram", () => {
    test("Given a and a; return 1.", () => {
      const received = ["a", "a"];
      const expected = 1;
      expect(checkForAnagram(...received)).toBe(expected);
    });
    test("Given a and aa; return 0.", () => {
      const received = ["a", "aa"];
      const expected = 0;
      expect(checkForAnagram(...received)).toBe(expected);
    });
    test("Given qzerwohasldfjalsdhoihsle and qzerwohasldfjalsdhoihsle; "
      + "return 1.", 
    () => {
      const received = [
        "qzerwohasldfjalsdhoihsle", "qzerwohasldfjalsdhoihsle"
      ];
      const expected = 1;
      expect(checkForAnagram(...received)).toBe(expected);
    });
  });
  describe("checkForDuplicateLetters", () => {
    test("Given aa, return true.", () => {
      const received = "aa";
      const expected = true;
      expect(checkForDuplicateLetters(received)).toBe(expected);
    });
    test("Given ab, return false.", () => {
      const received = "ab";
      const expected = false;
      expect(checkForDuplicateLetters(received)).toBe(expected);
    });
  });
});
