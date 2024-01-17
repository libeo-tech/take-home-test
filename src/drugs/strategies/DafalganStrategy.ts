// DafalganStrategy.ts
import DefaultStrategy from "./DefaultStrategy";
import Drug from "../Drug";

class DafalganStrategy extends DefaultStrategy {
  update(drug: Drug): Drug {
    drug.expiresIn -= 1;
    drug.decreaseBenefitTwice(); // Dafalgan degrades in Benefit twice as fast
    drug.ensureBenefitBounds();
    return drug;
  }
}

export default DafalganStrategy;
