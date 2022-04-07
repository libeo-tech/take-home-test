import Drug from "./drug.class";

export default class Dafalgan extends Drug {
  constructor(expiresIn, benefit) {
    super("Dafalgan", expiresIn, benefit, 2);
  }

  updateBenefitValue() {
    this.decrementExpirationDate();

    this.decrementBenefit();
  }
}
