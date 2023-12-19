const MAX_BENEFIT = 50;
const MIN_BENEFIT = 0;

export class Drug {
  /**
   * @param {string} name
   * @param {number} expiresIn
   * @param {number} benefit
   */
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;

    /** @type {number} */
    this.benefit =
      benefit < MIN_BENEFIT
        ? MIN_BENEFIT
        : benefit > MAX_BENEFIT
          ? MAX_BENEFIT
          : benefit;
  }

  updateBenefit() {
    if (this.name === "Magic Pill") {
      return;
    }

    if (this.name === "Herbal Tea") {
      this.#updateHerbalTea();
      return;
    }

    if (this.name === "Fervex") {
      this.#updateFervex();
      return;
    }

    if (this.name === "Dafalgan") {
      this.#updateDafalgan();
      return;
    }

    this.#updateRegular();
  }

  #updateRegular() {
    if (this.benefit > MIN_BENEFIT) {
      this.benefit = this.benefit - 1;
    }

    this.expiresIn = this.expiresIn - 1;

    if (this.expiresIn < 0) {
      if (this.benefit > MIN_BENEFIT) {
        this.benefit = this.benefit - 1;
      }
    }
  }

  #updateHerbalTea() {
    if (this.benefit < MAX_BENEFIT) {
      this.benefit = this.benefit + 1;
    }

    this.expiresIn = this.expiresIn - 1;

    if (this.expiresIn < 0) {
      if (this.benefit < MAX_BENEFIT) {
        this.benefit = this.benefit + 1;
      }
    }
  }

  #updateFervex() {
    if (this.benefit < MAX_BENEFIT) {
      this.benefit = this.benefit + 1;

      if (this.expiresIn < 11) {
        if (this.benefit < MAX_BENEFIT) {
          this.benefit = this.benefit + 1;
        }
      }
      if (this.expiresIn < 6) {
        if (this.benefit < MAX_BENEFIT) {
          this.benefit = this.benefit + 1;
        }
      }
    }

    this.expiresIn = this.expiresIn - 1;

    if (this.expiresIn < 0) {
      this.benefit = this.benefit - this.benefit;
    }
  }

  #updateDafalgan() {
    if (this.benefit > MIN_BENEFIT) {
      this.benefit = this.benefit - 2;
    }

    this.expiresIn = this.expiresIn - 1;

    if (this.expiresIn < 0) {
      if (this.benefit > MIN_BENEFIT) {
        this.benefit = this.benefit - 2;
      }
    }

    if (this.benefit < MIN_BENEFIT) {
      this.benefit = MIN_BENEFIT;
    }
  }
}

export class Pharmacy {
  /**
   * @param {Drug[]} drugs
   */
  constructor(drugs = []) {
    this.drugs = drugs;
  }

  /**
   * @returns {Drug[]}
   */
  updateBenefitValue() {
    for (const drug of this.drugs) {
      drug.updateBenefit();
    }

    return this.drugs;
  }
}
