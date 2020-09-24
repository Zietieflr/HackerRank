function plusMinus(arr) {
  const tallies = tallyElementType(arr);
  tallies.forEach(tally => {
      process.stdout.write(`${(tally/arr.length).toFixed(6)}\n`)
  })
}

function tallyElementType(arr) {
  return arr.reduce((tallies, element) => {
      if (element > 0) {
          tallies[0] += 1;
      } else if (element < 0) {
          tallies[1] += 1;
      } else {
          tallies[2] += 1;
      }
      return tallies
  }, [0, 0, 0]);
}
