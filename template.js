const day = "##";
import _ from "lodash";
import { loadOrGetInputFile } from "./common.js";
let input = await loadOrGetInputFile(day);

async function inputSetup() {
  const lines = input.split("\n");
  console.log(input);
  return { input };
}

function partOne() {
  console.log(processedInput);
}

function partTwo() {
  console.log(processedInput);
}

const processedInput = inputSetup();
// /* Comment toggle this line to run only part one or only part two
console.log(partOne());
/*/ // Comment toggle this line to run both part one and part two
console.log(partTwo());
// */
