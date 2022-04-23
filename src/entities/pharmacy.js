import { DrugName } from "./drug";

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }

  updateBenefitValue() {
    this.drugs.forEach(drug => {
      // Update drugs benefits
      switch (drug.name) {
        case DrugName.MAGIC_PILL:
          break;

        case DrugName.DOLIPRANE:
        default:
          drug.updateBenefit(!drug.isExpired() ? -1 : -2);
          break;

        case DrugName.HERBAL_TEA:
          drug.updateBenefit(!drug.isExpired() ? 1 : 2);
          break;

        case DrugName.FERVEX:
          if (drug.isExpired()) {
            drug.resetBenefit();
          } else if (drug.expiresIn <= 5) {
            drug.updateBenefit(3);
          } else if (drug.expiresIn <= 10) {
            drug.updateBenefit(2);
          } else {
            drug.updateBenefit(1);
          }
          break;

        case DrugName.DAFALGAN:
          drug.updateBenefit(-2);
          break;
      }

      // Update drugs expiracy
      if (drug.name !== DrugName.MAGIC_PILL) {
        drug.expiresIn -= 1;
      }
    });
    return this.drugs;
  }
}
