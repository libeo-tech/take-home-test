import Drug from "./drug.class";

export default class HerbalTea extends Drug {
  constructor(expiresIn, benefit) {
    super("Herbal Tea", expiresIn, benefit);
  }

  updateBenefitValue() {
    this.decrementExpirationDate();

    this.incrementBenefit();
  }
}
