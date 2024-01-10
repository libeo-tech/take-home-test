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
    drugs.forEach(drug => {
      this.drugs.push(
        drug.name in drugsClassHandler
          ? drugsClassHandler[drug.name](drug)
          : drug
      );
    });
  }

  /**
   * Update the expiresIn and benefit values.
   * @returns {Drug[]}
   */
  updateBenefitValue() {
    this.drugs.forEach(drug => drug.update());
    return this.drugs;
  }
}
