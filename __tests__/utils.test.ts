import Board from "../types/board";
import availableMoves from "../utils/availableMoves";
import { gameEnd } from "../utils/endState";

describe("Utilities tests", () => {
  it("Check available moves", () => {
    // prettier-ignore
    const board:Board = [
        null, null, 1,
        0,     0,   1,
        null,  null, null
    ];
    let r = availableMoves(board);
    let expected = [
      [0, 0],
      [0, 1],
      [2, 0],
      [2, 1],
      [2, 2],
    ];
    expect(JSON.stringify(r)).toEqual(JSON.stringify(expected));
  });

  it("Checks if game is won by O player", () => {
    const board:Board = [
        1,  1,  1,
        null, 0, 0,
        null, 0, 0
    ]
    const r = gameEnd(board);
    expect(r).toEqual(1);
  });

  it("Checks if game is lost by 1", ()=>{
    const board:Board = [
      0,  0,  0,
      null, 1, 1,
      null, 1, 1
  ]
  const r = gameEnd(board);
  expect(r).toEqual(0);
  });

  it("Checks if game is lost drawn", ()=>{
    const board:Board = [
      0, 0, 1,
      1, 1, 0,
      0, 1, 1
  ]
  const r = gameEnd(board);
  expect(r).toEqual("draw");
  });
});
