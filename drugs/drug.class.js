export default class Drug {
  static MAX_BENEFIT_VALUE = 50;
  static MIN_BENEFIT_VALUE = 0;
  static BENEFIT_INCREMENT_VALUE = 1;
  static EXPIRED_DATE_VALUE = 0;

  constructor(
    name,
    expiresIn,
    benefit,
    expirationCoefficient = 1,
    isExpired = false
  ) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
    this.expirationCoefficient = expirationCoefficient;
    this.isExpired = isExpired;
  }

  decrementExpirationDate() {
    this.expiresIn -= 1;

    if (this.expiresIn < Drug.EXPIRED_DATE_VALUE && this.isExpired === false) {
      this.isExpired = true;

      this.expirationCoefficient *= 2;
    }
  }

  incrementBenefit() {
    const newBenefit = this.benefit + this.calculateBenefit();

    if (newBenefit <= Drug.MAX_BENEFIT_VALUE) {
      this.benefit = newBenefit;
    } else if (newBenefit > Drug.MAX_BENEFIT_VALUE) {
      this.benefit = Drug.MAX_BENEFIT_VALUE;
    }
  }

  decrementBenefit() {
    const newBenefit = this.benefit - this.calculateBenefit();

    if (newBenefit >= Drug.MIN_BENEFIT_VALUE) {
      this.benefit = newBenefit;
    } else if (newBenefit < Drug.MIN_BENEFIT_VALUE) {
      this.benefit = Drug.MIN_BENEFIT_VALUE;
    }
  }

  calculateBenefit() {
    const terms = Drug.BENEFIT_INCREMENT_VALUE * this.expirationCoefficient;

    return terms;
  }

  updateBenefitValue() {}

  format({ name, expiresIn, benefit }) {
    return { name, expiresIn, benefit };
  }
}
