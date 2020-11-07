function getMoneySpent(keyboards, drives, budget) {
  let largestCombination = -1;
  for (let i=0; i<keyboards.length; i++) {
    for (let i2=0; i2<drives.length; i2++) {
      const combination = keyboards[i]+drives[i2];
      if (combination<=budget && combination>largestCombination) {
        largestCombination = combination;
      };
    };
  };
  return largestCombination;
}

module.exports = {
  getMoneySpent,
}