import input from "./inputs/input-07.js";
import _ from "lodash";
import { YEAR } from "./constants.js";

function inputSetup() {
  const rawRules = input.split("\n");
  return rawRules.map((raw) => {
    const a = raw.split(" bags contain ");
    // { name: "color", count: 2 };
    const children = a[1]
      .replace(".", ", ")
      .split(/ bags?, /)
      .slice(0, -1)
      .map((child) => {
        return {
          count: parseInt(child[0]),
          name: child.slice(1).trim(),
        };
      });
    // console.log(children);

    return { name: a[0], children, childrenNames: children.map((c) => c.name) };
  });
}

function partOne() {
  let goldHoldingTypes = ["shiny gold"];
  let deltaTypes = ["shiny gold"];
  let oldLength = goldHoldingTypes.length;
  while (deltaTypes.length) {
    const newTypes = _.difference(
      processedInput
        .filter((rules) => {
          return _.some(deltaTypes, (type) =>
            rules.childrenNames.includes(type)
          );
        })
        .map((a) => a.name),
      [...goldHoldingTypes, ...deltaTypes]
    );
    goldHoldingTypes = [...goldHoldingTypes, ...newTypes];
    deltaTypes = newTypes;
  }
  console.log(goldHoldingTypes.sort());
  return _.uniq(goldHoldingTypes).length - 1;
}

function partTwo() {
  function countTotalBags(color) {
    const rule = _.find(processedInput, (a) => a.name === color);
    !rule && console.log(color);
    let count;
    if (!rule || rule.childrenNames[0] === "o other") {
      count = 1;
    } else {
      count =
        _.sum(rule.children.map((a) => countTotalBags(a.name) * a.count)) + 1;
    }
    console.log(`${color} bags contain ${count} bags.`);
    return count;
  }
  // console.log(processedInput.filter((a) => a.childrenNames[0] === "o other"));
  // console.log(processedInput.length);
  // console.log(_.uniq(processedInput.map((a) => a.name)).length);

  return countTotalBags("shiny gold") - 1;
}

const processedInput = inputSetup();
// console.log(partOne());
console.log(partTwo());
