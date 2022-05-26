import * as fs from 'fs';
import Pharmacy from './src/pharmacy';
import Drug from './src/Model/Drug';

const drugs:Drug[] = [
  new Drug('Doliprane', 20, 30),
  new Drug('Herbal Tea', 10, 5),
  new Drug('Fervex', 5, 40),
  new Drug('Magic Pill', 15, 40),
];

const trial = new Pharmacy(drugs);
const log = [];

for (let elapsedDays = 0; elapsedDays < 30; elapsedDays += 1) {
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
