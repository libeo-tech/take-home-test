export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  updateBenefitValue() {
    for (var i = 0; i < this.drugs.length; i++) {
      this.drugs[i].updateDrugValues();
    }

    return this.drugs.map(drug => ({
      name: drug.name,
      expiresIn: drug.expiresIn,
      benefit: drug.benefit
    }));
  }
}
