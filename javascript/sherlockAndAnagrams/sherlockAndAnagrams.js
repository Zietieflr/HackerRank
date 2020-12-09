function sherlockAndAnagrams(string) {
  // 2 < string.length < 100, relatively small
  // Brute force by finding all possible substrings
    // Push all substrings into array
      // Iterate through each letter and, for each, all other letters after it
    // Compare all substrings
      // shift substring array then compare all against that one
      // Convert one into object, then iterate through other on made object
      // Check based off length of string before comparing
      // Recursion
        // if anagram 1, else 0
        // return count + checkForAnagram(array)
        // if array.length is 0, then return 0
  if (checkForDuplicateLetters(string)) {
    const allSubstrings = listSubstrings(string);
    return countAnagrams(allSubstrings);
  } else {
    return 0;
  }
}

function listSubstrings(string) {
  const substrings = [];
  for (let i=0; i<string.length; i++) {
    for (let i2=i+1; i2<=string.length; i2++) {
      substrings.push(string.slice(i, i2));
    };
  };
  return substrings;
}

function countAnagrams(substrings) {
  if (substrings.length === 0) {return 0};
  const substring1 = substrings.shift();
  const count = substrings.reduce((count, substring2) => {
    return count + checkForAnagram(substring1, substring2);
  }, 0);
  return count + countAnagrams(substrings);
}

function checkForAnagram(string1, string2) {
  if (string1.length !== string2.length) {return 0};
  const string1Object = {};
  for (let i=0; i<string1.length; i++) {
    if (string1Object[string1.charAt(i)]) {
      string1Object[string1.charAt(i)]++;
    } else {
      string1Object[string1.charAt(i)] = 1;
    };
  };
  for (let i=0; i<string2.length; i++) {
    if (string1Object[string2.charAt(i)]) {
      string1Object[string2.charAt(i)]--;
    } else {
      return 0;
    }
  }
  return 1;
}

function checkForDuplicateLetters(string) {
  const stringObject = {};
  for (let i=0; i<string.length; i++) {
    if (stringObject[string.charAt(i)]) {
      return true;
    } else {
      stringObject[string.charAt(i)] = 1;
    };
  };
  return false;
}

module.exports = {
  sherlockAndAnagrams,
  listSubstrings,
  countAnagrams,
  checkForAnagram,
  checkForDuplicateLetters
}