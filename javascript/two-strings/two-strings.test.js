const { twoStrings } = require("./two-strings");

describe("Given two strings, see if there is any overlap between the two "
  +"strings and return YES or NO. Even one character.\n",
() => {
  describe("twoStrings\n", () => {
    test("Given a and a; return YES.", () => {
      const received = "a a".split(" ");
      const expected = "YES";
      expect(twoStrings(...received)).toBe(expected);
    });
    test("Given a and b; return NO.", () => {
      const received = "a b".split(" ");
      const expected = "NO";
      expect(twoStrings(...received)).toBe(expected);
    });
    test("Given hello and world; return YES.", () => {
      const received = "hello world".split(" ");
      const expected = "YES";
      expect(twoStrings(...received)).toBe(expected);
    });
    test("Given hi and world; return NO.", () => {
      const received = "hi world".split(" ");
      const expected = "NO";
      expect(twoStrings(...received)).toBe(expected);
    });
  });
});