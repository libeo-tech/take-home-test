import { DrugName } from '../../type/DrugName';
import { Drug } from './drug';

export class MagicPill extends Drug {
  constructor(expiresIn: number, benefit: number) {
    super(DrugName.MAGIC_PILL, expiresIn, benefit);
  }

  public isExpired(): boolean {
    return false;
  }

  public updateValues() {
    return this;
  }
}
