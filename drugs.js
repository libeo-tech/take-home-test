export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
    this.benefitUpdateValue = -1;
    this.benefitMinValue = 0;
    this.benefitMaxValue = 50;
  }

  updateDrugValues() {
    // update benefit normaly and expiring date if it hasn't reached 0 yet
    if (this.expiresIn > 0) this.benefit += this.benefitUpdateValue;
    else this.benefit += this.benefitUpdateValue * 2; // update the benefits twice as fast after the expiring date is passed
    this.expiresIn--;
    this.correctBenefits();
    return this;
  }

  correctBenefits() {
    // correct the benefit value if it went below the min value
    if (this.benefit < this.benefitMinValue) {
      this.benefit = this.benefitMinValue;
    }
    // correct the benefit value if it went over the max value
    if (this.benefit > this.benefitMaxValue) {
      this.benefit = this.benefitMaxValue;
    }
  }
}

export class HerbalTea extends Drug {
  constructor(name, expiresIn, benefit) {
    super(name, expiresIn, benefit);
    this.benefitUpdateValue = 1;
  }
}

export class MagicPill extends Drug {
  // the values of Magis pill doesn't change over time
  updateDrugValues() {
    return this;
  }
}

export class Fervex extends Drug {
  updateDrugValues() {
    if (this.expiresIn <= 0) this.benefit = 0;
    if (this.expiresIn <= 5 && this.expiresIn > 0) this.benefit += 3;
    if (this.expiresIn > 5 && this.expiresIn <= 10) this.benefit += 2;
    if (this.expiresIn > 10) this.benefit++;
    this.expiresIn--;
    this.correctBenefits();
    return this;
  }
}

export class Dafalgan extends Drug {
  constructor(name, expiresIn, benefit) {
    super(name, expiresIn, benefit);
    this.benefitUpdateValue = -2;
  }
}
