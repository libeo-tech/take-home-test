import forceRange from "../utils/forceRange";
import DefaultStrategy from "./DefaultStrategy";

/**
 * The FervexStrategy class extends the DefaultStrategy class and implements the specific logic for handling Fervex drugs.
 *
 * @class FervexStrategy
 * @extends DefaultStrategy
 */
class FervexStrategy extends DefaultStrategy {
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
     * Checks if the drug has expired (expiresIn is less than 0). If so, sets the benefit to 0, indicating a completely ineffective drug.
     */
    if (drug.isExpired()) {
      drug.benefit = 0;
    } else {
      /**
       * If the drug is close to expiring (expiresIn <= 5), increases the benefit by 3, up to a maximum of 50.
       */
      if (drug.expiresIn <= 5) {
        drug.benefit = forceRange(drug.benefit + 3, 0, 50);
      } else {
        /**
         * If the drug is less than 10 days away from expiring (expiresIn <= 10), increases the benefit by 2, up to a maximum of 50.
         */
        if (drug.expiresIn <= 10) {
          drug.benefit = forceRange(drug.benefit + 2, 0, 50);
        } else {
          /**
           * Otherwise, if the drug still has a significant lifespan (expiresIn > 10), increases the benefit by 1, up to a maximum of 50.
           */
          drug.benefit = forceRange(drug.benefit + 1, 0, 50);
        }
      }
    }

    /**
     * Returns the updated drug object.
     */
    return drug;
  }
}

/**
 * Exports the FervexStrategy class as the strategy for handling Fervex drugs.
 */
export default FervexStrategy;
