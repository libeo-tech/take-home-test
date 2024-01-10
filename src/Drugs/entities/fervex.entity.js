import { Drug } from "./drug.entity";

export class Fervex extends Drug {
  updateBenefit() {
    if (this.isExpired()) {
      this.benefit = 0;
    } else {
      if (this.expiresIn <= 5) {
        this.setBenefit(this.benefit + 3);
      } else if (this.expiresIn <= 10) {
        this.setBenefit(this.benefit + 2);
      } else {
        this.setBenefit(this.benefit + 1);
      }
    }
  }
}
