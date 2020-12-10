import fs from "fs";
import path from "path";
import axios from "axios";
import { YEAR } from "./constants.js";
export async function loadOrGetInputFile(id) {
  if (id.length < 2) {
    id = id.padStart(2, "0");
  }
  const inputRelPath = `../inputs/input-${id}.txt`;
  const hasCustomInputPath = !!process.argv[2];
  const inputFileName =
    process.argv[2] ?? path.resolve(process.argv[1], inputRelPath);
  let input;
  if (hasCustomInputPath) {
    if (!fs.existsSync(hasCustomInputPath)) {
      console.error(`Custom input file ${hasCustomInputPath} does not exist`);
      process.exit(1);
    } else {
      input = fs.readFileSync(inputFileName, "utf-8");
    }
  } else {
    if (fs.existsSync(inputFileName)) {
      input = fs.readFileSync(inputFileName, "utf-8");
    } else {
      console.log("Retrieving input from adventofcode.com");
      const sessionTokenPath = path.resolve(
        process.argv[1],
        "../session_token.txt"
      );
      const session_token = fs.readFileSync(sessionTokenPath, "utf-8").trim();
      input = await axios
        .get(`https://adventofcode.com/${YEAR}/day/${id}/input`, {
          headers: {
            Cookie: `session=${session_token}`,
          },
        })
        .then((data) => {
          fs.writeFileSync(inputFileName, data.data, "utf-8");
          return data.data;
        })
        .catch((err) => {
          console.log(err);
          console.error("Unable to fetch input from Advent of Code website.");
          process.exit(1);
        });
    }
  }
  return input;
}
