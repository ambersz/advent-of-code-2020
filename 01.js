/*
--- Day 1: Report Repair ---
After saving Christmas five years in a row, you've decided to take a vacation at a nice resort on a tropical island. Surely, Christmas will go on without you.

The tropical island has its own currency and is entirely cash-only. The gold coins used there have a little picture of a starfish; the locals just call them stars. None of the currency exchanges seem to have heard of them, but somehow, you'll need to find fifty of these coins by the time you arrive so you can pay the deposit on your room.

To save your vacation, you need to get all fifty stars by December 25th.

Collect stars by solving puzzles. Two puzzles will be made available on each day in the Advent calendar; the second puzzle is unlocked when you complete the first. Each puzzle grants one star. Good luck!

Before you leave, the Elves in accounting just need you to fix your expense report (your puzzle input); apparently, something isn't quite adding up.

Specifically, they need you to find the two entries that sum to 2020 and then multiply those two numbers together.

For example, suppose your expense report contained the following:

1721
979
366
299
675
1456
In this list, the two entries that sum to 2020 are 1721 and 299. Multiplying them together produces 1721 * 299 = 514579, so the correct answer is 514579.

Of course, your expense report is much larger. Find the two entries that sum to 2020; what do you get if you multiply them together?
*/

import input from "./inputs/input-01.js";
import _ from "lodash";

const year = 2020;

function partOne() {
  input.sort();

  const difference = input.map((num) => year - num);
  difference.sort();

  let i = 0;
  let j = 0;
  while (input.length--) {
    const a = input[i];
    const b = difference[j];
    if (a === b) {
      return (2020 - a) * a;
    } else if (a < b) {
      i++;
    } else {
      j++;
    }
  }
}

function partTwo() {
  const sortedInput = _.sortBy(input, [(a) => a]);
  const max = year - sortedInput[0] - sortedInput[1];
  const filteredInput = sortedInput.filter((num) => num <= max);
  console.log(filteredInput.length);
  let i = 0;
  let j = 1;
  let k = 2;
  const flength = filteredInput.length;
  while (i <= flength - 3) {
    const I = filteredInput[i];
    const J = filteredInput[j];
    const K = filteredInput[k];
    if (I + J + K === year) {
      return I * J * K;
    } else {
      // } else if (I + J + K < year) {
      if (k < flength - 1) {
        k++;
      } else if (j < flength - 2) {
        j++;
        k = j + 1;
      } else {
        i++;
        j = i + 1;
        k = j + 1;
      }
    }
  }
}
console.log(partTwo());
