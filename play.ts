import Board from "./types/board";
import { readStream } from "./utils/input";
import {createInterface} from "readline"
import { formatBoard, formatUserInput } from "./utils/format";
import insertMove from "./utils/insertMove";
import { gameWon, gameDrawn } from "./utils/endState";
import { cursor } from "./index"
import dumbo from "./ai/dumbo";

let board:Board = [null,null,null,null,null,null,null,null,null]

let hu: number = 0
let ai:number = 1

const rl = createInterface( readStream, process.stdout);

const promptUserInput = (message: string)=>{
    rl.question(message, move =>{
        try {
            let playerMove = formatUserInput(move);
            console.clear();
            board = insertMove(playerMove as number[], hu, board);
            console.log(formatBoard(board));
            console.log("Now its my turn, hold on a bit\nThinking...");
            const cMove = computerPlay();
            board = insertMove(cMove as number[], ai, board);
            // check win
            console.clear()
            console.log(formatBoard(board));
            promptUserInput("Your Turn \n > ")
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

function computerPlay(){
    if(cursor.difficulty === 0){
        return dumbo(board, hu);
    }
}



export default play