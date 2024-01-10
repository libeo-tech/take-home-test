import { Drug } from "../../Drugs/entities/drug.entity";
import { HerbalTea } from "../../Drugs/entities/herbal-tea.entity";
import { MagicPill } from "../../Drugs/entities/magic-pill.entity";
import { Fervex } from "../../Drugs/entities/fervex.entity";
import { Dafalgan } from "../../Drugs/entities/dafalgan.entity";

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
