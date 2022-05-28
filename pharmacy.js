export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
}

export const herbalTea = "Herbal Tea";
export const fervex = "Fervex";
export const magicPill = "Magic Pill";
export const dafalgan = "Dafalgan";

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  updateBenefitValue() {
    for (var i = 0; i < this.drugs.length; i++) {
      this.updateDrug(this.drugs[i]);
    }

    return this.drugs;
  }

  checkDrug(drug) {
    if (drug.benefit > 50) {
      drug.benefit = 50;
    }
    if (drug.benefit < 0) {
      drug.benefit = 0;
    }
  }

  updateDrug(drug) {
    switch (drug.name) {
      case herbalTea:
        drug.expiresIn--;
        if (drug.expiresIn < 0) {
          drug.benefit += 2;
        } else {
          drug.benefit++;
        }
        break;

      case magicPill:
        break;

      case fervex:
        drug.expiresIn--;
        if (drug.expiresIn < 0) {
          drug.benefit = 0;
        } else if (drug.expiresIn < 6) {
          drug.benefit += 3;
        } else if (drug.expiresIn < 11) {
          drug.benefit += 2;
        } else {
          drug.benefit++;
        }
        break;

      case dafalgan:
        drug.expiresIn--;
        if (drug.expiresIn >= 0) {
          drug.benefit -= 2;
        } else {
          drug.benefit -= 4;
        }
        break;

      default:
        drug.expiresIn--;
        if (drug.expiresIn >= 0) {
          drug.benefit--;
        } else {
          drug.benefit -= 2;
        }
        break;
    }
    this.checkDrug(drug);
  }
}
