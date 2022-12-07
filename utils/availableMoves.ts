import Board from "../types/board"
import Move from "../types/move";

function availableMoves(board:Board): Move[] {
    const moves = board.map((square, index)=> square === null? index: null).filter(square => square !== null).map((index) =>{
        let x = Math.floor(index!/3);
        let y = index! % 3;
        return [x,y]
    }) as Move[];
    return moves
}

export default availableMoves;