import Board from "./types/board";
import { readStream } from "./utils/input";
import {createInterface} from "readline"
import { formatBoard, formatUserInput } from "./utils/format";
import insertMove from "./utils/insertMove";
import { gameWon, gameDrawn } from "./utils/endState";

const board:Board = [null,null,null,null,null,null,null,null,null]

let hu: number = 0
let ai:number = 1

const rl = createInterface( readStream, process.stdout);

const promptUserInput = (message: string)=>{
    rl.question("Your turn\n > ", move =>{
        try {
            let playerMove = formatUserInput(move);
            console.clear()
            console.log(formatBoard(insertMove(playerMove as number[], hu, board)));
            console.log("Now its my turn, hold on a bit\nThinking...")

        } catch (error:any) {
            console.log(error.message);
            promptUserInput("Try again")
        }
    })
}

function play(selectedPlayer:number, difficulty:number=0) {
    hu = selectedPlayer;
    ai = ++selectedPlayer % 2;
    console.log( formatBoard(board));

    if(hu === 0){
        promptUserInput("Your turn > \n")
    }
}

function minmax(player:number, move:Array<number>, board:Board){

    if(gameWon(board, player) && player == ai){
        return -Infinity
    }
    if(gameWon(board, player) && player == hu){
        return Infinity
    }else if(gameDrawn(board)){
        return 0;
    }

}

function computerPlay(difficulty:number){
    /* return new Promise((resolve, reject)=>{
        resolve(minmax(ai, board ))
    }) */
}

export default play