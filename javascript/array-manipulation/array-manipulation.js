function arrayManipulation(length, queries) {
  // O(2n + queries.length)
  let baseZeroList = [];
  for (let i=0; i<length; i++) {
    baseZeroList[i] = 0;
  };
  queries.forEach(query => {
    const [start, end, modifier] = query;
    baseZeroList[start-1] += modifier;
    if (end<baseZeroList.length) {baseZeroList[end] -= modifier};
  });
  let max = baseZeroList[0];
  baseZeroList.reduce((sum, baseZeroElement) => {
    const tempSum = sum + baseZeroElement;
    if (tempSum > max) {max = tempSum};
    return tempSum;
  }, 0);
  return max;
}

module.exports = {
  arrayManipulation,
}