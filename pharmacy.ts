import { Drug } from "./drugs/drug";

export class Pharmacy {
  drugs: Drug[];

  constructor(drugs: Drug[] = []) {
    this.drugs = drugs;
  }

  updateBenefitValue(): Drug[] {
    this.drugs.forEach(drug => {
      drug.updateDrug();
    });

    return this.drugs;
  }
}
