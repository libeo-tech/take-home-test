import { DrugName } from '../../type/DrugName';
import { Drug } from './drug';

export class HerbalTea extends Drug {
  constructor(expiresIn: number, benefit: number) {
    super(DrugName.HERBAL_TEA, expiresIn, benefit);
  }

  public updateValues() {
    if (this.isExpired()) {
      this.benefit += 2;
    } else {
      this.benefit += 1;
    }
    this.expiresIn -= 1;

    return this;
  }
}
