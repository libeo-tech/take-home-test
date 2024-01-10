import forceRange from "../utils/forceRange";

/**
 * The DefaultStrategy class defines the default logic for updating drug information.
 *
 * @class DefaultStrategy
 */
class DefaultStrategy {
  /**
   * Updates the drug's information, including decrementing the expiresIn property and applying the appropriate benefit update if necessary.
   *
   * @param {Drug} drug The drug object to be updated.
   * @returns {Drug} The updated drug object.
   */
  update(drug) {
    /**
     * Decrements the drug's remaining lifespan (expiresIn) by 1.
     */
    drug.expiresIn -= 1;

    if (drug.benefit > 0) {
      /**
       * Checks if the drug has expired (expiresIn is less than 0). If so, reduces the drug's benefit by 2, ensuring it remains within the 0-50 range.
       */
      if (drug.isExpired()) {
        drug.benefit = forceRange(drug.benefit - 2, 0, 50);
      } else {
        /**
         * If the drug is not expired, reduces the drug's benefit by 1, ensuring it remains within the 0-50 range.
         */
        drug.benefit = forceRange(drug.benefit - 1, 0, 50);
      }
    }

    /**
     * Returns the updated drug object.
     */
    return drug;
  }
}

/**
 * Exports the DefaultStrategy class as the default strategy for handling drugs.
 */
export default DefaultStrategy;
