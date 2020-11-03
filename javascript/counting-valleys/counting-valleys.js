function countingValleys(_steps, path) {
  const pathCalculator = {
    D: -1,
    U: 1,
  };
  let previouslyValley = false;
  let elevation = 0;
  let valleyCount = 0;

  for (let i=0; i<path.length; i++) {
    elevation += pathCalculator[path[i]];
    if (elevation < 0 && !previouslyValley) {
      valleyCount++;
      previouslyValley = true; 
    } else if (elevation === 0) {
      previouslyValley = false;
    }
  }

  return valleyCount;
}

module.exports = {
  countingValleys
}