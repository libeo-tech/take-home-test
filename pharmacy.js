"use strict";

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
  updateBenefitValue() {
    let name;
    let benefit;
    let expiresIn;
    for (var i = 0; i < this.drugs.length; i++) {
      name = this.drugs[i].name;
      benefit = this.drugs[i].benefit;
      expiresIn = this.drugs[i].expiresIn;

      // "Magic Pill" never expires nor decreases in Benefit
      if (name != "Magic Pill") {
        if (
          name != "Herbal Tea" &&
          name != "Fervex"
        ) {
          if (benefit > 0) {
            benefit--;
            if (name == "Dafalgan") {
              benefit--;
            }
          }
        } else {
          if (benefit < 50) {
            benefit++;
            if (name == "Fervex") {
              if (expiresIn < 11) {
                benefit++;
              }
              if (expiresIn < 6) {
                benefit++;
              }
            }
          }
        }

        if (expiresIn > 0) expiresIn--;

        if (expiresIn < 0) {
          if (name == "Herbal Tea") {
            if (benefit < 50) {
              benefit = benefit + 2;
            }
          }

          if (name == "Fervex") {
            benefit = 0
          }
        }
      }

      this.drugs[i].name = name;
      this.drugs[i].expiresIn = expiresIn;
      this.drugs[i].benefit = benefit;
    }

    return this.drugs;
  }
}
