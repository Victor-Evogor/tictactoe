import Board from "../types/board";
import Move from "../types/move";

function insertMove(move:Move,player: number, board: Board): Board {
    const cloneBoard = JSON.parse(JSON.stringify(board));
    const moveIndex = move[0]*3 + move[1];
    const square = cloneBoard[moveIndex];
    if(square !== null){
        throw new Error("That cell is occupied");
    }
    cloneBoard[moveIndex] = player;
    return cloneBoard;
}

export default insertMove