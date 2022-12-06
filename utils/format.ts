import Board from "../types/board";
import colors from "colors"

export function formatBoard(input: Board):string{
    let r :Array<string>= [];
    input.forEach(square=>{
        if(square === 0){
            r.push(colors.blue("X"));
        }else if( square === 1){
            r.push(colors.red("O"))
        }else{
            r.push(" ")
        }
    });
    let board = `\n\t${r[0]} | ${r[1]} | ${r[2]}\n\t--+---+--\n\t${r[3]} | ${r[4]} | ${r[5]}\n\t--+---+--\n\t${r[6]} | ${r[7]} | ${r[8]}\n`
    return board
}

export function formatUserInput(input:string){
    let arr: Array<string | number> = input.split(",");
    arr = arr.map(point => Number(point));
    if(arr.length !== 2){
        throw new Error("Please specify only two values separated by a ','\n Example 1,3");
    }
    arr.forEach((point, index) =>{
        if(isNaN(point as number)){
            throw new Error("Please only specify a number from 0-9");
        }
        if(point < 1 || point > 3){
            if(index === 0)
            throw new Error("Please select a valid row number - 1, 2 or 3");
            else if(index === 1)
            throw new Error("Please select a valid column number - 1, 2 or 3");
        }
    });
    arr = arr.map((point)=>{
        return --(point as number)
    });
    return arr;
}