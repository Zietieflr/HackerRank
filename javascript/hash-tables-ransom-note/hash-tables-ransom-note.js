function checkMagazine(magazineWords, noteWords) {
  // O(n + m)
  let magazineObject = convertListToObject(magazineWords);
  for (let i=0; i<noteWords.length; i++) {
    if (!magazineObject[noteWords[i]]) {
      return process.stdout.write("No");
    };
    magazineObject[noteWords[i]]--;
  };
  return process.stdout.write("Yes");
};

function convertListToObject(elements) {
  let object = {};
  elements.forEach(element => {
    if (!object[element]) {
      object[element] = 1;
    } else {
      object[element]++;
    };
  });
  return object;
};

module.exports = {
  checkMagazine, convertListToObject
};