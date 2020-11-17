function minimumBribes(queue) {
  let bribeCount = 0;
  let previousBribe = 0;
  let bribedInts = [];
  for (let i=0; i<queue.length; i++) {
    const currentBribe = queue[i] - (i+1);
    if (currentBribe > 2) {
      return process.stdout.write("Too chaotic\n");
    } else if (currentBribe > previousBribe) {
      for (let i2=1;i2<=(currentBribe-previousBribe); i2++) {
        bribedInts.push(queue[i]-i2);
      }
      previousBribe = currentBribe;
    } else if (currentBribe < 0) {
      bribeCount += Math.abs(currentBribe);
      bribedInts = bribedInts.filter(bribedInt => bribedInt !== queue[i]);
      if (bribedInts.length > 0 && queue[i] > bribedInts[0]) {
        bribeCount++;
      }
      previousBribe = bribedInts.length;
    } else if (currentBribe === 0 
        && bribedInts.find(bribedInt => bribedInt === queue[i]))
    {
      bribedInts = bribedInts.filter(bribedInt => bribedInt !== queue[i])
      if (bribedInts.length > 0 && queue[i] > bribedInts[0]) {
        bribeCount++;
      }
      previousBribe = bribedInts.length;
    } else {
      previousBribe = currentBribe;
    }
  };
  return process.stdout.write(bribeCount.toString() + "\n");
}

module.exports = {
  minimumBribes,
}