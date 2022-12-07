// buffer of navigation keys
const upArrow = Buffer.from([0x1b, 0x5b, 0x41]);
const downArrow = Buffer.from([0x1b, 0x5b, 0x42]);
const enter = Buffer.from([0xd]);
const exit = Buffer.from([0x3]);
export const readStream = process.stdin.setRawMode(true);

export function navigationInput(resolve: Function, reject: Function) {
  readStream.on("data", (key) => {
    const isUpArrow = upArrow.compare(new Uint8Array(key)) === 0;
    const isDownArrow = downArrow.compare(new Uint8Array(key)) === 0;
    const isEnter = enter.compare(new Uint8Array(key)) === 0;
    const isExit = exit.compare(new Uint8Array(key)) === 0;
    if (isUpArrow) {
      resolve("up");
    } else if (isDownArrow) {
      resolve("down");
    } else if (isEnter) {
      resolve("enter");
    } else if (isExit) {
      reject("exit");
    } else if (key.toString() === "m" || key.toString() === "M") {
      resolve("main menu");
    }
  });
}
