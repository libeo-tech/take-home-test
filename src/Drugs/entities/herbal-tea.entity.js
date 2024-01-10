import { Drug } from "./drug.entity";

export class HerbalTea extends Drug {
  updateBenefit() {
    if (this.benefit < 50) {
      this.benefit = this.expiresIn < 0 ? this.benefit + 2 : this.benefit + 1;

      if (this.benefit > 50) {
        this.benefit = 50;
      }
    }
  }
}
