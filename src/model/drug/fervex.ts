import { DrugName } from '../../type/DrugName';
import { Drug } from './drug';

export class Fervex extends Drug {
  constructor(expiresIn: number, benefit: number) {
    super(DrugName.FERVEX, expiresIn, benefit);
  }

  public updateValues() {
    if (this.expiresIn > 10) {
      this.benefit += 1;
    } else if (this.expiresIn > 5) {
      this.benefit += 2;
    } else if (this.expiresIn > 0) {
      this.benefit += 3;
    } else {
      this.benefit = 0;
    }
    this.expiresIn -= 1;

    return this;
  }
}
