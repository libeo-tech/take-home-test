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
    if ([DRUG_NAME.HERBAL_TEA, DRUG_NAME.FERVEX].includes(this.name)) {
      this.updateBenefit(1);
      if (this.name === DRUG_NAME.FERVEX) {
        if (this.expiresIn < 11) {
          this.updateBenefit(1);
        }
        if (this.expiresIn < 6) {
          this.updateBenefit(1);
        }
      }
    } else if (this.name !== DRUG_NAME.MAGIC_PILL) {
      this.updateBenefit(-1);
    }

    if (this.name !== DRUG_NAME.MAGIC_PILL) {
      this.expiresIn = this.expiresIn - 1;
    }

    if (this.expiresIn < 0) {
      if (this.name === DRUG_NAME.HERBAL_TEA) {
        this.updateBenefit(1);
      } else if (this.name === DRUG_NAME.FERVEX) {
        this.updateBenefit(-this.benefit);
      } else if (this.name !== DRUG_NAME.MAGIC_PILL) {
        this.updateBenefit(-1);
      }
    }

    return this;
  }
}
