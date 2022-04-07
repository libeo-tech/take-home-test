import Drug from "./drug.class";

export default class Fervex extends Drug {
  constructor(expiresIn, benefit) {
    super("Fervex", expiresIn, benefit);
  }

  decrementExpirationDate() {
    this.expiresIn -= 1;

    if (this.expiresIn < Drug.EXPIRED_DATE_VALUE && this.isExpired === false) {
      this.isExpired = true;
    }

    if (this.expiresIn < 5) {
      this.expirationCoefficient = 3;
    } else if (this.expiresIn < 10) {
      this.expirationCoefficient = 2;
    }
  }

  updateBenefitValue() {
    this.decrementExpirationDate();

    if (!this.isExpired) {
      this.incrementBenefit();
    } else if (this.benefit !== Drug.MIN_BENEFIT_VALUE) {
      this.benefit = Drug.MIN_BENEFIT_VALUE;
    }
  }
}
