function minimumBribes(queue) {
  let bribes = 0;
  for (let i=0; i<queue.length; i++) {
    const possibleBribes = queue[i] - (i+1);
    const hiddenBribes = queue[i] - queue[i+1];
    if (possibleBribes > 2) {
      return process.stdout.write("Too chaotic\n");
    } else if (possibleBribes > 0) {
      bribes += possibleBribes;
    } else if (hiddenBribes > 0) {
      bribes++;
    }
  };
  return process.stdout.write(bribes.toString() + "\n");
}

module.exports = {
  minimumBribes,
}