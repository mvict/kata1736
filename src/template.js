function isABomb(x) {
  let aBomb = false;
  if (x === "X") {
    aBomb = true;
  }
  return aBomb;
}

module.exports = {
  isABomb,
};
