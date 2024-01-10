export class Drug {
  /**
   * Drug class.
   * @param {string} name name of the drug.
   * @param {number} expiresIn value which denotes the number of days we have until the item expires.
   * @param {number} benefit value which denotes how powerful the drug is.
   */
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  /**
   * Set the value of benefit.
   */
  updateBenefit() {
    if (this.benefit > 0) {
      if (this.expiresIn >= 0) {
        --this.benefit;
      } else {
        this.benefit = this.benefit - 2;
        if (this.benefit < 0) {
          this.benefit = 0;
        }
      }
    }
  }

  /**
   * Update the value of expiresIn.
   */
  updateExpiresIn() {
    --this.expiresIn;
  }

  /**
   * Update the benefit and expiresIn.
   */
  update() {
    this.updateExpiresIn();
    this.updateBenefit();
  }
}
