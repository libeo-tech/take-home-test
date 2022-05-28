export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
}

const herbalTea = "Herbal Tea";
const fervex = "Fervex";
const magicPill = "Magic Pill";

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

  updateDrug(drug) {
    if (drug.name == herbalTea) {
      drug.expiresIn--;
      if (drug.expiresIn < 0) {
        drug.benefit += 2;
      } else {
        drug.benefit++;
      }
      if (drug.benefit > 50) {
        drug.benefit = 50;
      }
      return;
    }

    if (drug.name != fervex) {
      if (drug.benefit > 0) {
        if (drug.name != magicPill) {
          drug.benefit = drug.benefit - 1;
        }
      }
    } else {
      if (drug.benefit < 50) {
        drug.benefit = drug.benefit + 1;
        if (drug.name == fervex) {
          if (drug.expiresIn < 11) {
            if (drug.benefit < 50) {
              drug.benefit = drug.benefit + 1;
            }
          }
          if (drug.expiresIn < 6) {
            if (drug.benefit < 50) {
              drug.benefit = drug.benefit + 1;
            }
          }
        }
      }
    }
    if (drug.name != magicPill) {
      drug.expiresIn = drug.expiresIn - 1;
    }
    if (drug.expiresIn < 0) {
      if (drug.name != herbalTea) {
        if (drug.name != fervex) {
          if (drug.benefit > 0) {
            if (drug.name != magicPill) {
              drug.benefit = drug.benefit - 1;
            }
          }
        } else {
          drug.benefit = drug.benefit - drug.benefit;
        }
      }
    }
  }
}
