import { Drug } from "./drug.entity";

export class HerbalTea extends Drug {
  updateBenefit() {
    if (this.isExpired()) {
      this.setBenefit(this.benefit + 2);
    } else {
      this.setBenefit(this.benefit + 1);
    }
  }
}
