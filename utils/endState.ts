import Board from "../types/board";

const winningCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

export function gameEnd(board:Board): 0|1|"draw"|null{

    let isZeroWin = !!winningCombos.find(combo =>{
        return combo.every(position => 0 === board[position])
    });
    let isOneWin = !!winningCombos.find(combo =>{
        return combo.every(position => 1 === board[position])
    });

    let isDraw = !board.includes(null)
    if(isOneWin){
        return 1
    }else if(isZeroWin){
        return 0
    }else if(isDraw){
        return "draw"
    }else{
        return null
    }
}