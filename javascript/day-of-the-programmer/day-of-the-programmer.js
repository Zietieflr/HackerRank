function dayOfProgrammer(year) {
  const leapYear = isLeapYear(year);
  if (year === 1918) {
    return "26.09.1918";
  } else {
    return isLeapYear(year) ? `12.09.${year}` : `13.09.${year}`;
  }
}

function isLeapYear(year) {
  if (year < 1918) {
    return !(year%4 > 0);
  } else {
    return year%400 === 0 || year%4 === 0 && year%100 > 0;
  }
}

module.exports = {
  dayOfProgrammer, isLeapYear
}