/**
 * Imports the strategy classes from the strategies directory.
 */
import DafalganStrategy from "../strategies/DafalganStrategy";
import DefaultStrategy from "../strategies/DefaultStrategy";
import FervexStrategy from "../strategies/FervexStrategy";
import HerbalTeaStrategy from "../strategies/HerbalTeaStrategy";
import MagicPillStrategy from "../strategies/MagicPillStrategy";

/**
 * Represents a pharmacy that manages and updates the benefit values of drugs.
 *
 * @class Pharmacy
 * @param {Array<Drug>} drugs An array of drugs to manage.
 */
export default class Pharmacy {
  /**
   * Constructor for the Pharmacy class.
   *
   * @param {Array<Drug>} drugs An array of drugs to manage.
   */
  constructor(drugs = []) {
    this.drugs = drugs;
    this.strategies = {
      "Herbal Tea": new HerbalTeaStrategy(),
      "Magic Pill": new MagicPillStrategy(),
      "Fervex": new FervexStrategy(),
      "Dafalgan": new DafalganStrategy(),
      "default": new DefaultStrategy()
    }
  }

  /**
   * Updates the benefit value of each drug based on its specific strategy.
   *
   * @returns {Array<Drug>} The updated list of drugs.
   */
  updateBenefitValue() {
    for (let i = 0; i < this.drugs.length; i++) {
      let drug = this.drugs[i];
      const strategy = this.strategies[drug.name] || this.strategies.default;

      try {
        drug = strategy.update(drug);
      } catch (error) {
        console.error(`Error updating drug "${drug.name}": ${error.message}`);
      }
    }

    return this.drugs;
  }
}
