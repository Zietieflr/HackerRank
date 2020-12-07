const { sherlockAndAnagrams, lettersIndex, isShallowObjectEqual } = require("./sherlockAndAnagrams");

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
  describe("isShallowObjectEqual", () => {
    test("Given two objects with different counts; return false.", () => {
      const received = [{z: 1, x: 1, q: 1, y: 1}, {z: 1, x: 1, y: 1}];
      const expected = false;
      expect(isShallowObjectEqual(...received)).toBe(expected);
    });
    test("Given two objects; return false.", () => {
      const received = [{z: 1, x: 1, q: 1, y: 1}, {z: 1, x: 1, q: 1, y: 2}];
      const expected = false;
      expect(isShallowObjectEqual(...received)).toBe(expected);
    });
    test("Given two objects; return true.", () => {
      const received = [{z: 1, x: 1, q: 1, y: 1}, {x: 1, z: 1, y: 1, q: 1}];
      const expected = true;
      expect(isShallowObjectEqual(...received)).toBe(expected);
    });
    test("Given two empty objects; return true.", () => {
      const received = [{}, {}];
      const expected = true;
      expect(isShallowObjectEqual(...received)).toBe(expected);
    });
  });
  describe("lettersIndex", () => {
    test("Given a; return [{a: [0]}, []]", () => {
      const received = "a";
      const expected = [{a: [0]}, []];
      expect(lettersIndex(received)).toStrictEqual(expected);
    });
    test("Given aa; return [{a: [0, 1]}, ['a']]", () => {
      const received = "aa";
      const expected = [{a: [0, 1]}, ["a"]];
      expect(lettersIndex(received)).toStrictEqual(expected);
    });
    test("Given aaaabcc; "
      +"return [{a: [0, 1, 2, 3], b: [4], c: [5, 6]}, ['a', 'c']]",
    () => {
      const received = "aaaabcc";
      const expected = [{a: [0, 1, 2, 3], b: [4], c: [5, 6]}, ["a", "c"]];
      expect(lettersIndex(received)).toStrictEqual(expected);
    });
  });
});
