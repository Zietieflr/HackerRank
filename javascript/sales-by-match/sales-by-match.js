function sockMerchant(_sockCount, socks) {
  let unmatchedSocks = socks;
  let matches = 0;
  while (unmatchedSocks.length > 0) {
    const nextSock = unmatchedSocks.shift();
    for (let i=0; i<unmatchedSocks.length; i++) {
      if (nextSock === unmatchedSocks[i]) {
        matches++;
        unmatchedSocks.splice(i, 1);
        i = unmatchedSocks.length;
      }
    }
  }
  return matches; 
}

module.exports = {
  sockMerchant,
}