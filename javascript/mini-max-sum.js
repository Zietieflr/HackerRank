function miniMaxSum(arr) {
  const sortedArr = arr.sort();
  const sums = sortedArr.reduce((sums, number, i) => {
      if (i === 0) {
          sums[0] += number;
      } else if (i === 4) {
          sums[1] += number;
      } else {
          sums[0] += number;
          sums[1] += number;
      }
      return sums
  }, [0, 0]);
  process.stdout.write(`${sums[0]} ${sums[1]}`)
}