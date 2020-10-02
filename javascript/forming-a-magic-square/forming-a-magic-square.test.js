const { formingMagicSquare, convertToMagicSquare } = require("./forming-a-magic-square")

describe("formingMagicSquare", () => {
  test.skip("Input to equal 1.", () => {
    const input = [
      [4, 9, 2],
      [3, 5, 7],
      [8, 1, 5]
    ];
    const output = 1;
    expect(formingMagicSquare(input)).toBe(output);
  });
  test.skip("Input to equal 4.", () => {
    const input = [
      [4, 8, 2],
      [4, 5, 7],
      [6, 1, 6]
    ];
    const output = 4;
    expect(formingMagicSquare(input)).toBe(output);
  });
});

describe("convertToMagicSquare", () => {
  test("Input to magic square 1.", () => {
    const input = [
      [9, 9, 9],
      [9, 9, 9],
      [9, 9, 9]
    ];
    const output = [
      [9, 9, 9],
      [9, 9, 9],
      [9, 9, 9]
    ];
    expect(convertToMagicSquare(input)).toStrictEqual(output);
  });
  test("Input to magic square 2.", () => {
    const input = [
      [8, 3, 4],
      [1, 5, 9],
      [6, 7, 2]
    ];
    const output = [
      [8, 3, 4],
      [1, 5, 9],
      [6, 7, 2]
    ];
    expect(convertToMagicSquare(input)).toStrictEqual(output);
  });
  test.skip("Input to magic square 3.", () => {
    const input = [
      [5, 3, 4],
      [1, 5, 8],
      [6, 4, 2]
    ];
    const output = [
      [8, 3, 4],
      [1, 5, 9],
      [6, 7, 2]
    ];
    expect(convertToMagicSquare(input)).toStrictEqual(output);
  });
});
