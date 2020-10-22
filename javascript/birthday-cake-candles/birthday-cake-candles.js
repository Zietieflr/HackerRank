//receive array of candle sizes
// only the tallest ones will be blown out
//  tallest are all equal height
//return count of the tallest

function birthdayCakeCandles(candles) {
  let count = 1;
  let highest = candles[0];
  for (let i=1; i<candles.length; i++) {
    if (candles[i] === highest) {
      count++;
    } else if (candles[i] > highest) {
      highest = candles[i];
      count = 1;
    }
  }
  return count;
}

module.exports = {
  birthdayCakeCandles,
}