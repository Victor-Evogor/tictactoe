import Board from "../types/board"

function availableMoves(board:Board) {
    const moves = board.map((square, index)=> square === null? index: null).filter(square => square !== null).map((index) =>{
        let x = Math.floor(index!/3);
        let y = index! % 3;
        return [x,y]
    });
    return moves
}

export default availableMoves;