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
let validList = [];
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
  validList = processedInput.filter((p) =>
    requiredFields.reduce((valid, fieldName) => valid && p[fieldName], true)
  );
  return validList.length;
}

function partTwo() {
  return validList
    .filter((p) => {
      if (p.byr.length !== 4) return false;
      const yr = parseInt(p.byr);
      return yr >= 1920 && yr <= 2002;
    })
    .filter((p) => {
      if (p.iyr.length !== 4) return false;
      const yr = parseInt(p.iyr);
      return yr >= 2010 && yr <= 2020;
    })
    .filter((p) => {
      if (p.eyr.length !== 4) return false;
      const yr = parseInt(p.eyr);
      console.log(yr);
      return yr >= 2020 && yr <= 2030;
    })
    .filter((p) => {
      if (p.hgt.indexOf("cm") !== -1) {
        const ht = parseInt(p.hgt);
        return ht >= 150 && ht <= 193;
      } else if (p.hgt.indexOf("in") !== -1) {
        const ht = parseInt(p.hgt);
        return ht >= 59 && ht <= 76;
      }
      return false;
    })
    .filter((p) => {
      return p.hcl?.match(/^#[0-9a-f]{6}$/)?.length === 1;
    })
    .filter((p) => {
      return ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"].includes(p.ecl);
    })
    .filter((p) => {
      return p.pid.match(/^[0-9]{9}$/)?.length === 1;
    }).length;
}

const processedInput = inputSetup();
console.log(partOne());
console.log(partTwo());
