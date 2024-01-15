// MagicPill.ts
import Drug from "./Drug";
import MagicPillStrategy from "./strategies/MagicPillStrategy";

class MagicPill extends Drug {
  strategy: MagicPillStrategy;

  constructor(expiresIn: number, benefit: number) {
    super(expiresIn, benefit);
    this.strategy = new MagicPillStrategy();
  }

  updateBenefit(): void {
    this.strategy.update(this);
  }
}

export default MagicPill;
