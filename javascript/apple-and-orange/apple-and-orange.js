// s is the start of house 
// t is the end of house
//    house values are INCLUSIVE
// 'a' location of first tree
// 'b' location of second tree
// apples how far from 'a' the apples fall
// oranges how far from 'b' the oranges fall

function countApplesAndOranges(
  houseStart,
  houseEnd,
  appleTree,
  orangeTree,
  apples,
  oranges
) {
  const applesOnHouse = countFruitOnHouse(houseStart, houseEnd, appleTree, apples);
  const orangesOnHouse = countFruitOnHouse(houseStart, houseEnd, orangeTree, oranges);
  process.stdout.write(`${applesOnHouse}\n${orangesOnHouse}`)
  return `${applesOnHouse}\n${orangesOnHouse}`
}

function countFruitOnHouse(houseStart, houseEnd, tree, fruitDistances) {
  let onHouse = 0;
  fruitDistances.forEach(distance => {
    const fruitLocation = tree + distance;
    if (fruitLocation >= houseStart && fruitLocation <= houseEnd) {
      onHouse++; 
    }
  });
  return onHouse;
}

module.exports = {
  countApplesAndOranges, countFruitOnHouse
}