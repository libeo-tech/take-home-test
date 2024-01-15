// HerbalTea.ts
import Drug from "./Drug";
import HerbalTeaStrategy from "./strategies/HerbalTeaStrategy";

class HerbalTea extends Drug {
  strategy: HerbalTeaStrategy;

  constructor(expiresIn: number, benefit: number) {
    super(expiresIn, benefit);
    this.strategy = new HerbalTeaStrategy();
  }

  updateBenefit(): void {
    this.strategy.update(this);
  }
}

export default HerbalTea;
