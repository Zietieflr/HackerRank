function diagonalDifference(arr) {
  const rowColumnCount = arr.length
  let sumLeftRight = 0;
  let sumRightLeft = 0;
  for (let i = 0; i < rowColumnCount; i++) {
    sumLeftRight += arr[i][i];
    sumRightLeft += arr[i][(rowColumnCount-1)-i];
  }
  return Math.abs(sumLeftRight - sumRightLeft);
}
