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

export function gameWon(board:Board, player:number): boolean{
    return !!winningCombos.find(combo =>{
        combo.every(position => combo[position] === board[position])
    })
}

export function gameDrawn(board:Board): boolean {
    return !!board.includes(null)
}