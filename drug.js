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
    const newExpiresIn = this.expiresIn - 1;

    return newExpiresIn;
  }

  updateDrugBenefit() {
    let newBenefit;
    let incrementor = 1;

    if (this.name === "Herbal Tea") {
      incrementor = -incrementor;
    }

    if (this.expiresIn < 0) {
      newBenefit = this.benefit - 2 * incrementor;
    } else {
      newBenefit = this.benefit - incrementor;
    }

    return newBenefit > 0 ? newBenefit : 0;
  }
}
