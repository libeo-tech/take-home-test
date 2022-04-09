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

  updateDrugExpiresIn = () => {
    const newExpiresIn = this.expiresIn--;

    return newExpiresIn;
  };

  updateDrugBenefit = () => {
    const newBenefit = this.benefit--;

    return newBenefit;
  };
}
