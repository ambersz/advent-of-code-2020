import input from "./inputs/input-06.js";
import _ from "lodash";
import { YEAR } from "./constants.js";

function inputSetup() {
  return input
    .split("\n\n")
    .map((i) => i.replace(/\n/g, "#"))
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
  return _.sum(processedInput.map((a) => Object.keys(a).length - 1));
}

function partTwo() {
  return _.sum(
    processedInput
      .map((a) => {
        const b = { "#": 0 };
        return { ...b, ...a };
      })
      .map((a) => {
        let qs = Object.keys(a);
        return qs.filter((q) => a[q] === a["#"] + 1).length;
      })
  );
}

const processedInput = inputSetup();
console.log(partOne());
console.log(partTwo());
