import { Drug } from './drug'
export {Drug}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }

  updateBenefitValue() {
    this.drugs.forEach(drug =>
      drug.updateBenefit()
    );

    return this.drugs;
  }
}
