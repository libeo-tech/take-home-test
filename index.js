import { Drug, Pharmacy } from "./pharmacy";
import fs from "fs";

const drugs = [
  new Drug("Doliprane", 20, 30),
  new Drug("Herbal Tea", 10, 5),
  new Drug("Fervex", 5, 40),
  new Drug("Magic Pill", 15, 40)
];
const trial = new Pharmacy(drugs);
const log = [];

for (let elapsedDays = 0; elapsedDays < 30; elapsedDays++) {
  log.push(JSON.stringify(trial.updateBenefitValue()));
}

const stringLog = log.toString();
let multipleLineLog = "";
for(let i = 0; i < stringLog.length; i++){
  multipleLineLog += stringLog[i];
  if(stringLog[i]== ']') {
    multipleLineLog += "\n";
  }
}

/* eslint-disable no-console */
fs.writeFile("output.txt", multipleLineLog, err => {
  if (err) {
    console.log("error");
  } else {
    console.log("success");
  }
});
/* eslint-enable no-console */