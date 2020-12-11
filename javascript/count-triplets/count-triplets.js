function countTriplets(integers, ratio) {
  // Iterate through all integers
    // Convert into object
      // Store indexes in list at key of number
  // Take object and iterate through all keys
    // Divide current key by ratio and multiply by ratio
    // Look up the new numbers in the object
      // If found, compare indexes
        // If divide, then indexes must be lower
        // If multiply, then indexes must be higher
          // Count all for which this is true (lower and higher)
          // Compare the tally of lower and higher
            // Add to count the least of the two numbers
  const integersLookUp = convertToListLookUp(integers);
  let count = 0;
  for (const key in integersLookUp) {
    count += hasGeometricProgression(key, ratio, integersLookUp);
  }
  return count;
}

function convertToListLookUp(array) {
  const lookUp = {};
  array.forEach((element, index) => {
    lookUp[element] ? lookUp[element].push(index) : lookUp[element] = [index];
  });
  return lookUp;
}

function hasGeometricProgression(lowerInt, ratio, lookUpTable) {
  const lowerIntIndexes = lookUpTable[lowerInt];
  const middleIntIndexes = lookUpTable[lowerInt*ratio];
  const upperIntIndexes = lookUpTable[lowerInt*ratio**2];
  let count = 0;
  if (!middleIntIndexes || !upperIntIndexes) {
    return count;
  } else {
    // for (let i=0; i<lowerIntIndexes.length; i++) {
    //   const lowerIndex = lowerIntIndexes[i];
    //   for (let i2=0; i2<middleIntIndexes.length; i2++) {
    //     const middleIndex = middleIntIndexes[i2];
    //     if (lowerIndex < middleIndex) {
    //       for (let i3=0; i3<upperIntIndexes.length; i3++) {
    //         const upperIndex = upperIntIndexes[i3];
    //         count += middleIndex < upperIndex ? 1 : 0;
    //       }
    //     }
    //   }
    // }
    lowerIntIndexes.forEach(lowerIndex => {
      middleIntIndexes.forEach(middleIndex => {
        if (lowerIndex < middleIndex) {
          upperIntIndexes.forEach(upperIndex => {
            count += middleIndex < upperIndex ? 1 : 0;
          })
        }
      })
    })
    return count;
  }
}

module.exports = {
  countTriplets, convertToListLookUp, hasGeometricProgression
}