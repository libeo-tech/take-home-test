import { MAX_BENEFIT, MIN_BENEFIT } from "../const";
import { Drug } from "../drug/entities/drug.entity";
import { BenefitStrategy } from "../types";

/**
 * Manages the Pharmacy logic
 */
export class PharmacyService {
  /**
   * Update the benefit and expiration date of a drug according to the matching expiration strategy
   * @param drug to be updated
   * @returns the updated drug
   */
  static updateBenefitAndExpirationDate(drug: Drug): Drug {
    const strategy = this.mapBenefitStrategy(drug);

    switch (strategy) {
      case BenefitStrategy.DECREASE_TWICE_AS_FAST:
        this.benefitDecreaseTwiceAsFast(drug);
        break;

      case BenefitStrategy.INCREASE_AS_EXPIRATION_DATE_APROCHES:
        this.benefitIncreaseAsExpirationDateApproches(drug);
        break;

      case BenefitStrategy.INCREASE_REGULARLY:
        this.benefitIncreaseAfterTime(drug);
        break;

      case BenefitStrategy.NEVER_DECREASE:
        break;

      default:
        this.benefitDecreaseAfterTime(drug);
        break;
    }

    drug.expiresIn = drug.expiresIn - 1;
    return drug;
  }

  /**
   * Return the benefit strategy for a drug
   * @private
   * @param drug to know the benefit strategy
   * @returns the strategy choosen for the selected drug
   */
  private static mapBenefitStrategy(drug: Drug) {
    // TODO
    return BenefitStrategy.DEFAULT;
  }

  /**
   * "Decrease twice as fast" strategy
   * -2 per day when the drug is valid
   * -4 per day when the drug is expired
   * @private
   * @param drug to be updated
   * @returns updated drug
   */
  private static benefitDecreaseTwiceAsFast(drug: Drug) {
    // TODO
    return drug;
  }

  /**
   * "Increase as expiration date approches" strategy
   * set to 0 when the drug is expired
   * +1 per day when expiration date is higher than 10
   * +2 per day when expiration date is between 6 and 10
   * +3 per day when expiration date is lower than 5
   * @private
   * @param drug to be updated
   * @returns updated drug
   */
  private static benefitIncreaseAsExpirationDateApproches(drug: Drug) {
    // TODO
    return drug;
  }

  /**
   * "Increase after time" strategy
   * +1 per day when the drug is valid
   * +2 per day when the drug is expired
   * @private
   * @param drug to be updated
   * @returns updated drug
   */
  private static benefitIncreaseAfterTime(drug: Drug) {
    // TODO
    return drug;
  }

  /**
   * "Decrease after time" strategy
   * -1 per day when the drug is valid
   * -2 per day when the drug is expired
   * @private
   * @param drug to be updated
   * @returns updated drug
   */
  private static benefitDecreaseAfterTime(drug: Drug) {
    // TODO
    return drug;
  }

  /**
   * Check if the benefit is in the min and max values
   * @private
   * @param benefit
   * @returns the corrected benefit
   */
  private static checkDrugBenefit(benefit: number): number {
    if (benefit < MIN_BENEFIT) return MIN_BENEFIT;
    if (benefit > MAX_BENEFIT) return MAX_BENEFIT;
    return benefit;
  }

  /**
   * Check if the drug is expired
   * @private
   * @param drug to be tested
   * @returns true if the drug is expired
   */
  private static isDrugExpired(drug: Drug): boolean {
    return drug.expiresIn < 0;
  }
}
