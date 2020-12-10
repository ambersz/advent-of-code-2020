import fs from "fs";
import { loadOrGetInputFile } from "./common";
var myArgs = process.argv.slice(2);
const day = myArgs[0];
if (day === undefined) console.error("invalid day argument"), process.exit(1);
const suffix = parseInt(day).toString().padStart(2, "0");

fs.readFile("./template.js", "utf-8", (err, data) => {
  if (err) {
    return console.log(err);
  }
  const codePath = `./${suffix}.js`;
  if (fs.existsSync(codePath)) {
    console.log("code file already exists, skipping code templating");
  } else {
    const customizedTemplate = data.replace("##", suffix);
    fs.writeFile(codePath, customizedTemplate, null, (err) => {
      if (err) console.log(err);
    });
  }
});

loadOrGetInputFile(suffix);