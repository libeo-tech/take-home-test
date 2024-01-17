// HerbalTeaStrategy.ts
import DefaultStrategy from "./DefaultStrategy";
import Drug from "../Drug";

class HerbalTeaStrategy extends DefaultStrategy {
  update(drug: Drug): Drug {
    drug.expiresIn -= 1;
    drug.increaseBenefit();
    drug.ensureBenefitBounds();
    return drug;
  }
}

export default HerbalTeaStrategy;
