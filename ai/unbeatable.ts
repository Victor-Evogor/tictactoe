import Board from "../types/board";
import availableMoves from "../utils/availableMoves";
import insertMove from "../utils/insertMove";
import { gameEnd } from "../utils/endState";
import { hu, ai } from "../play";
import random from "../utils/random";
import Move from "../types/move";

type result = {
  score: number;
  index?: number;
};

function clone<T>(object: T): T {
  return JSON.parse(JSON.stringify(object));
}

function unBeatable(board: Board):Move {
  function minmax(board: Board, player: number): result {
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
    if (player === ai) // maximizing
      bestResult = movesResult.reduce(
        (prev, current) => {
          if (current.score > prev.score) {
            return current;
          } else {
            return prev;
          }
        },
        { score: -Infinity, index: 0 }
      );
    else // minimizing
      bestResult = movesResult.reduce(
        (prev, current) => {
          if (current.score < prev.score) {
            return current;
          } else {
            return prev;
          }
        },
        { score: Infinity, index: 0 }
      );

    // returning the best move result
    return bestResult;
  }
  return availableMoves(board)[minmax(board, ai).index!] as Move;
}
export default unBeatable;
