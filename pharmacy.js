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
    for (var i = 0; i < this.drugs.length; i++) {
      let drug = this.drugs[i] // Get drug at position i
      if (drug.name == "Magic Pill") continue; // Nothing to do

      switch (drug.name) {
        case "Herbal Tea":
          if (drug.expiresIn <= 0) drug.benefit += 2;
          else drug.benefit++;
          break;

        case "Fervex":
          if (drug.expiresIn <= 0) drug.benefit = 0;
          else if (drug.expiresIn <= 5) drug.benefit += 3;
          else if (drug.expiresIn <= 10) drug.benefit += 2;
          break;
        
        case "Dafalgan":
          if (drug.expiresIn <= 0) drug.benefit -= 4;
          else drug.benefit -= 2;
          break;
        
        default:
          if (drug.expiresIn <= 0) drug.benefit -= 2;
          else drug.benefit--;
      }

      // Checking boundaries
      if (drug.benefit < 0) drug.benefit = 0;
      if (drug.benefit > 50) drug.benefit = 50;

      drug.expiresIn--; // Decrement expiration date
    }

    return this.drugs;
  }
}
