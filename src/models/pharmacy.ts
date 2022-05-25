import { Drug } from "./drug";
export class Pharmacy {
  MAX_BENEFIT = 50;

  drugs: Drug[];

  constructor(drugs: Drug[] = []) {
    this.drugs = drugs;
  }

  startSimulation(maxElapsedDays: number = 30): string[] {
    const log = [];
    for (let elapsedDays = 0; elapsedDays < maxElapsedDays; elapsedDays++) {
      log.push(JSON.stringify(this.updateBenefitValue()));
    }
    return log;
  }

  updateBenefitValue(): Drug[] {
    let currentDrug;
    for (var i = 0; i < this.drugs.length; i++) {
      currentDrug = this.drugs[i];
      currentDrug.updateExpirationDate();
      currentDrug.updateBenefit();
    }

    return this.drugs;
  }
}
