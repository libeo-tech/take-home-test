const minBenefit = 0;
const maxBenefit = 50;
const specialDrugs = ["Herbal Tea", "Fervex", "Magic Pill", "Dafalgan"];

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }

  updateBenefitValue() {
    const updatedDrugs = this.drugs.map(drug => {
      // decrement expiresIn
      if (drug.name !== "Magic Pill") drug.expiresIn--;

      // decreasing normal drugs benefit value
      if (!specialDrugs.includes(drug.name)) {
        drug.benefit = Math.max(
          drug.benefit - (drug.expiresIn < 0 ? 2 : 1),
          minBenefit
        );
      } else {
        // Specific rules for special drugs
        if (drug.name === "Herbal Tea") {
          drug.benefit = Math.min(
            drug.benefit + (drug.expiresIn < 0 ? 2 : 1),
            maxBenefit
          );
        } else if (drug.name === "Fervex") {
          drug.benefit =
            drug.expiresIn > -1
              ? Math.min(
                  drug.benefit +
                    (drug.expiresIn > 10
                      ? 1
                      : drug.expiresIn <= 10 && drug.expiresIn > 5
                      ? 2
                      : 3),
                  maxBenefit
                )
              : 0;
        } else if (drug.name === "Dafalgan") {
          drug.benefit = Math.max(
            drug.benefit - (drug.expiresIn < 0 ? 4 : 2),
            minBenefit
          );
        }
      }
      return drug;
    });
    // Assigning updated list to the Pharmacy's drug list
    this.drugs = updatedDrugs;
    return this.drugs;
  }
}

export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
}
