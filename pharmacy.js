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
    const benefitLimit = (num) => {
      if (num > 50) return 50;
      else if (num < 0) return 0;
      else return num;
    };

    for (var i = 0; i < this.drugs.length; i++) {
      const special = ["Magic Pill", "Fervex", "Herbal Tea"];
      this.drugs[i].expiresIn--;
      let { name, expiresIn } = this.drugs[i];
      let benefit = 0;

      if (!special.includes(name)) {
        if (expiresIn < 0) benefit -= 2;
        else benefit--;
        if (name === "Dafalgan") {
          benefit *= 2;
        }
      }

      switch (name) {
        case "Magic Pill":
          break;
        case "Fervex":
          if (expiresIn < 1) this.drugs[i].benefit = 0;
          else if (expiresIn < 5) benefit += 3;
          else if (expiresIn < 10) benefit += 2;
          else benefit += 1;
          break;
        case "Herbal Tea":
          if (expiresIn < 0) benefit += 2;
          else benefit += 1;
          break;
      }
      this.drugs[i].benefit = benefitLimit(this.drugs[i].benefit + benefit);
      return this.drugs;
    }
  }
}
