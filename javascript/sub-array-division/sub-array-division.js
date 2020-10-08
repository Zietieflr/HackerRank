function birthday(integers, day, month) {
  if (validateEnoughSquares(integers, month)) {
    let count = 0;
    let subArraySum = initializeSubArraySum(integers, month);
    for (let i = month - 1; i < integers.length; i++) {
      if (subArraySum === day) {
        count++;
      }
      subArraySum -= integers[(i+1) - month];
      subArraySum += integers[i+1];
    }
    return count;
  } else {
    return 0;
  }
}

function validateEnoughSquares(integers, month) {
  return integers.length >= month;
}

function initializeSubArraySum(integers, month) {
  let sum = 0;
  for (let i = 0; i < month; i++) {
    sum += integers[i];
  }
  return sum;
}

module.exports = {
  birthday, validateEnoughSquares, initializeSubArraySum
}