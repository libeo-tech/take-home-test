export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    if (benefit > 50) {
      benefit = 50;
    }
    this.benefit = benefit;
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }

  updateBenefitValue() {
    for (var i = 0; i < this.drugs.length; i++) {
      let drug = this.drugs[i];
      if (drug.name === "Magic Pill") continue;
      switch (drug.name) {
        case "Herbal Tea":
          drug = this.handleHerbalTea(drug);
          break;
        case "Fervex":
          drug = this.handleFervex(drug);
          break;
        default:
          drug = this.handleDefaultStrategyDrug(drug);
          break;
      }
      drug = this.checkBoundaries(drug);
      drug.expiresIn--;
    }
    return this.drugs;
  }

  checkBoundaries(drug) {
    if (drug.benefit < 0) drug.benefit = 0;
    if (drug.benefit > 50) drug.benefit = 50;
    return drug;
  }

  handleHerbalTea(drug) {
    if (drug.expiresIn <= 0) {
      drug.benefit += 2;
    } else {
      drug.benefit++;
    }
    return drug;
  }

  handleFervex(drug) {
    if (drug.expiresIn <= 0) {
      drug.benefit = 0;
    } else if (drug.expiresIn <= 5) {
      drug.benefit += 3;
    } else if (drug.expiresIn <= 10) {
      drug.benefit += 2;
    } else {
      drug.benefit++;
    }
    return drug;
  }

  handleDefaultStrategyDrug(drug) {
    if (drug.expiresIn <= 0) {
      drug.benefit -= 2;
    } else {
      drug.benefit--;
    }
    return drug;
  }
}
