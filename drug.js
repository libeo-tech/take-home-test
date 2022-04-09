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
    return this.expiresIn--;
  }

  updateDrugBenefit() {
    if (this.expiresIn < 0) {
      return (this.benefit -= 2);
    }

    return this.benefit--;
  }
}
