import fs from 'fs';

import { Drug, Pharmacy } from './entities';
import { DRUG_NAME } from './constant';

const drugs = [
  new Drug(DRUG_NAME.DOLIPRANE, 20, 30),
  new Drug(DRUG_NAME.HERBAL_TEA, 10, 5),
  new Drug(DRUG_NAME.FERVEX, 5, 40),
  new Drug(DRUG_NAME.MAGIC_PILL, 15, 40),
];
const trial = new Pharmacy(drugs);

const log = [];

for (let elapsedDays = 0; elapsedDays < 30; elapsedDays++) {
  log.push(JSON.stringify(trial.updateBenefitValue()));
}

/* eslint-disable no-console */
fs.writeFile('output.txt', log.toString(), (err) => {
  if (err) {
    console.log('error');
  } else {
    console.log('success');
  }
});
/* eslint-enable no-console */
