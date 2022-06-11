import { DrugName } from '../../type/DrugName';
import { Drug } from './drug';

export class Dafalgan extends Drug {
  constructor(expiresIn: number, benefit: number) {
    super(DrugName.DAFALGAN, expiresIn, benefit);
  }

  public updateValues(): this {
    this.benefit -= this.isExpired() ? 4 : 2;
    this.expiresIn -= 1;

    return this;
  }
}
