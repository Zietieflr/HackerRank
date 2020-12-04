function sherlockAndAnagrams(string) {
  // 2 < string.length < 100, relatively small
  // Count letters and store indexes, if 2+ store letter to compare
  // From two matching letter indexes
    // add a letter to an object going toward the other index
      // therefore have two objects
      // compare all object VALUES at each iteration
        // ^^ pivotal step for this idea to work
      // if both objects are equal based off values anagrams++
    // iterate for all letters that match (including if there are 3+ copies of a letter)
  // return anagrams
}

module.exports = {
  sherlockAndAnagrams,
}