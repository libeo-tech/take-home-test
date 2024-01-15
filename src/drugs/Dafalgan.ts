// Dafalgan.ts
import Drug from "./Drug";
import DafalganStrategy from "./strategies/DafalganStrategy";

class Dafalgan extends Drug {
  strategy: DafalganStrategy;

  constructor(expiresIn: number, benefit: number) {
    super(expiresIn, benefit);
    this.strategy = new DafalganStrategy();
  }

  updateBenefit(): void {
    this.strategy.update(this);
  }
}

export default Dafalgan;
