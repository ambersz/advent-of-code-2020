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

function partOne(input, reverseIndex) {
  const processedInput = input.map((a)  =>  ({  ...a  }));
  let i = 0;
  let acc = 0;

  while (!processedInput[i].run) {
    // console.log(i);
    const op = processedInput[i];
    op.run = true;
    if (op.op === "nop"|(op.op === "jmp" && i===reverseIndex)) {
      i++;
    } else if (op.op === "acc") {
      acc += op.val;
      i++;
    } else if (op.op === "jmp"|(op.op === "nop" && i===reverseIndex)) {
      i += op.val;
    } else {
      console.error("!!!!");
    }
    if (i >= processedInput.length) {
      console.log("terminated");
      return {acc, terminated:true};
    }
  }
  return acc;
}

function partTwo() {
  let i = 0;
  while (true) {
    const res = partOne(processedInput, i);
    if (res.terminated) return res.acc;
    i++
  }
}

const processedInput = inputSetup();
// console.log(partOne(processedInput));
console.log(partTwo());
