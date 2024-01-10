/**
 * The `MagicPillStrategy` class represents a strategy that simply returns the drug provided without any modifications.
 *
 * @class MagicPillStrategy
 */
class MagicPillStrategy {
  /**
   * Updates the provided drug based on the strategy's logic. In this case, the drug is simply returned without any modifications.
   *
   * @param {Drug} drug The drug to be updated.
   * @returns {Drug} The updated drug, which is the same as the provided drug.
   */
  update(drug) {
    return drug;
  }
}

/**
 * Exports the MagicPillStrategy class as the strategy for handling Magic Pill drugs.
 *
 * @export
 */
export default MagicPillStrategy;
