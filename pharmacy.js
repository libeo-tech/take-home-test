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
}

class HerbalTea extends Drug {
  updateBenefit() {
    if (this.benefit < 50) {
      this.benefit = this.expiresIn < 0 ? this.benefit + 2 : this.benefit + 1;
    }
  }
}

class MagicPill extends Drug {
  updateBenefit() {}
  updateExpiresIn() {}
}

class Fervex extends Drug {
  updateBenefit() {
    if (this.benefit < 50) {
      if (this.expiresIn < 0) {
        this.benefit = 0;
      } else if (this.expiresIn <= 5) {
        this.benefit = this.benefit + 3;
      } else if (this.expiresIn <= 10) {
        this.benefit = this.benefit + 2;
      } else {
        ++this.benefit;
      }
    }
  }
}

class Dafalgan extends Drug {
  updateBenefit() {
    if (this.benefit > 0) {
      if (this.expiresIn >= 0) {
        this.benefit = this.benefit - 2;
      } else {
        this.benefit = this.benefit - 4;
      }
      if (this.benefit < 0) {
        this.benefit = 0;
      }
    }
  }
}

const drugsClassHandler = {
  "Herbal Tea": drug => new HerbalTea(drug.name, drug.expiresIn, drug.benefit),
  "Magic Pill": drug => new MagicPill(drug.name, drug.expiresIn, drug.benefit),
  Fervex: drug => new Fervex(drug.name, drug.expiresIn, drug.benefit),
  Dafalgan: drug => new Dafalgan(drug.name, drug.expiresIn, drug.benefit)
};

export class Pharmacy {
  /**
   * Pharmacy class.
   * @param {Drug[]} drugs List of drugs.
   */
  constructor(drugs = []) {
    this.drugs = [];
    for (let drug of drugs) {
      if (drug.name in drugsClassHandler) {
        this.drugs.push(drugsClassHandler[drug.name](drug));
      } else {
        this.drugs.push(drug);
      }
    }
  }

  /**
   * Update the expiresIn and benefit values.
   * @returns {Drug[]}
   */
  updateBenefitValue() {
    for (const drug of this.drugs) {
      drug.updateExpiresIn();
      drug.updateBenefit();
    }

    return this.drugs;
  }
}
