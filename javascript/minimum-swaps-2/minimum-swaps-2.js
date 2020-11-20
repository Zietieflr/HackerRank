function minimumSwaps(integers) {
  let trades = 0;
  let i = 0;
  while (i<integers.length) {
    if (integers[i] !== i+1) {
      while (integers[i] !== i+1) {
        let integerToSwap = integers[integers[i]-1];
        integers.splice(integers[i]-1, 1, integers[i]);
        integers.splice(i, 1, integerToSwap);
        trades++;
      }
    }
    i++;
  }
  return trades;
}

module.exports = {
  minimumSwaps,
}