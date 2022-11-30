function isABomb(x) {
  let aBomb = false;
  if (x === "X") {
    aBomb = true;
  }
  return aBomb;
}

function showEmptyBoard(board, moveList) {
  let emptyBoard = "";
  if (moveList.length === 0) {
    emptyBoard = `+-+-+-+
| | | |
+-+-+-+
| | | |
+-+-+-+
| | | |
+-+-+-+`;
  }
  console.log(emptyBoard);
  return emptyBoard;
}

function lookUpSquareInBoard(board, square) {
  return board[square[0]][square[1]];
}
module.exports = {
  isABomb,
  showEmptyBoard,
  lookUpSquareInBoard,
};
