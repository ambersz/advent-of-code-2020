import input from "./inputs/input-06.js";
import _ from "lodash";
import { YEAR } from "./constants.js";

function inputSetup() {
  return input
    .split("\n\n")
    .map((i) => i.replace(/\n/g, ""))
    .map((answers) => {
      let l = answers.length;
      let answerMap = {};
      while (l--) {
        let a = answers[l];
        if (answerMap[a]) {
          answerMap[a] += 1;
        } else {
          answerMap[a] = 1;
        }
      }
      return answerMap;
    });
}

function partOne() {
  return _.sum(processedInput.map((a) => Object.keys(a).length));
}

function partTwo() {
  processedInput;
}

const processedInput = inputSetup();
console.log(partOne());
// console.log(partTwo());
