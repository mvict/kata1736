const { isABomb } = require("../src/template");

describe("You have to clear a board, if step on a bomb you lose", () => {
  it("A bomb is marked wit an X", () => {
    expect(isABomb("X")).toBe(true);
  });
  it("A space is not a bomb", () => {
    expect(isABomb(" ")).toBe(false);
  });
});
