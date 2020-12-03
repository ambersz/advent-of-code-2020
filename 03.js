import input from "./inputs/input-03.js";
import _ from "lodash";
import { YEAR } from "./constants.js";

console.log(partOne());
// console.log(partTwo());
function partOne() {
  const rows = input.split("\n");
  const height = rows.length;
  const grid = rows.map((row) => row.split(""));
  const width = grid[0].length;
  let x = 0;
  let y = 0;
  let trees = 0;
  while (y <= height - 1) {
    if (grid[y][x % width] === "#") {
      trees++;
    }
    x += 3;
    y += 1;
  }
  return trees;
}

function partTwo() {}
