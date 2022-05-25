import { Pharmacy } from "./models/pharmacy";
import * as fs from "fs";
import { getDrugs } from "./data/db";

const drugs = getDrugs();
const trial = new Pharmacy(drugs);

const log = trial.startSimulation(30);

/* eslint-disable no-console */
fs.writeFile("output.txt", log.toString(), err => {
  if (err) {
    console.log("error");
  } else {
    console.log("success");
  }
});
/* eslint-enable no-console */
