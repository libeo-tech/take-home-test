import * as constants from "../constants";

class Drug {
  expiresIn: number;
  benefit: number;

  constructor(expiresIn: number, benefit: number) {
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  decreaseBenefit(): void {
    const degradationRate: number =
      this.expiresIn < constants.EXPIRATION_THRESHOLD
        ? constants.DEGRADATION_EXPIRED
        : constants.DEGRADATION_NORMAL;
    this.benefit -= degradationRate;
  }

  decreaseBenefitTwice(): void {
    this.benefit -= constants.DEGRADATION_EXPIRED;
  }

  handleExpiration(): void {
    if (this.expiresIn < constants.EXPIRATION_THRESHOLD) {
      this.benefit -= constants.DEGRADATION_NORMAL;
    }
  }

  increaseBenefit(): void {
    this.benefit +=
      this.expiresIn < constants.EXPIRATION_THRESHOLD
        ? constants.DEGRADATION_EXPIRED
        : constants.DEGRADATION_NORMAL;
  }

  ensureBenefitBounds(): void {
    this.benefit = Math.max(
      0,
      Math.min(this.benefit, constants.BENEFIT_UPPER_BOUND)
    );
  }

  isExpired(): boolean {
    return this.expiresIn < constants.EXPIRATION_THRESHOLD;
  }
}

export default Drug;
