import { Drug, Pharmacy } from "./pharmacy";
import { writeFile } from "fs";

const drugs = [
  new Drug("Doliprane", 20, 30),
  new Drug("Herbal Tea", 10, 5),
  new Drug("Fervex", 5, 40),
  new Drug("Magic Pill", 15, 40),
];
const trial = new Pharmacy(drugs);

const log = [];

for (let elapsedDays = 0; elapsedDays < 30; elapsedDays++) {
  log.push(structuredClone(trial.updateBenefitValue()));
}

/* eslint-disable no-console */
writeFile("output.json", JSON.stringify(log, null, 2), (err) => {
  if (err) {
    console.log("error");
  } else {
    console.log("success");
  }
});
/* eslint-enable no-console */
