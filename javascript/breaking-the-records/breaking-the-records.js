function breakingRecords(scores) {
  const initialScore = scores[0];
  let highScore = initialScore;
  let lowScore = initialScore;
  return scores.reduce((count, score) => {
    if (score > highScore) {
      count[0]++;
      highScore = score;
    } else if (score < lowScore) {
      count[1]++;
      lowScore = score; 
    }
    return count
  }, [0, 0])
}

module.exports = {
  breakingRecords, 
}