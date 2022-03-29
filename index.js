import {Pharmacy} from "./app/pharmacy/pharmacy"
import fs from "fs";

const drugs = [
  ["Doliprane", 20, 30],
  ["Herbal Tea", 10, 5],
  ["Fervex", 5, 40],
  ["Magic Pill", 15, 40],
  ["Dafalgan", 50, 50],
];
const trial = new Pharmacy(drugs);

const log = [];

for (let elapsedDays = 0; elapsedDays < 30; elapsedDays++) {
  log.push(JSON.stringify(trial.updateDrugValues()));
}

/* eslint-disable no-console */
fs.writeFile("output.txt", log.toString(), err => {
  if (err) {
    console.log("error");
  } else {
    console.log("success");
  }
});
/* eslint-enable no-console */
