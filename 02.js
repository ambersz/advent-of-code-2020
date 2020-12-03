import input from "./inputs/input-02.js";
import _ from "lodash";

const year = 2020;
console.log(partOne());
console.log(partTwo());
function partOne() {
  let bad = 0;
  input.forEach((pass) => {
    const regex = new RegExp(pass.char, "g");
    const count = (pass.password.match(regex) || []).length;
    if (count < pass.min || count > pass.max) bad++;
  });
  return input.length - bad;
}

function partTwo() {
  let good = 0;
  input.forEach((pass) => {
    const first = pass.password[pass.min - 1];
    const second = pass.password[pass.max - 1];
    if ((first === pass.char) ^ (second === pass.char)) {
      good++;
    } else {
    }
  });
  return good;
}
