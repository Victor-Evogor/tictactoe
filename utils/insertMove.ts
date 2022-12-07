import Board from "../types/board";

function insertMove(array:Array<number>,player: number, board: Board): Board {
    const cloneBoard = JSON.parse(JSON.stringify(board));
    const moveIndex = array[0]*3 + array[1];
    const square = cloneBoard[moveIndex];
    if(square !== null){
        throw new Error("That cell is occupied");
        
    }
    cloneBoard[moveIndex] = player;
    return cloneBoard;
}

export default insertMove