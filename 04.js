import input from "./inputs/input-04.js";
import _ from "lodash";
import { YEAR } from "./constants.js";
let once = true;
function inputSetup() {
  const rawPassports = input.split("\n\n");
  return rawPassports
    .map((raw) => {
      // if (once) {
      //   once = false;
      //   console.log(raw);
      // }
      const ret = raw.replace(/\n/g, " ");
      return ret;
    })
    .map((clean) => {
      let pass = {};
      clean.split(" ").forEach((part) => {
        const parts = part.split(":");
        pass[parts[0]] = parts[1];
      });
      return pass;
    });
}

function partOne() {
  const requiredFields = [
    "byr",
    "iyr",
    "eyr",
    "hgt",
    "hcl",
    "ecl",
    "pid",
    // "cid",
  ];
  let count = 0;
  processedInput.forEach(
    (p) =>
      requiredFields.reduce(
        (valid, fieldName) => valid && p[fieldName],
        true
      ) && count++
  );
  return count;
}

function partTwo() {
  processedInput;
}

const processedInput = inputSetup();
console.log(partOne());
// console.log(partTwo());
