function pageCount(numberOfPages, turnToPage) {
  const fromFront = Math.floor(turnToPage/2);
  const backCount = numberOfPages-turnToPage;
  const fromBack = numberOfPages%2 === 0 && numberOfPages !== 2
    ? Math.ceil(backCount/2)
    : Math.floor((backCount)/2)
  return fromFront < fromBack ? fromFront : fromBack;
}

module.exports = {
  pageCount,
}