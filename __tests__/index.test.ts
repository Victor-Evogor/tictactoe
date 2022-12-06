import Board from "../types/board";
import { formatBoard } from "../utils/format";
import { formatUserInput } from "../utils/format";

describe("Format Tests", ()=>{
    it(`Formats an array containing the squares of the board into a string`, ()=>{
        const mockBoard : Board = [
            1, null, 1,
            0, 1, null,
            0, null, null
        ];
        const mockResult = `\n\tX | # | X\n\t---------\n\tO | X | #\n\t---------\n\tO | # | #\n`;
        expect(formatBoard(mockBoard)).toEqual(mockResult)
    });

    it("Formats user input", ()=>{
        const input = "1,3";
        const result = [0,2];
        expect(JSON.stringify(formatUserInput(input))).toEqual(JSON.stringify(result));
    })
})