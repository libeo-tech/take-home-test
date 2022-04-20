import * as fs from "fs";
import { Drug } from "./drug/entities/drug.entity";
import { Pharmacy } from "./pharmacy/entities/pharmacy.entity";
import { DrugNames } from "./types";

const drugs = [
  new Drug(DrugNames.DOLIPRANE, 20, 30),
  new Drug(DrugNames.HERBAL_TEA, 10, 5),
  new Drug(DrugNames.FERVEX, 5, 40),
  new Drug(DrugNames.MAGIC_PILL, 15, 40),
  new Drug(DrugNames.DAFALGAN, 10, 30), // new Drug
];
const trial = new Pharmacy(drugs);

const log = [];

for (let elapsedDays = 0; elapsedDays < 30; elapsedDays++) {
  log.push(JSON.stringify(trial.updateBenefitValue()));
}

/* eslint-disable no-console */
fs.writeFile("output.txt", log.toString(), (err) => {
  if (err) {
    console.log("error");
  } else {
    console.log("success");
  }
});
/* eslint-enable no-console */
