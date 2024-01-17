// FervexStrategy.ts
import DefaultStrategy from "./DefaultStrategy";
import forceRange from "../../helpers/forceRange";
import Drug from "../Drug";
import * as constants from "../../constants";

class FervexStrategy extends DefaultStrategy {
  update(drug: Drug): Drug {
    drug.expiresIn -= constants.DEGRADATION_NORMAL;

    if (drug.isExpired()) {
      drug.benefit = constants.EXPIRATION_THRESHOLD;
    } else if (drug.expiresIn <= 5) {
      drug.benefit = forceRange(
        drug.benefit + constants.FERVEX_BENEFIT_INCREASE_5_DAYS_OR_LESS,
        constants.EXPIRATION_THRESHOLD,
        constants.BENEFIT_UPPER_BOUND
      );
    } else if (drug.expiresIn <= 10) {
      drug.benefit = forceRange(
        drug.benefit + constants.FERVEX_BENEFIT_INCREASE_10_DAYS_OR_LESS,
        constants.EXPIRATION_THRESHOLD,
        constants.BENEFIT_UPPER_BOUND
      );
    } else {
      drug.benefit = forceRange(
        drug.benefit + constants.DEGRADATION_NORMAL,
        constants.EXPIRATION_THRESHOLD,
        constants.BENEFIT_UPPER_BOUND
      );
    }

    drug.ensureBenefitBounds();
    return drug;
  }
}

export default FervexStrategy;
