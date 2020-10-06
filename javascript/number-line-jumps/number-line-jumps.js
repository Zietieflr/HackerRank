function kangaroo(kangaroo1, jump1, kangaroo2, jump2) {
  if (jump1 <= jump2) {
    return "NO";
  }
  while (kangaroo1 < kangaroo2) {
    kangaroo1 += jump1;
    kangaroo2 += jump2;
  }
  return kangaroo1 === kangaroo2 ? "YES" : "NO";
}

module.exports = {
  kangaroo,
}