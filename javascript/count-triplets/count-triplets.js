function countTriplets(integers, ratio) {
  // Iterate through all integers
    // Convert into object
      // Store indexes in list at key of number
  // Take object and iterate through all keys
    // Divide current key by ratio and multiply by ratio
    // Look up the new numbers in the object
      // If found, compare indexes
        // If divide, then indexes must be lower
        // If multiply, then indexes must be higher
          // Count all for which this is true (lower and higher)
          // Compare the tally of lower and higher
            // Add to count the least of the two numbers
  return 0;
}

module.exports = {
  countTriplets,
}