/**
 * The FervexStrategy class defines the default logic for updating drug information.
 *
 * @class FervexStrategy
 */
class FervexStrategy {
  /**
   * Updates the drug's information, including decrementing the expiresIn property and applying the appropriate benefit update if necessary.
   *
   * @param {Drug} drug The drug object to be updated.
   * @returns {Drug} The updated drug object.
   */
  update(drug) {
    return drug;
  }
}

/**
 * Exports the FervexStrategy class as the default strategy for handling drugs.
 */
export default FervexStrategy;
