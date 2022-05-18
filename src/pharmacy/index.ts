import { Drug } from "../drug";

export class Pharmacy {
  drugs: Drug[];
  constructor(drugs: Drug[]) {
    // TODO validate ?
    this.drugs = drugs;
  }

  updateBenefitValue(): Drug[] {
    return this.drugs.map(drug => {
      drug.decreaseExpiration();
      drug.computeNextBenefit();
      return drug;
    });
  }
}
