#! /usr/bin/node

import play from "./play"
import { navigationInput, close } from "./utils/input";
import { about, mainMenu, selectPlayer, setDifficulty } from "./utils/display";

export const cursor:{
    main: number,
    selectPlayer: number,
    difficulty: number
} = {
  main: 0,
  selectPlayer: 0,
  difficulty: 0
};
enum Positions {
  MAIN,
  SELECTPLAYER,
  ABOUT,
  SETDIFFICULTY,
  PLAY,
}

let position = Positions.MAIN;
console.clear();
mainMenu(cursor.main);

navigationInput(
  (result: string) => {
    if (result === "main menu") {
      position = Positions.MAIN;
      console.clear();
      mainMenu(cursor.main);
    }
    if (position === Positions.MAIN) {
      if (result === "down") {
        cursor.main = ++cursor.main % 3;
        console.clear();
        mainMenu(cursor.main);
      } else if (result === "up") {
        if (cursor.main === 0) {
          cursor.main = 2;
        } else {
          cursor.main = --cursor.main;
        }
        console.clear();
        mainMenu(cursor.main);
      } else if (result === "enter") {
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
      if (result === "down") {
        cursor.selectPlayer = ++cursor.selectPlayer % 2;
        console.clear();
        selectPlayer(cursor.selectPlayer);
      } else if (result === "up") {
        if (cursor.selectPlayer === 0) {
          cursor.selectPlayer = 1;
        } else {
          cursor.selectPlayer = --cursor.selectPlayer;
        }
        console.clear();
        selectPlayer(cursor.selectPlayer);
      } else if (result === "enter") {
        position = Positions.PLAY;
        console.clear();
        play(cursor.selectPlayer, cursor.difficulty);
      }
    } else if (position === Positions.SETDIFFICULTY) {
        if (result === "down") {
          cursor.difficulty = ++cursor.difficulty % 2;
          console.clear();
          setDifficulty(cursor.difficulty);
        } else if (result === "up") {
          if (cursor.difficulty === 0) {
            cursor.difficulty = 1;
          } else {
            cursor.difficulty = --cursor.difficulty;
          }
          console.clear();
          setDifficulty(cursor.difficulty);
        } else if (result === "enter") {
          console.clear();
          mainMenu(cursor.main);
          position = Positions.MAIN;
        }
      }
  },
  (error: string) => {
    process.exit(1);
  }
);
