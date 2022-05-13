/**
 * This base class Drug has the basic behavior:
 *  - At the end of each day our system lowers both values for every drug
 *  - The Benefit of an item is never negative.
 *  - Once the expiration date has passed, Benefit degrades twice as fast.
 */

export class Drug {
  name: string;
  expiresIn: number;
  benefit: number;

  constructor(name: string, expiresIn: number, benefit: number) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit > 50 ? 50 : benefit < 0 ? 0 : benefit;
  }

  hasExpired() {
    return this.expiresIn <= 0;
  }

  updateBenefit(variation: number) {
    const newBenefit = this.benefit + variation;
    this.benefit = newBenefit > 50 ? 50 : newBenefit < 0 ? 0 : newBenefit;
  }
  updateOwnBenefitValue() {
    const benefitVariation = this.hasExpired() ? -2 : -1;
    this.updateBenefit(benefitVariation);
    this.expiresIn--;
  }
}

/**
 * Derived class allow for specific behavior regarding benefits and expiration.
 */

export class HerbalTea extends Drug {
  updateOwnBenefitValue() {
    const benefitVariation = this.hasExpired() ? 2 : 1;
    this.updateBenefit(benefitVariation);
    this.expiresIn--;
  }
}

export class Fervex extends Drug {
  updateOwnBenefitValue() {
    if (this.hasExpired()) {
      this.benefit = 0;
    } else {
      let benefitVariation = 1;
      if (this.expiresIn > 5 && this.expiresIn <= 10) {
        benefitVariation = 2;
      } else if (this.expiresIn > 0 && this.expiresIn <= 5) {
        benefitVariation = 3;
      }
      this.updateBenefit(benefitVariation);
    }
    this.expiresIn--;
  }
}

export class MagicPill extends Drug {
  /**
   * This method is intentionally left empty because the behavior of this class
   * is:
   *  - "Magic Pill" never expires nor decreases in Benefit.
   */
  updateOwnBenefitValue() {}
}

export class Dafalgan extends Drug {
  updateOwnBenefitValue() {
    const benefitVariation = this.hasExpired() ? -4 : -2;
    this.updateBenefit(benefitVariation);
    this.expiresIn--;
  }
}
