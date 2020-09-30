function matchingStrings(strings, queries) {
  let queryMatches = [];
  searchStrings(strings, queries, queryMatches);
  return queryMatches;
}

function searchStrings(strings, queries, queryMatches) {
  const query = queries.shift();
  const unmatchedStrings = strings.filter(string => string != query);
  queryMatches.push(strings.length - unmatchedStrings.length);
  if (queries.length > 0) {
      searchStrings(strings, queries, queryMatches);
  }  
}
