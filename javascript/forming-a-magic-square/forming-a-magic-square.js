function formingMagicSquare(toBeSquare) {
  let smallestDifference = 100;
  magicSquares().forEach(magicSquare => {
    const difference = findDifferenceOfSquare(toBeSquare, magicSquare);
    if (difference < smallestDifference) {
      smallestDifference = difference;
    }
  });
  return smallestDifference;
}

function findDifferenceOfSquare(toBeSquare, magicSquare) {
  let sumOfDifference = 0;
  for (let i=0; i<3; i++) {
    for (let i2=0; i2<3; i2++) {
      sumOfDifference += Math.abs(toBeSquare[i][i2] - magicSquare[i][i2]);
    };
  };
  return sumOfDifference;
}

function magicSquares() {
  return [
    [
      [8, 1, 6],
      [3, 5, 7],
      [4, 9, 2]
    ],
    [
      [4, 3, 8],
      [9, 5, 1],
      [2, 7, 6]
    ],
    [
      [2, 9, 4],
      [7, 5, 3],
      [6, 1, 8]
    ],
    [
      [6, 7, 2],
      [1, 5, 9],
      [8, 3, 4]
    ],
    [
      [6, 1, 8],
      [7, 5, 3],
      [2, 9, 4]
    ],
    [
      [8, 3, 4],
      [1, 5, 9],
      [6, 7, 2]
    ],
    [
      [4, 9, 2],
      [3, 5, 7],
      [8, 1, 6]
    ],
    [
      [2, 7, 6],
      [9, 5, 1],
      [4, 3, 8]
    ]
  ]
}

module.exports = {
  formingMagicSquare, findDifferenceOfSquare,
}