export const DRUG_MAX_BENEFIT = 50;
export const DRUG_MIN_BENEFIT = 0;

export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  updateBenefit(delta) {
    this.benefit += delta;
    if (this.benefit < 0) {
      this.benefit = DRUG_MIN_BENEFIT;
    } else if (this.benefit > DRUG_MAX_BENEFIT) {
      this.benefit = DRUG_MAX_BENEFIT;
    }
  }

  resetBenefit() {
    this.benefit = DRUG_MIN_BENEFIT;
  }

  isExpired() {
    return this.expiresIn <= 0;
  }
}

export const DrugName = {
  DOLIPRANE: "Doliprane",
  HERBAL_TEA: "Herbal Tea",
  FERVEX: "Fervex",
  MAGIC_PILL: "Magic Pill"
};
