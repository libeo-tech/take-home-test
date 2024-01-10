import { Drug } from "./drug.entity";

export class Dafalgan extends Drug {
  updateBenefit() {
    if (this.benefit > 0) {
      if (this.expiresIn >= 0) {
        this.benefit = this.benefit - 2;
      } else {
        this.benefit = this.benefit - 4;
      }
      if (this.benefit < 0) {
        this.benefit = 0;
      }
    }
  }
}
