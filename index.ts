import fs from "fs";
import { Dafalgan } from "./drugs/dafalgan";
import { Doliprane } from "./drugs/doliprane";
import { Drug } from "./drugs/drug";
import { Fervex } from "./drugs/fervex";
import { HerbalTea } from "./drugs/herbalTea";
import { MagicPill } from "./drugs/magicPill";
import { Pharmacy } from "./pharmacy";

const drugs: Drug[] = [
  new Doliprane(20, 30),
  new HerbalTea(10, 5),
  new Fervex(5, 40),
  new MagicPill(15, 40),
  new Dafalgan(10, 30)
];

const trial: Pharmacy = new Pharmacy(drugs);

const log: string[] = [];

const replacer = (key: string, value: string): any => {
  if ('minBenefit' === key || 'maxBenefit' === key || 'isExpired' === key) {
    return undefined;
  }
  return value;
};

for (let elapsedDays = 0; elapsedDays < 30; elapsedDays++) {
  log.push(JSON.stringify(trial.updateBenefitValue(), replacer));
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
