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

function isFatalMove(board, move) {
  const content = lookUpSquareInBoard(board, move);
  return isABomb(content);
}

function playTheGame(board, firstMove) {
  let message = "";
  showBoard(board);
  if (isFatalMove(board, firstMove)) {
    message = "Game over!. You lose";
    console.log("MESSAGE");
    console.log(message);
  }
  return message;
}

module.exports = {
  isABomb,
  lookUpSquareInBoard,
  showBoard,
  isFatalMove,
  playTheGame,
};
