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
        default:
          this.updateDefault(drug);
      }
      drug.expiresIn--;
      this.updateMinMax(drug);
      //   if (
      //     this.drugs[i].name != "Herbal Tea" &&
      //     this.drugs[i].name != "Fervex"
      //   ) {
      //     if (this.drugs[i].benefit > 0) {
      //       if (this.drugs[i].name != "Magic Pill") {
      //         this.drugs[i].benefit = this.drugs[i].benefit - 1;
      //       }
      //     }
      //   } else {
      //     if (this.drugs[i].benefit < 50) {
      //       this.drugs[i].benefit = this.drugs[i].benefit + 1;
      //       if (this.drugs[i].name == "Fervex") {
      //         if (this.drugs[i].expiresIn < 11) {
      //           if (this.drugs[i].benefit < 50) {
      //             this.drugs[i].benefit = this.drugs[i].benefit + 1;
      //           }
      //         }
      //         if (this.drugs[i].expiresIn < 6) {
      //           if (this.drugs[i].benefit < 50) {
      //             this.drugs[i].benefit = this.drugs[i].benefit + 1;
      //           }
      //         }
      //       }
      //     }
      //   }
      //   if (this.drugs[i].name != "Magic Pill") {
      //     this.drugs[i].expiresIn = this.drugs[i].expiresIn - 1;
      //   }
      //   if (this.drugs[i].expiresIn < 0) {
      //     if (this.drugs[i].name != "Herbal Tea") {
      //       if (this.drugs[i].name != "Fervex") {
      //         if (this.drugs[i].benefit > 0) {
      //           if (this.drugs[i].name != "Magic Pill") {
      //             this.drugs[i].benefit = this.drugs[i].benefit - 1;
      //           }
      //         }
      //       } else {
      //         this.drugs[i].benefit =
      //           this.drugs[i].benefit - this.drugs[i].benefit;
      //       }
      //     } else {
      //       if (this.drugs[i].benefit < 50) {
      //         this.drugs[i].benefit = this.drugs[i].benefit + 1;
      //       }
      //     }
      //   }
    }

    return this.drugs;
  }
}
