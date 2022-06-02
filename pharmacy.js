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

  updateMinMax(drug) {
    if (drug.benefit < 0) drug.benefit = 0;
    else if (drug.benefit > 50) drug.benefit = 50;
  }

  updateDefault(drug) {
    drug.benefit -= drug.expiresIn > 0 ? 1 : 2;
  }

  updateHerbalTea(drug) {
    drug.benefit += drug.expiresIn > 0 ? 1 : 2;
  }

  updateFervex(drug) {
    if (drug.expiresIn > 10) drug.benefit += 1;
    else if (drug.expiresIn > 5) drug.benefit += 2;
    else if (drug.expiresIn > 0) drug.benefit += 3;
    else drug.benefit = 0;
  }

  updateDafalgan(drug) {
    drug.benefit -= drug.expiresIn > 0 ? 2 : 4;
  }

  updateBenefitValue() {
    for (var i = 0; i < this.drugs.length; i++) {
      var drug = this.drugs[i];
      switch (drug.name) {
        case "Magic Pill":
          continue;
        case "Herbal Tea":
          this.updateHerbalTea(drug);
          break;
        case "Fervex":
          this.updateFervex(drug);
          break;
        case "Dafalgan":
          this.updateDafalgan(drug);
          break;
        default:
          this.updateDefault(drug);
      }
      drug.expiresIn--;
      this.updateMinMax(drug);
    }
    return this.drugs;
  }
}
