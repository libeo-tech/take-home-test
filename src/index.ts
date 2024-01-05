import * as fs from 'fs';
import { Drug, NormalDrug, HerbalTea, Fervex, MagicPill } from "./domain/Drugs";
import { Pharmacy } from "./domain/Pharmacy";

const drugs: Drug[] = [
  NormalDrug.New("Doliprane", 20, 30),
  HerbalTea.New(10, 5),
  Fervex.New(5, 40),
  MagicPill.New(15, 40)
];

const trial = Pharmacy.Rehydrate(drugs);

const log = [];

function replacer_ignore_consts(key, value)
{
  const fieldToIngores: string[]  = [
    "minimumBenefit",
    "maximumBenefit",
    "defaultBenefitIncrease",
    "defaultBenefitDecrease"
  ];

  if(fieldToIngores.some((field) => field == key))
    return undefined;  
  
  return value;
}

for (let elapsedDays = 0; elapsedDays < 30; elapsedDays++) {
  trial.updateBenefitsOfDrugsAfterOneDay();
  log.push(JSON.stringify(trial.drugs, replacer_ignore_consts));
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
