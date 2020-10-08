function getTotalX(a, b) {
  const sortedA = sortArray(a);
  const sortedB = sortArray(b);
  const lowestCD = findLowestCommonDenominator(sortedA);
  const factors = lowestCD ? findFactors(lowestCD, sortedB.shift()) : 0;
  return factors ? checkFactors(factors, sortedB).length : 0;
}

function findLowestCommonDenominator(sortedArray) {
  const incrementLCD = sortedArray[0];
  return sortedArray.reduce((lowestCD, integer) => {
    while (lowestCD%integer !== 0 && lowestCD <= 100) {
      lowestCD += incrementLCD;
    }
    return lowestCD <= 100 ? lowestCD : 0;
  })
}

function sortArray(array) {
  return array.sort((a, b) => b - a );
}

function findFactors(lowestCommonDenominator, largestInteger) {
  let factors = [];
  if (largestInteger%lowestCommonDenominator === 0) {
    let multiplesOfLCD = lowestCommonDenominator;
    while (multiplesOfLCD <= largestInteger) {
      if (largestInteger%multiplesOfLCD === 0) {
        factors.push(multiplesOfLCD);
      }
      multiplesOfLCD += lowestCommonDenominator;
    }
  } else {
    return factors;
  }
  return factors; 
}

function checkFactors(factors, integers) {
  return factors.filter(factor => evenlyDivides(factor, integers));
}

function evenlyDivides(factor, integers) {
  for (let i = 0; i<integers.length; i++) {
    if (integers[i]%factor !== 0) {
      return false;
    }
  }
  return true; 
}

module.exports = {
  getTotalX, sortArray, findFactors, checkFactors, evenlyDivides, findLowestCommonDenominator
}