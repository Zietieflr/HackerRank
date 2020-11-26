function checkMagazine(magazineWords, noteWords) {
  // Given the two lists determine if all strings from noteWords exist in magazineWords
    // Must be exact match
    // Return "Yes" or "No" if all exist or not
    // Ensure duplicates in noteWords are duplicated in magazineWords
  // Convert to object to not need to iterate through every time
    // Add word as key, add count as value
    // If undefined or 0, does not exist
  let possible = "No";
  return process.stdout.write(possible);
}

function convertListToObject(elements) {
  return elements;
}

module.exports = {
  checkMagazine, convertListToObject
}