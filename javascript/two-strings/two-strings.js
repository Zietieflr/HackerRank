function twoStrings(string1, string2) {
  // O(n + m)
  let string1LookUp = {};
  for (let i=0; i<string1.length; i++) {
    let tempChar = string1.charAt(i);
    if (!string1LookUp[tempChar]) {string1LookUp[tempChar] = 1};
  };
  for (let i=0; i<string2.length; i++) {
    if (string1LookUp[string2.charAt(i)]) {return "YES"};
  };
  return "NO";
};

module.exports = {
  twoStrings,
}