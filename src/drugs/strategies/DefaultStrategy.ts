// DefaultStrategy.ts
import Drug from "../Drug";

class DefaultStrategy {
  update(drug: Drug): Drug {
    drug.expiresIn -= 1;
    drug.decreaseBenefit();
    drug.handleExpiration();
    drug.ensureBenefitBounds();
    return drug;
  }
}

export default DefaultStrategy;
