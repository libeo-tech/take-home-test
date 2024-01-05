export default class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }

  updateBenefitValue() {
    return this.drugs.map(drug => {
      drug.updateBenefitValue();

      return drug.format(drug);
    });
  }
}
