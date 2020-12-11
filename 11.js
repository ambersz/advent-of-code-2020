const day = "11";
import _ from "lodash";
import { loadOrGetInputFile } from "./common.js";
let input = await loadOrGetInputFile(day);

function inputSetup() {
  const lines = input.split("\n");
  const grid = lines.map((n) => n.split(""));
  return grid;
}

function partOne() {
  let lastGrid = processedInput;
  let newGrid = processedInput;
  let first = 1;
  while (first > 0 || stringGrid(lastGrid) !== stringGrid(newGrid)) {
    // while (first) {

    first--;
    lastGrid = newGrid;
    // console.log(lastGrid);
    newGrid = lastGrid.map((row, rowNumber, rows) => {
      return row.map((seat, seatColumn) => {
        let i = rowNumber - 1;
        let j = seatColumn - 1;
        let occupied = 0;
        while (i <= rowNumber + 1 && j <= seatColumn + 1) {
          if (lastGrid[i]?.[j] === "#") {
            occupied++;
          }
          if (j === seatColumn + 1) {
            i++;
            j = seatColumn - 1;
          } else {
            j++;
          }
        }
        if (seat === "L" && !occupied) {
          return "#";
        } else if (seat === "#" && occupied >= 5) {
          if (rowNumber === 9 && seatColumn === 2) {
            console.log(`${occupied} neighboring seats occupied`);
          }
          return "L";
        } else {
          return seat;
        }
      });
    });
  }
  console.log(newGrid);
  return _.sum(newGrid.map((row) => row.filter((seat) => seat === "#").length));
}
function stringGrid(g) {
  const stringed = g.map((a) => a.join("")).join("\n");
  return stringed;
}
function logGrid(g) {
  const stringed = g.map((a) => a.join("")).join("\n");
  console.log();
  console.log(stringed);
  console.log();
  return stringed;
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
