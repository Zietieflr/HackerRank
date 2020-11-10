function hourglassSum(array) {
  let highestSum = -64;
  // highest level array, initial row
  for (let i=0; i<4; i++) {
    // initial index in initial row
    for (let i2=0; i2<4; i2++) {
      let sum = 0;
      // subset of horizontal row
      for (let i3=i2; i3<i2+3; i3++) {
        sum += array[i][i3] + array[i+2][i3];
      };
      sum += array[i+1][i2+1];
      if (sum > highestSum) {highestSum = sum};
    };
  };
  return highestSum;
}

module.exports = {
  hourglassSum,
}