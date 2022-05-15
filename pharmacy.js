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

  incrementBenefit(drug, number) {
    while (drug.benefit < 50 && number--) {
      drug.benefit++;
    }
  }

  decrementBenefit(drug, number) {
    while (drug.benefit > 0 && number--) {
      drug.benefit--;
    }
  }

  decrementExpiresIn(drug) {
    drug.expiresIn--;
  }

  beforeExpiration(drug) {
    const name = drug.name;
    const expiration = drug.expiresIn;
    const benefit = drug.benefit;

    if (benefit === 0) {
      return;
    }

    switch (name) {
      case "Herbal Tea":
        if (benefit < 50) {
          this.incrementBenefit(drug, 1);
        }
        break;
      case "Fervex":
        if (benefit < 50) {
          if (expiration >= 10) {
            this.incrementBenefit(drug, 1);
          }
          else if (expiration >= 5) {
            this.incrementBenefit(drug, 2);
          } else {
            this.incrementBenefit(drug, 3);
          }
        }
        break;
      case "Dafalgan":
        this.decrementBenefit(drug, 2);
        break;
      default:
        this.decrementBenefit(drug, 1);
    }
  }

  afterExpiration(drug) {
    const name = drug.name;

    switch (name) {
      case "Herbal Tea":
        this.incrementBenefit(drug, 2);
        break;
      case "Fervex":
        drug.benefit = 0;
        break;
      case "Dafalgan":
        this.decrementBenefit(drug, 4);
        break;
      default:
        this.decrementBenefit(drug, 2);
    }
  }

  updateBenefitValue() {
    for (var i = 0; i < this.drugs.length; i++) {
      const drug = this.drugs[i];

      if (drug.name === "Magic Pill") {
        continue;
      }

      this.decrementExpiresIn(drug);

      if (drug.expiresIn >= 0) {
        this.beforeExpiration(drug);
      } else {
        this.afterExpiration(drug);
      }
    }

    return this.drugs;
  }
}
