import input from "./inputs/input-10.js";
import _ from "lodash";
import { YEAR } from "./constants.js";
let diffs;
function inputSetup() {
  input.push(0);
  const partial = _.sortBy(input);
  partial.push(partial[partial.length - 1] + 3);
  return partial;
}

function partOne() {
  diffs = processedInput.map((n, i) => processedInput[i + 1] - n).slice(0, -1);
  console.log(processedInput);
  console.log(diffs);
  return (
    diffs.filter((n) => n === 1).length * diffs.filter((n) => n === 3).length
  );
}

function partTwo() {
  const wayMap = {
    0: 1Zz,
    1: 1,
    2: 2,
    3: 4,
    4: 7,
  };
  let one = 0;
  let ways = 1;
  diffs.forEach((n) => {
    if (n === 1) {
      one++;
    } else if (n === 3) {
      // console.log(one);
      ways *= wayMap[one];
      one = 0;
    } else {
      console.log("!!!");
    }
  });
  return ways;
}

const processedInput = inputSetup();
console.log(partOne());
console.log(partTwo());
