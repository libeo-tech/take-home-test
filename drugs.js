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
    if (this.expiresIn >= 1) {
      this.expiresIn--;
      this.benefit += this.benefitUpdateValue;
    } else {
      this.benefit += this.benefitUpdateValue * 2; // update the benefits twice as fast after the expiring date is passed
    }

    // correct the benefit value if it went below the min value
    if (this.benefit < this.benefitMinValue) {
      this.benefit = this.benefitMinValue;
    }
    // correct the benefit value if it went over the max value
    if (this.benefit > this.benefitMaxValue) {
      this.benefit = this.benefitMaxValue;
    }
    return this;
  }
}

export class HerbalTea extends Drug {
  constructor(name, expiresIn, benefit) {
    super(name, expiresIn, benefit);
    this.benefitUpdateValue = 1;
  }
}

export class MagicPill extends Drug {
  updateDrugValues() {
    return this;
  }
}
