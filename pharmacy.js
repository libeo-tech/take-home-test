export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
}

// benefit's range
const minBenefit = 0;
const maxBenefit = 50;

// drugs with specific behaviors
const specialDrugs = ["Herbal Tea", "Fervex", "Magic Pill", "Dafalgan"];

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  updateBenefitValue() {
    for (var i = 0; i < this.drugs.length; i++) {
      // decrement expiresIn
      this.drugs[i].name !== "Magic Pill" && (this.drugs[i].expiresIn -= 1);

      // handle "normal drug"
      if (!specialDrugs.includes(this.drugs[i].name)) {
        this.drugs[i].benefit = Math.max(
          this.drugs[i].benefit - (this.drugs[i].expiresIn > 0 ? 1 : 2),
          minBenefit
        );
      }
      // handle "special drug"
      else {
        if (this.drugs[i].name == "Herbal Tea") {
          this.drugs[i].benefit = Math.min(
            this.drugs[i].benefit + (this.drugs[i].expiresIn >= 0 ? 1 : 2),
            maxBenefit
          );
        } else if (this.drugs[i].name == "Fervex") {
          this.drugs[i].benefit =
            this.drugs[i].expiresIn <= 0
              ? 0
              : Math.min(
                  this.drugs[i].benefit +
                    (this.drugs[i].expiresIn < 6
                      ? 3
                      : this.drugs[i].expiresIn < 11
                      ? 2
                      : 1),
                  maxBenefit
                );
        } else if (this.drugs[i].name == "Dafalgan") {
          this.drugs[i].benefit = Math.max(
            this.drugs[i].benefit - 2,
            minBenefit
          );
        }
      }
    }
    return this.drugs;
  }
}
