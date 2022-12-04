function isABomb(x) {
  let aBomb = false;
  if (x === "X") {
    aBomb = true;
  }
  return aBomb;
}

function lookUpSquareInBoard(board, square) {
  return board[square[0]][square[1]];
}

function showBoard(board) {
  const rowSeparator = "    +-+-+-+\n";
  let finalBoardToPrint = "";
  // eslint-disable-next-line no-restricted-syntax
  for (let row = 0; row < board.length; row += 1) {
    const printRow = `    |${board[row].join("|")}|\n`;
    finalBoardToPrint += rowSeparator + printRow;
  }
  finalBoardToPrint += "    +-+-+-+";
  console.log(finalBoardToPrint);
  return finalBoardToPrint;
}

module.exports = {
  isABomb,
  lookUpSquareInBoard,
  showBoard,
};
