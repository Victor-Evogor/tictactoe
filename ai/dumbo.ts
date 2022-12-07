import Board from "../types/board"
import availableMoves from "../utils/availableMoves"
import random from "../utils/random"
import Move from "../types/move";
/**
 * 
 * @desc returns a random move
 */
function dumbo(board:Board): Move{
    const moves = availableMoves(board);
    return moves[random(0, moves.length - 1)]
}

export default dumbo