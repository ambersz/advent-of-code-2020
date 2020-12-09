import input from "./inputs/input-09.js";
import _ from "lodash";
import { YEAR } from "./constants.js";

function inputSetup() {
  return input.map((n, i, array) => {
    const validSums = array.slice(i + 1, i + 26).map((m) => n + m);
    return {
      n,
      validSums,
    };
  });
}

function partOne() {
  for (let i = 25; i < processedInput.length; i++) {
    const n = processedInput[i].n;
    if (
      !_.some(processedInput.slice(i - 25, i), (info, index) => {
        return info.validSums.slice(0, 25 - index).includes(n);
      })
    )
      return n;
  }
}

function partTwo() {
  console.log(processedInput);
}

const processedInput = inputSetup();
console.log(partOne());
// console.log(partTwo());
