function divisibleSumPairs(intCount, divisor, integers) {
  let count = 0;
  for (let i=0; i<intCount-1; i++) {
    let first = integers[i];
    for (let i2=i+1; i2<intCount; i2++) {
      let sum = first+integers[i2];
      if (sum%divisor === 0) {
        count++;
      };
    };
  };
  return count;
}

module.exports = {
  divisibleSumPairs,
}