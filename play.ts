import colors from "colors";
import Board from "./types/board";
import { readStream } from "./utils/input";
import { createInterface } from "readline";
import { formatBoard, formatUserInput } from "./utils/format";
import insertMove from "./utils/insertMove";
import { gameEnd } from "./utils/endState";
import { cursor } from "./index";
import dumbo from "./ai/dumbo";
import unbeatable from "./ai/unbeatable";
import Move from "./types/move";

let board: Board = [null, null, null, null, null, null, null, null, null];

export let hu: number = 0;
export let ai: number = 1;

const rl = createInterface(readStream, process.stdout);

const promptUserInput = (message: string) => {
  rl.question(message, (move) => {
    try {
      let playerMove = formatUserInput(move);
      board = insertMove(playerMove as Move, hu, board);
      console.clear();
      // check if game has ended
      console.log(formatBoard(board));
      if (gameEnd(board) === hu) {
        console.log(colors.green("You Win :)"));
      } else if (gameEnd(board) === ai) {
        console.log(colors.bgRed(colors.white("You lose :(")));
      } else if (gameEnd(board) === "draw") {
        console.log(colors.blue("Its a tie :/"));
      }
      if (gameEnd(board) !== null) {
        return;
      }
      console.log("Now its my turn, hold on a bit\nThinking...");
      // returns a move from comp
      const cMove = computerPlay();
      board = insertMove(cMove, ai, board);
      console.clear();
      console.log(formatBoard(board));
      // check if game has ended
      if (gameEnd(board) === hu) {
        console.log("You Win :)");
      } else if (gameEnd(board) === ai) {
        console.log("You lose :(");
      } else if (gameEnd(board) === "draw") {
        console.log("Its a tie :/");
      }
      if (gameEnd(board) !== null) {
        console.log("\n Press 'm' to go back to main menu")
        return;
      }
      promptUserInput("Your Turn \n > ");
    } catch (error: any) {
      console.log(colors.red(error.message));
      promptUserInput("Try again!\n > ");
    }
  });
};

function play(selectedPlayer: number) {
    board = [null, null, null, null, null, null, null, null, null];
  hu = selectedPlayer;
  ai = 1-selectedPlayer;
  console.log(formatBoard(board));


  if (hu === 0) {
    promptUserInput("Your turn > \n");
  }else{
    console.log("Hold on, let me make the first move")
    const cMove = computerPlay();
    board = insertMove(cMove, ai, board);
    console.clear();
    console.log(formatBoard(board))
    promptUserInput("I have played, now it's your tun!\n > ");
  }
}

function computerPlay():Move {
  if (cursor.difficulty === 0) {
    return dumbo(board);
  }else{
    return unbeatable(board)
  }
}

export default play;
