
import play from "./play"
import { navigationInput } from "./utils/input";
import { about, mainMenu, selectPlayer, setDifficulty } from "./utils/display";

// all cursors for each menu
export const cursor:{
    main: number,
    selectPlayer: number,
    difficulty: number
} = {
  main: 0,
  selectPlayer: 0,
  difficulty: 1 // difficulty set to unbeatable by default
};

enum Positions {
  MAIN,
  SELECTPLAYER,
  ABOUT,
  SETDIFFICULTY,
  PLAY,
}

// stores the users current menu position
let position = Positions.MAIN;
console.clear();
mainMenu(cursor.main);

navigationInput(
  (key: string) => {
    if (key === "main menu") {
      // Handler for if m pressed any where in the app
      position = Positions.MAIN;
      console.clear();
      mainMenu(cursor.main);
    }
    if (position === Positions.MAIN) {
      // user in main menu
      if (key === "down") {
        // down arrow pressed in main menu
        cursor.main = ++cursor.main % 3;
        console.clear();
        mainMenu(cursor.main);
      } else if (key === "up") {
        // up arrow
        if (cursor.main === 0) {
          cursor.main = 2;
        } else {
          cursor.main = --cursor.main;
        }
        console.clear();
        mainMenu(cursor.main);
      } else if (key === "enter") {
        // enter key
        if (cursor.main === 0) {
          position = Positions.SELECTPLAYER;
          console.clear();
          selectPlayer(cursor.selectPlayer);
        } else if (cursor.main === 1) {
          position = Positions.ABOUT;
          console.clear();
          about();
        } else if (cursor.main === 2) {
            position = Positions.SETDIFFICULTY
            console.clear();
            setDifficulty(cursor.difficulty);
        }
      }
    } else if (position === Positions.SELECTPLAYER) {
      // user in select player screen
      if (key === "down") {
        // down arrow pressed
        cursor.selectPlayer = ++cursor.selectPlayer % 2;
        console.clear();
        selectPlayer(cursor.selectPlayer);
      } else if (key === "up") {
        // up arrow pressed
        if (cursor.selectPlayer === 0) {
          cursor.selectPlayer = 1;
        } else {
          cursor.selectPlayer = --cursor.selectPlayer;
        }
        console.clear();
        selectPlayer(cursor.selectPlayer);
      } else if (key === "enter") {
        // enter pressed
        position = Positions.PLAY;
        console.clear();
        play(cursor.selectPlayer);
      }
    } else if (position === Positions.SETDIFFICULTY) {
      // user in set difficulty
        if (key === "down") {
          // down arrow pressed
          cursor.difficulty = ++cursor.difficulty % 2;
          console.clear();
          setDifficulty(cursor.difficulty);
        } else if (key === "up") {
          // up arrow pressed
          if (cursor.difficulty === 0) {
            cursor.difficulty = 1;
          } else {
            cursor.difficulty = --cursor.difficulty;
          }
          console.clear();
          setDifficulty(cursor.difficulty);
        } else if (key === "enter") {
          // enter key pressed
          console.clear();
          mainMenu(cursor.main);
          position = Positions.MAIN;
        }
      }
  },
  () => {
    process.exit(1);
  }
);
