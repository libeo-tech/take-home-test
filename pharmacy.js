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
    this.expiresIn--;
    const dec = this.expiresIn < 0 ? 2 : 1;
    this.#decreaseBenefit(dec);
  }

  #updateHerbalTea() {
    this.expiresIn--;
    const inc = this.expiresIn < 0 ? 2 : 1;
    this.#increaseBenefit(inc);
  }

  #updateFervex() {
    this.expiresIn--;

    if (this.expiresIn < 0) {
      this.benefit = MIN_BENEFIT;
      return;
    }

    const inc = this.expiresIn < 5 ? 3 : this.expiresIn < 10 ? 2 : 1;
    this.#increaseBenefit(inc);
  }

  #updateDafalgan() {
    this.expiresIn--;
    const dec = this.expiresIn < 0 ? 4 : 2;
    this.#decreaseBenefit(dec);
  }

  #decreaseBenefit(by = 1) {
    this.benefit = this.benefit - by;

    if (this.benefit < MIN_BENEFIT) {
      this.benefit = MIN_BENEFIT;
    }
  }

  #increaseBenefit(by = 1) {
    this.benefit = this.benefit + by;

    if (this.benefit > MAX_BENEFIT) {
      this.benefit = MAX_BENEFIT;
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
