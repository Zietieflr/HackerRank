function arrayManipulation(length, queries) {
  // Brute force solution
  // O(n*(queries.length+1))
  let baseZeroList = [];
  let max = 0;
  for (let i=0; i<=length; i++) {
    baseZeroList[i] = 0;
  }
  queries.forEach(query => {
    let addend = query[2];
    for (let i=query[0]; i<=query[1]; i++) {
      baseZeroList[i] += addend;
      if (baseZeroList[i] > max) {max = baseZeroList[i]};
    }
  })
  return max;
}

module.exports = {
  arrayManipulation,
}