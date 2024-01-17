// Fervex.ts
import Drug from "./Drug";
import FervexStrategy from "./strategies/FervexStrategy";

class Fervex extends Drug {
  strategy: FervexStrategy;

  constructor(expiresIn: number, benefit: number) {
    super(expiresIn, benefit);
    this.strategy = new FervexStrategy();
  }

  updateBenefit(): void {
    this.strategy.update(this);
  }
}

export default Fervex;
