export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
}

const MIN_BENEFIT = 0;
const MAX_BENEFIT = 50;

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
    this.updateBenefitValue.bind(this);
  }

  updateBenefitValue() {
    const updatedDrugs = this.drugs.map((drug) => {
      switch (drug.name) {
        // "Herbal Tea" actually increases in Benefit the older it gets.
        // Benefit increases twice as fast after the expiration date.
        case "Herbal Tea":
          drug.benefit = Math.min(
            drug.expiresIn <= 0 ? drug.benefit + 2 : drug.benefit + 1,
            MAX_BENEFIT
          );

          break;

        // "Fervex", like Herbal Tea, increases in Benefit as its expiration date approaches.
        // Benefit increases by 2 when there are 10 days or less and by 3 when there are 5 days or less
        // but Benefit drops to 0 after the expiration date.
        case "Fervex":
          if (drug.expiresIn <= 0) {
            drug.benefit = 0;
          } else if (drug.expiresIn <= 5) {
            drug.benefit = Math.min(drug.benefit + 3, MAX_BENEFIT);
          } else if (drug.expiresIn <= 10) {
            drug.benefit = Math.min(drug.benefit + 2, MAX_BENEFIT);
          } else {
            drug.benefit = Math.min(drug.benefit + 1, MAX_BENEFIT);
          }
          break;

        // "Magic Pill" never expires nor decreases in Benefit.
        case "Magic Pill":
          break;

        // once the expiration date has passed, Benefit degrades twice as fast.
        default:
          drug.benefit = Math.max(
            drug.expiresIn <= 0 ? drug.benefit - 2 : drug.benefit - 1,
            MIN_BENEFIT
          );
      }

      // decrease expiresIn
      if (drug.name != "Magic Pill") {
        drug.expiresIn -= 1;
      }

      return drug;
    });
    this.drugs = updatedDrugs;
    return this.drugs;
  }
}
