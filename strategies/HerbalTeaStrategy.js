import forceRange from "../utils/forceRange";
import DefaultStrategy from "./DefaultStrategy";

/**
 * The HerbalTeaStrategy class extends the DefaultStrategy class and implements the specific logic for handling Herbal Tea drugs.
 *
 * @class HerbalTeaStrategy
 * @extends DefaultStrategy
 */
class HerbalTeaStrategy extends DefaultStrategy {
  /**
   * Updates the drug's information, including decrementing the expiresIn property and applying the appropriate benefit adjustment based on the drug's remaining lifespan.
   *
   * @param {Drug} drug The drug object to be updated.
   * @returns {Drug} The updated drug object.
   */
  update(drug) {
    /**
     * Decrements the drug's remaining lifespan (expiresIn) by 1.
     */
    drug.expiresIn -= 1;

    /**
     * Checks if the drug has expired (expiresIn is less than 0). If so, increases the benefit by 2, up to a maximum of 50.
     */
    if (drug.isExpired()) {
      drug.benefit = forceRange(drug.benefit + 2, 0, 50);
    } else {
      /**
       * Otherwise, if the drug is still usable (expiresIn >= 0), increases the benefit by 1, up to a maximum of 50.
       */
      drug.benefit = forceRange(drug.benefit + 1, 0, 50);
    }

    /**
     * Returns the updated drug object.
     */
    return drug;
  }
}

/**
 * Exports the HerbalTeaStrategy class as the strategy for handling Herbal Tea drugs.
 */
export default HerbalTeaStrategy;
