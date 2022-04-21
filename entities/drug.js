import { DRUG_NAME } from '../constant';

export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  updateBenefit(addedValue) {
    this.benefit = Math.max(Math.min(this.benefit + addedValue, 50), 0);
  }

  update() {
    if (this.name === DRUG_NAME.MAGIC_PILL) {
      return this;
    }

    this.expiresIn = this.expiresIn - 1;

    if (this.name === DRUG_NAME.HERBAL_TEA) {
      this.updateBenefit(this.expiresIn < 0 ? 2 : 1);
    } else if (this.name === DRUG_NAME.FERVEX) {
      this.updateBenefit(
        this.expiresIn < 0
          ? -this.benefit
          : this.expiresIn < 5
          ? 3
          : this.expiresIn < 10
          ? 2
          : 0
      );
    } else if (this.name === DRUG_NAME.DAFALGAN) {
      this.updateBenefit(this.expiresIn < 0 ? -4 : -2);
    } else {
      this.updateBenefit(this.expiresIn < 0 ? -2 : -1);
    }

    return this;
  }
}
