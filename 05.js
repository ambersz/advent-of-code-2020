import input from "./inputs/input-05.js";
import _ from "lodash";
import { YEAR } from "./constants.js";

function inputSetup() {
  const seats = input.split("\n");

  return seats;
}

function partOne() {
  processedInput = processedInput.map((s) =>
    parseInt(s.replace(/[LF]/g, "0").replace(/[BR]/g, "1"), 2)
  );
  return Math.max(...processedInput);
}

function partTwo() {
  let sorted = _.sortBy(processedInput, (a) => a);
  sorted.forEach((a, i) => {
    if (i > 0) {
      if (sorted[i - 1] + 1 !== a) {
        console.log(sorted[i - 1], a);
      }
    }
  });
}

let processedInput = inputSetup();
console.log(partOne());
console.log(partTwo());
