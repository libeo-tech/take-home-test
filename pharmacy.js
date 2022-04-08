import { benefitEvolutionRules, DEFAULT, MAGIC_PILL } from "./drug";

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  updateBenefitValue() {
    for (var i = 0; i < this.drugs.length; i++) {
      const { expiresIn, benefit, name } = this.drugs[i];

      if (name != MAGIC_PILL) {
        this.drugs[i].expiresIn = expiresIn - 1;
      }

      if (this.drugs[i].canUpdateBenefit()) {
        const benefitRule =
          benefitEvolutionRules[name] || benefitEvolutionRules[DEFAULT];
        this.drugs[i].benefit = benefitRule(benefit, expiresIn);
        this.drugs[i].checkBenefit();
      }
    }

    return this.drugs;
  }
}
