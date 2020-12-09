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
  let start = 0;
  let end = 2;
  let sum = 0;
  while (true) {
    const slice = input.slice(start, end);
    sum = _.sum(slice);
    if (sum < invalidNumber) {
      if (end < input.length) {
        end++;
      } else {
        start++;
        end = start + 2;
      }
    } else if (sum === invalidNumber) {
      return _.min(slice) + _.max(slice);
    } else {
      start++;
      end = start + 2;
    }
  }
}

const processedInput = inputSetup();
const invalidNumber = partOne();
console.log(partTwo());
