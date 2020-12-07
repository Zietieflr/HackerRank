function sherlockAndAnagrams(string) {
  // 2 < string.length < 100, relatively small
  // Count letters and store indexes, if 2+ store letter to compare
  // From two matching letter indexes
    // add a letter to an object going toward the other index
      // therefore have two objects
      // compare all object VALUES at each iteration
        // ^^ pivotal step for this idea to work
      // if both objects are equal based off values anagramsCount++
    // iterate for all letters that match (including if there are 3+ copies of a letter)
  // return anagramsCount
  
  let anagramsCount = 0;
  const [ letterIndexes, repeatedLetters ] = lettersIndex(string);
  if (repeatedLetters.length === 0) {return 0};
  for (let letter of repeatedLetters) {
    const indexList = letterIndexes[letter];
    for (let i=0; i<indexList.length; i++) {
      for (let i2=i+1; i2<indexList.length; i2++) {
        const upLetters = {};
        const downLetters = {};
        const upIndex = indexList[i];
        const downIndex = indexList[i2];
        for (let i3=0; i3<downIndex-upIndex; i3++) {
          const upLetter = string.charAt(upIndex+i3);
          const downLetter = string.charAt(downIndex-i3);
          if (!upLetters[upLetter]) {
            upLetters[upLetter] = 1;
          } else {
            upLetters[upLetter]++;
          }
          if (!downLetters[downLetter]) {
            downLetters[downLetter] = 1;
          } else {
            downLetters[downLetter]++;
          }
          if (isShallowObjectEqual(upLetters, downLetters)) {
            anagramsCount++;
          }
        }
      };
    };
  };
  return anagramsCount;
}

function lettersIndex(string) {
  const letterIndexes = {};
  const repeatedLetters = [];
  for (let i=0; i<string.length; i++) {
    let letter = string.charAt(i);
    if (!letterIndexes[letter]) {
      letterIndexes[letter] = [i];
    } else {
      letterIndexes[letter].push(i);
    };
    if (letterIndexes[letter].length === 2) {repeatedLetters.push(letter)};
  }
  return [letterIndexes, repeatedLetters];
}

function isShallowObjectEqual(object1, object2) {
  const firstKeys = Object.keys(object1); 
  const secondKeys = Object.keys(object2);
  if (firstKeys.length !== secondKeys.length) {return false};
  for (let key of firstKeys) {
    if(object1[key] !== object2[key]) {return false};
  }
  return true;
}

module.exports = {
  sherlockAndAnagrams, lettersIndex, isShallowObjectEqual
}