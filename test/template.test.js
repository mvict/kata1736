const {
  isABomb,
  lookUpSquareInBoard,
  showBoard,
  isFatalMove,
  playTheGame,
} = require("../src/template");

describe("You want to know if its a bomb or not", () => {
  it("A bomb is marked wit an X", () => {
    expect(isABomb("X")).toBe(true);
  });
  it("A space is not a bomb", () => {
    expect(isABomb(" ")).toBe(false);
  });
});
describe("You want to know what's in a square", () => {
  const board = [
    [" ", " ", " "],
    [" ", "X", " "],
    [" ", " ", " "],
  ];
  it("Return the value of a square with a bomb", () => {
    expect(lookUpSquareInBoard(board, [1, 1])).toBe("X");
  });
  it("Return the value of a square with a space", () => {
    expect(lookUpSquareInBoard(board, [0, 0])).toBe(" ");
  });
});

describe("Player wants to follow the game on the terminal", () => {
  it("At the beginning of the game an empty board is shown", () => {
    const legibleBoard = `    +-+-+-+
    | | | |
    +-+-+-+
    | | | |
    +-+-+-+
    | | | |
    +-+-+-+`;
    const board = [
      [" ", " ", " "],
      [" ", " ", " "],
      [" ", " ", " "],
    ];
    expect(showBoard(board)).toBe(legibleBoard);
  });
  it("After a movement one element is shown", () => {
    const board = [
      [" ", " ", " "],
      [" ", "X", " "],
      [" ", " ", " "],
    ];
    const legibleBoard = `    +-+-+-+
    | | | |
    +-+-+-+
    | |X| |
    +-+-+-+
    | | | |
    +-+-+-+`;

    expect(showBoard(board)).toBe(legibleBoard);
  });
});

describe("A players move changes the game", () => {
  const board = [
    [" ", " ", " "],
    [" ", "X", " "],
    [" ", " ", " "],
  ];
  it("The players clears a bomb", () => {
    expect(isFatalMove(board, [1, 1])).toBe(true);
  });
  it("The players clears a fee square", () => {
    expect(isFatalMove(board, [0, 0])).toBe(false);
  });
});

describe("A player wants to know if (s)he loses or not", () => {
  const board = [
    [" ", " ", " "],
    [" ", "X", " "],
    [" ", " ", " "],
  ];
  it("Player loses and gets a defeat message", () => {
    expect(playTheGame(board, [1, 1])).toEqual("Game over!. You lose");
  });
});
