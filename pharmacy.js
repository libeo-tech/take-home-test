import { herbalTeaLogic, magicPillLogic, fervexLogic, dafalganLogic, drugLogic } from "./drugLogics";

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
    for (let i = 0; i < this.drugs.length; i++) {
      let resultLogic;
      switch (this.drugs[i].name) {
        case "Herbal Tea":
          resultLogic = herbalTeaLogic(this.drugs[i].expiresIn, this.drugs[i].benefit);
          break;
        case "Magic Pill":
          resultLogic = magicPillLogic(this.drugs[i].expiresIn, this.drugs[i].benefit);
          break;
        case "Fervex":
          resultLogic = fervexLogic(this.drugs[i].expiresIn, this.drugs[i].benefit);
          break;
        case "Dafalgan":
          resultLogic = dafalganLogic(this.drugs[i].expiresIn, this.drugs[i].benefit);
          break;
        default:
          resultLogic = drugLogic(this.drugs[i].expiresIn, this.drugs[i].benefit);
          break;
      }
      this.drugs[i].expiresIn = resultLogic[0];
      this.drugs[i].benefit = resultLogic[1];
    }
    return this.drugs;
  }
}
