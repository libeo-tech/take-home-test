import DefaultStrategy from './DefaultStrategy';
import forceRange from '../utils/forceRange';

/**
 * The DafalganStrategy class extends the DefaultStrategy class and implements the specific logic for handling Dafalgan drugs.
 *
 * @class DafalganStrategy
 * @extends DefaultStrategy
 */
class DafalganStrategy extends DefaultStrategy {
  /**
   * Updates the drug's information, including decrementing the expiresIn property and applying the appropriate benefit reduction if necessary.
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
     * Checks if the drug has expired (expiresIn is less than 0).
     */
    if (drug.isExpired()) {
      /**
       * Reduces the drug's benefit by 4, ensuring it remains within the 0-50 range.
       */
      drug.benefit = forceRange(drug.benefit - 4, 0, 50);
    } else {
      /**
       * Reduces the drug's benefit by 2, ensuring it remains within the 0-50 range.
       */
      drug.benefit = forceRange(drug.benefit - 2, 0, 50);
    }
    /**
     * Returns the updated drug object.
     */
    return drug;
  }
}

/**
 * Exports the DafalganStrategy class as the default strategy.
 */
export default DafalganStrategy;
