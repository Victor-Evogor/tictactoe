import Board from "../types/board";

function insertMove(array:Array<number>,player: number, board: Board): Board {
    const cloneBoard = JSON.parse(JSON.stringify(board));
    cloneBoard[array[0] + array[1]] = player;
    return cloneBoard;
}

export default insertMove