const {
  isABomb,
  showEmptyBoard,
  lookUpSquareInBoard,
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
  it("Return the value of a square with a bomb", () => {
    expect(lookUpSquareInBoard(board, [0, 0])).toBe(" ");
  });
});

describe("Player wants to follow the game on the terminal", () => {
  it("At the beginning of the game an empty board is shown", () => {
    const emptyBoard = `+-+-+-+
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
    expect(showEmptyBoard(board, [])).toBe(emptyBoard);
  });
  //   it("After one movement, one square will be filled", () => {
  //     const board = `+-+-+-+
  // | | | |
  // +-+-+-+
  // | |X| |
  // +-+-+-+
  // | | | |
  // +-+-+-+`;
  //     const board = [[" ", " ", " "], [" ", "X", " "], [" ", " ", " "]];
  //     expect(showEmptyBoard(board, [1,1])).toBe(emptyBoard);
  //   });
});
