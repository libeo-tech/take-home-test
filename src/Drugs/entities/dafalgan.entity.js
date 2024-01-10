import { Drug } from "./drug.entity";

export class Dafalgan extends Drug {
  updateBenefit() {
    if (this.isExpired()) {
      this.setBenefit(this.benefit - 4);
    } else {
      this.setBenefit(this.benefit - 2);
    }
  }
}
