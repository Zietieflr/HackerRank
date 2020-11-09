function catAndMouse(catA, catB, mouse) {
  const catADistance = Math.abs(catA - mouse);
  const catBDistance = Math.abs(catB - mouse);
  if (catADistance === catBDistance) {
    return "Mouse C";
  }
  return catADistance < catBDistance ? "Cat A" : "Cat B";
}

module.exports = {
  catAndMouse,
}