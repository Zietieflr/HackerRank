const { minimumBribes } = require("./new-year-chaos");
const { largeTestCase } = require("./largeTestCases");

describe("Given a list of people assigned a number for their place in line, "
  + "return if the current list/line has become two chaotic, or the least "
  + "number of bribes which took place. A single person can only bribe "
  + "forward two times.\n",
() => {
  describe("minimumBribes\n", () => {
    test("Given 2, 1, 5, 3, 4; return 3.", () => {
      const received = [2, 1, 5, 3, 4];
      const expected = "3\n";
      process.stdout.write = jest.fn(value => value);
      expect(minimumBribes(received)).toBe(expected);
    });
    test("Given 2, 5, 1, 3, 4; return 'Too chaotic'.", () => {
      const received = [2, 5, 1, 3, 4];
      const expected = "Too chaotic\n";
      process.stdout.write = jest.fn(value => value);
      expect(minimumBribes(received)).toBe(expected);
    });
    test("Given 2, 3, 4, 5, 6, 7, 8, 9, 10, 1; return 9.", () => {
      const received = [2, 3, 4, 5, 6, 7, 8, 9, 10, 1];
      const expected = "9\n";
      process.stdout.write = jest.fn(value => value);
      expect(minimumBribes(received)).toBe(expected);
    });
    test("Given 3, 4, 5, 6, 7, 8, 9, 10, 2, 1; return 17.", () => {
      const received = [3, 4, 5, 6, 7, 8, 9, 10, 2, 1];
      const expected = "17\n";
      process.stdout.write = jest.fn(value => value);
      expect(minimumBribes(received)).toBe(expected);
    });
    test("Given 3, 4, 5, 7, 6, 8, 9, 10, 2, 1; return 'Too chaotic'.", () => {
      const received = [3, 4, 5, 7, 6, 8, 9, 10, 2, 1];
      const expected = "Too chaotic\n";
      process.stdout.write = jest.fn(value => value);
      expect(minimumBribes(received)).toBe(expected);
    });
    test("Given 2, 3, 1, 4, 6, 7, 5, 9, 8, 10; return 5.", () => {
      const received = [2, 3, 1, 4, 6, 7, 5, 9, 8, 10];
      const expected = "5\n";
      process.stdout.write = jest.fn(value => value);
      expect(minimumBribes(received)).toBe(expected);
    });
    test("Given 1, 4, 3, 2; return 3.", () => {
      const received = [1, 4, 3, 2];
      const expected = "3\n";
      process.stdout.write = jest.fn(value => value);
      expect(minimumBribes(received)).toBe(expected);
    });
    test("Given 1, 2, 5, 3, 7, 8, 6, 4; return 7.", () => {
      const received = [1, 2, 5, 3, 7, 8, 6, 4];
      const expected = "7\n";
      process.stdout.write = jest.fn(value => value);
      expect(minimumBribes(received)).toBe(expected);
    });
    test("Given 3, 4, 5, 1, 6, 7, 8, 9, 10, 11, 12, 13, 14, "
      +"15, 16, 17, 18, 2; return 7.",
    () => {
      const received = [3, 4, 5, 1, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 2];
      const expected = "19\n";
      process.stdout.write = jest.fn(value => value);
      expect(minimumBribes(received)).toBe(expected);
    });
    test("Given 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, "
      +"14, 15, 16, 17; return 1.",
    () => {
      const received = [1, 3, 2];
      const expected = "1\n";
      process.stdout.write = jest.fn(value => value);
      expect(minimumBribes(received)).toBe(expected);
    });
    test("Given largeTestCase(0); return 709.", () => {
      const received = largeTestCase(0);
      const expected = "709\n";
      process.stdout.write = jest.fn(value => value);
      expect(minimumBribes(received)).toBe(expected);
    });
    test("Given largeTestCase(1); return 'Too chaotic'.", () => {
      const received = largeTestCase(1);
      const expected = "Too chaotic\n";
      process.stdout.write = jest.fn(value => value);
      expect(minimumBribes(received)).toBe(expected);
    });
    test("Given largeTestCase(2); return 704.", () => {
      const received = largeTestCase(2);
      const expected = "704\n";
      process.stdout.write = jest.fn(value => value);
      expect(minimumBribes(received)).toBe(expected);
    });
    test("Given largeTestCase(3); return 'Too chaotic'.", () => {
      const received = largeTestCase(3);
      const expected = "Too chaotic\n";
      process.stdout.write = jest.fn(value => value);
      expect(minimumBribes(received)).toBe(expected);
    });
    test("Given largeTestCase(4); return 'Too chaotic'.", () => {
      const received = largeTestCase(4);
      const expected = "Too chaotic\n";
      process.stdout.write = jest.fn(value => value);
      expect(minimumBribes(received)).toBe(expected);
    });
    test("Given largeTestCase(5); return 'Too chaotic'.", () => {
      const received = largeTestCase(5);
      const expected = "Too chaotic\n";
      process.stdout.write = jest.fn(value => value);
      expect(minimumBribes(received)).toBe(expected);
    });
    test("Given largeTestCase(6); return 691.", () => {
      const received = largeTestCase(6);
      const expected = "691\n";
      process.stdout.write = jest.fn(value => value);
      expect(minimumBribes(received)).toBe(expected);
    });
    test("Given largeTestCase(7); return 731.", () => {
      const received = largeTestCase(7);
      const expected = "731\n";
      process.stdout.write = jest.fn(value => value);
      expect(minimumBribes(received)).toBe(expected);
    });
    test("Given largeTestCase(8); return 733.", () => {
      const received = largeTestCase(8);
      const expected = "733\n";
      process.stdout.write = jest.fn(value => value);
      expect(minimumBribes(received)).toBe(expected);
    });
    test("Given largeTestCase(9); return 'Too chaotic'.", () => {
      const received = largeTestCase(9);
      const expected = "Too chaotic\n";
      process.stdout.write = jest.fn(value => value);
      expect(minimumBribes(received)).toBe(expected);
    });
  });
});