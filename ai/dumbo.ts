import Board from "../types/board"
import availableMoves from "../utils/availableMoves"
import random from "../utils/random"

function dumbo(board:Board, hu:number){
    const moves = availableMoves(board);
    return moves[random(0, moves.length - 1)]
}

export default dumbo