import Board from "../types/board";
import { formatBoard } from "../utils/format";
import { formatUserInput } from "../utils/format";
import colors from "colors";
describe("Format Tests", ()=>{
    it(`Formats an array containing the squares of the board into a string`, ()=>{
            const O=colors.red("O"),
            X=colors.blue("X"),
            EMP=" ";
        const mockBoard : Board = [
            1, null, 1,
            0, 1, null,
            0, null, null
        ];
        const mockResult = `\n\t${O} | ${EMP} | ${O}\n\t--+---+--\n\t${X} | ${O} | ${EMP}\n\t--+---+--\n\t${X} | ${EMP} | ${EMP}\n`;
        expect(formatBoard(mockBoard)).toEqual(mockResult)
    });

    it("Formats user input", ()=>{
        const input = "1,3";
        const result = [0,2];
        expect(JSON.stringify(formatUserInput(input))).toEqual(JSON.stringify(result));
    })
})