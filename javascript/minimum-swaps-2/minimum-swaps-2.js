function minimumSwaps(integers) {
  let trades = 0;
  let i = 0;
  while (i<integers.length) {
    if (integers[i] !== i+1) {
      while (integers[i] !== i+1) {
        // trade integers[i] to where integers[i] === i+1
        // put the traded value at i in integers
          // this will repeat until integers[i] === i+1
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