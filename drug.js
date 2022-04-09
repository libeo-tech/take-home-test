export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  updateDrug() {
    return {
      name: this.name,
      expiresIn: this.updateDrugExpiresIn(),
      benefit: this.updateDrugBenefit(),
    };
  }

  updateDrugExpiresIn() {
    return this.expiresIn - 1;
  }

  updateDrugBenefit() {
    let newBenefit;

    if (this.expiresIn < 0) {
      newBenefit = this.benefit - 2;
    } else {
      newBenefit = this.benefit - 1;
    }

    return newBenefit > 0 ? newBenefit : 0;
  }
}
