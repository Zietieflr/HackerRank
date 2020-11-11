function rotLeft(array, rotation) {
  // With only one array (memory):
  for (let i=0; i<rotation; i++) {
    const toRotate = array.shift();
    array.push(toRotate);
  }
  return array;

  // Without mutating original array: 
  // if (rotation === array.length) {return array};
  // const rotatedArray = [];
  // for (let i=rotation; i<array.length; i++) {
  //   rotatedArray.push(array[i]);
  // }
  // for (let i=0; i<rotation; i++) {
  //   rotatedArray.push(array[i]);
  // }
  // return rotatedArray;
}

module.exports = {
  rotLeft,
}