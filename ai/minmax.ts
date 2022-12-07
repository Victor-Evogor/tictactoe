import Board from "../types/board";
import availableMoves from "../utils/availableMoves";
import insertMove from "../utils/insertMove";
import { gameEnd } from "../utils/endState";
import { hu, ai } from "../play";
import random from "../utils/random";

type result = {
  score: number;
  index?: number;
};

function clone(object: object): any {
  return JSON.parse(JSON.stringify(object));
}

function unBeatable(board: Board, player: number) {
  function minmax(board: Board, player: number): result {
    // console.log(formatBoard(board));
    let moves = availableMoves(board);

    // Checking if game is over
    if (gameEnd(board) === hu) {
      return { score: -Infinity };
    } else if (gameEnd(board) === ai) {
      return { score: Infinity };
    } else if (gameEnd(board) === "draw") {
      return { score: 0 };
    }

    const movesResult: result[] = [];
    const cloneBoard: Board = clone(board);
    moves.forEach((move, index) => {
      // Getting the outcome of each move and storing them
      if (player === ai) {
        let result = minmax(insertMove(move, ai, cloneBoard), hu);
        result.index = index;
        movesResult.push(result);
      } else {
        let result = minmax(insertMove(move, hu, cloneBoard), ai);
        result.index = index;
        movesResult.push(result);
      }
    });

    // Minimizing human's move & maximizing ai's move to get the best outcome
    let bestResult: result | undefined;
    if (player === ai)
      bestResult = movesResult.reduce(
        (prev, current) => {
          if (current.score > prev.score) {
            return current;
          } else if ((current.score = prev.score)) {
            if (random(0, 1) === 1) return current;
            else return prev;
          } else {
            return prev;
          }
        },
        { score: -Infinity, index: 0 }
      );
    else
      bestResult = movesResult.reduce(
        (prev, current) => {
          if (current.score < prev.score) {
            return current;
          }else if ((current.score = prev.score)) {
            if (random(0, 1) === 1) return current;
            else return prev;
          } else {
            return prev;
          }
        },
        { score: Infinity, index: 0 }
      );

    // returning best move result
    return bestResult;
  }
  return availableMoves(board)[minmax(board, player).index!];
}
export default unBeatable;
