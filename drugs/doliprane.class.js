import Drug from "./drug.class";

export default class Doliprane extends Drug {
  constructor(expiresIn, benefit) {
    super("Doliprane", expiresIn, benefit);
  }

  updateBenefitValue() {
    this.decrementExpirationDate();

    this.decrementBenefit();
  }
}
