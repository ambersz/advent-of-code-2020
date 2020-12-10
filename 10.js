import input from "./inputs/input-10.js";
import _ from "lodash";
import { YEAR } from "./constants.js";

function inputSetup() {
  input.push(0);
  const partial = _.sortBy(input);
  partial.push(partial[partial.length - 1] + 3);
  return partial;
}

function partOne() {
  const diffs = processedInput
    .map((n, i) => processedInput[i + 1] - n)
    .slice(0, -1);
  console.log(processedInput);
  console.log(diffs);
  return (
    diffs.filter((n) => n === 1).length * diffs.filter((n) => n === 3).length
  );
}

function partTwo() {
  console.log(processedInput);
}

const processedInput = inputSetup();
console.log(partOne());
// console.log(partTwo());
