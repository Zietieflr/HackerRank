function migratoryBirds(birds) {
  const birdCount = [0, 0, 0, 0, 0];
  birds.forEach(bird => birdCount[bird-1] += 1);
  const most = birdCount.reduce((most, count, index) => {
    return most[1] < count ? [index, count] : most;
  }, [0, 0] );
  const mostCounted = (most[0]+1).toString();
  process.stdout.write(mostCounted);
  return mostCounted;
}

module.exports = {
  migratoryBirds,
}