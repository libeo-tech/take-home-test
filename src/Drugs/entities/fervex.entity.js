import { Drug } from "./drug.entity";

export class Fervex extends Drug {
  updateBenefit() {
    if (this.expiresIn < 0) {
      this.benefit = 0;
    } else if (this.benefit < 50) {
      if (this.expiresIn <= 5) {
        this.benefit = this.benefit + 3;
      } else if (this.expiresIn <= 10) {
        this.benefit = this.benefit + 2;
      } else {
        ++this.benefit;
      }

      if (this.benefit > 50) {
        this.benefit = 50;
      }
    }
  }
}
