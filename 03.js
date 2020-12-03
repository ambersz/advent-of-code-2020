import input from "./inputs/input-03.js";
import _ from "lodash";
import { YEAR } from "./constants.js";
const rows = input.split("\n");
const height = rows.length;
const grid = rows.map((row) => row.split(""));
const width = grid[0].length;

// console.log(partOne());
console.log(partTwo());
function partOne() {
  return toboggan(3, 1);
}

function toboggan(dx, dy) {
  let x = 0;
  let y = 0;
  let trees = 0;
  while (y <= height - 1) {
    if (grid[y][x % width] === "#") {
      trees++;
    }
    x += dx;
    y += dy;
  }
  return trees;
}

function partTwo() {
  return (
    toboggan(1, 1) *
    toboggan(3, 1) *
    toboggan(5, 1) *
    toboggan(7, 1) *
    toboggan(1, 2)
  );
}
