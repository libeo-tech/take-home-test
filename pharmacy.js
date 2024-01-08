export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }

  decreaseBenefit(drug) {
    drug.benefit = drug.benefit - 1;
  }

  increaseBenefit(drug) {
    drug.benefit = drug.benefit + 1;
  }

  decreaseExpiresIn(drug) {
    drug.expiresIn = drug.expiresIn - 1;
  }

  updateBenefitValue() {
    this.drugs.forEach(drug => {
      switch (drug.name) {
        case "Herbal Tea":
          this.decreaseExpiresIn(drug);
          if (drug.benefit < 50) this.increaseBenefit(drug);
          if (drug.expiresIn < 0 && drug.benefit < 50)
            this.increaseBenefit(drug);
          break;
        case "Fervex":
          this.decreaseExpiresIn(drug);
          if (drug.benefit < 50) this.increaseBenefit(drug);
          if (drug.expiresIn < 11 && drug.benefit < 50)
            this.increaseBenefit(drug);
          if (drug.expiresIn < 6 && drug.benefit < 50)
            this.increaseBenefit(drug);
          if (drug.expiresIn < 0) drug.benefit = drug.benefit - drug.benefit;
          break;
        case "Magic Pill":
          drug.benefit = drug.benefit;
          drug.expiresIn = drug.expiresIn;
          break;
        default:
          this.decreaseExpiresIn(drug);
          if (drug.benefit > 0) {
            this.decreaseBenefit(drug);
          }
      }
    });

    return this.drugs;
  }
}
