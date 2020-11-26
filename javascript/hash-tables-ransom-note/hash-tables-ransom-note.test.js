const { checkMagazine, convertListToObject } = require("./hash-tables-ransom-note");

describe("Given a list of words in a magazine and words in a ransom note, "
  +"determine if the note could be written in words cut from the magazine. "
  +"Must be an exact match.\n",
() => {
  describe("checkMagazine\n", () => {
    process.stdout.write = jest.fn(toWrite => toWrite);
    test("1. Given magazine words and note words; return 'Yes.'", () => {
      const received = [
        "Attack at dawn".split(" "),
        "Attack at dawn".split(" ")
      ];
      const expected = "Yes";
      // process.stdout.write = jest.fn(toWrite => toWrite);
      expect(checkMagazine(...received)).toBe(expected);
    });
    test("2. Given magazine words and note words; return 'No.'", () => {
      const received = [
        "Attack at dawn".split(" "),
        "attack at dawn".split(" "),
      ];
      const expected = "No";
      // process.stdout.write = jest.fn(toWrite => toWrite);
      expect(checkMagazine(...received)).toBe(expected);
    });
    test("3. Given magazine words and note words; return 'Yes.'", () => {
      const received = [
        "give me one grand today night".split(" "),
        "give one grand today".split(" ")
      ];
      const expected = "Yes";
      // process.stdout.write = jest.fn(toWrite => toWrite);
      expect(checkMagazine(...received)).toBe(expected);
    });
    test("4. Given magazine words and note words; return 'No.'", () => {
      const received = [
        "two times three is not four".split(" "),
        "two times two is four".split(" ")
      ];
      const expected = "No";
      // process.stdout.write = jest.fn(toWrite => toWrite);
      expect(checkMagazine(...received)).toBe(expected);
    });
    test("5. Given magazine words and note words; return 'No.'", () => {
      const received = [
        "ive got a lovely bunch of coconuts".split(" "),
        "ive got some coconuts".split(" ")
      ];
      const expected = "No";
      // process.stdout.write = jest.fn(toWrite => toWrite);
      expect(checkMagazine(...received)).toBe(expected);
    });
    test("6. Given magazine words and note words; return 'Yes.'", () => {
      const received = [
        "one one one".split(" "),
        "one one one".split(" ")
      ];
      const expected = "Yes";
      // process.stdout.write = jest.fn(toWrite => toWrite);
      expect(checkMagazine(...received)).toBe(expected);
    });
    test("7. Given magazine words and note words; return 'No.'", () => {
      const received = [
        "one one".split(" "),
        "one one one".split(" ")
      ];
      const expected = "No";
      process.stdout.write = jest.fn(toWrite => toWrite);
      expect(checkMagazine(...received)).toBe(expected);
    });
  });
  describe("convertListToObject\n", () => {
    test("1. Given list of words, convert to keys in object.", () => {
      const received = "one two three four".split(" ");
      const expected = {
        "one": 1,
        "two": 1,
        "three": 1,
        "four": 1
      };
      expect(convertListToObject(received)).toStrictEqual(expected);
    });
    test("2. Given list of words, convert to keys in object.", () => {
      const received = "one two three four four four".split(" ");
      const expected = {
        "one": 1,
        "two": 1,
        "three": 1,
        "four": 3
      };
      expect(convertListToObject(received)).toStrictEqual(expected);
    });
  });
});