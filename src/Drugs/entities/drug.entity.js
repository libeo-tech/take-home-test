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
    if (this.isExpired()) {
      this.setBenefit(this.benefit - 2);
    } else {
      this.setBenefit(this.benefit - 1);
    }
  }

  /**
   * Set the value benefit.
   * @param {number} benefit value which denotes how powerful the drug is.
   */
  setBenefit(benefit) {
    if (benefit < 0) {
      this.benefit = 0;
    } else if (benefit > 50) {
      this.benefit = 50;
    } else {
      this.benefit = benefit;
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

  /**
   * Check if the expiresIn is negative.
   * @returns {boolean}
   */
  isExpired() {
    return this.expiresIn < 0;
  }
}
