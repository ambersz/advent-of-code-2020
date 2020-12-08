import input from "./inputs/input-08.js";
import _ from "lodash";
import { YEAR } from "./constants.js";

function inputSetup() {
  return input.split("\n").map((raw) => {
    const [op, val] = raw.split(" ");
    return {
      op,
      val: parseInt(val),
      run: 0,
    };
  });
}

function partOne() {
  let i = 0;
  let acc = 0;
  while (!processedInput[i].run) {
    // console.log(i);
    const op = processedInput[i];
    op.run = true;
    if (op.op === "nop") {
      i++;
    } else if (op.op === "acc") {
      acc += op.val;
      i++;
    } else if (op.op === "jmp") {
      i += op.val;
    } else {
      console.error("!!!!");
    }
  }
  return acc;
}

function partTwo() {
  processedInput;
}

const processedInput = inputSetup();
console.log(partOne());
// console.log(partTwo());
