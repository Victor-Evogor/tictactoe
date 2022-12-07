import colors from "colors";
function Header() {
    console.log(
        colors.cyan(`
    #######  ##    ###  #######   #####     ###  #######    ###    #####
      ###    ##  ##       ###    ##   ##  ##       ###    ##   ##  ##
      ###    ##  ##       ###    #######  ##       ###    ##   ##  #####
      ###    ##  ##       ###    ##   ##  ##       ###    ##   ##  ##
      ###    ##    ###    ###    ##   ##    ###    ###      ###    #####  
    
    
    `)
      );
}

export function mainMenu(cursor: number) {
  Header()

  // formats the options
  const options = ["Play", "About", "Set Difficulty"].map((item, index) => {
    return colors[index === cursor ? "green" : "grey"](
      `${index === cursor ? "> " : "  "} ${item}`
    );
  });
  console.log(options.join("\n"));
}

export function about(){
    Header()

    console.log(colors.green(`@2022 Victor Evogor\n`));
    console.log(colors.black(colors.bgWhite(`
                                                          
                   NAVIGATION                             
----------------------------------------------------------
• Use the Up and Down arrow keys to move the cursor       
• Press the Enter/Return key to select                    
• Press the 'm' key to return to main menu                
                                                          
`)))
console.log(colors.bold(`
         TIC TAC TOE RULES & GAME PLAY
 -----------------------------------------------------------------------------
 The game is played on a 9x9 grid, with each player assigned a letter, X or O.
 The first player to get three in a row, column or diagonally wins!
 If the grid runs out of spaces, its a draw!

 To fill in a cell, type in the row number followed by the column number.
 1,1 | 1,2 | 1,3
 ----+-----+----
 2,1 | 2,2 | 2,3
 ----+-----+----
 3,1 | 3,2 | 3,3
 for example, if you type in "1,3" you will fill in the top left cell.

 You can also set the difficulty in home > difficulty
`))


    console.log("\n\n Press m to return to main menu\n CTRL+C to exit")
}

export function selectPlayer(cursor:number) {
    Header();
    console.log(colors.bold("Select Player. X always goes first \n"));
    const options = ["X", "O"].map((item, index) => {
        return colors[index === cursor ? "green" : "grey"](
          `${index === cursor ? "> " : "  "} ${item}`
        );
      });
      console.log(options.join("\n"));
}

export function setDifficulty(cursor:number) {
    Header();
    console.log(colors.bold("Select your level of difficulty\n"))
    const options = ["Easy", "unbeatable"].map((item, index) => {
        return colors[index === cursor ? "green" : "grey"](
          `${index === cursor ? "> " : "  "} ${item}`
        );
      });
      console.log(options.join("\n"));
}