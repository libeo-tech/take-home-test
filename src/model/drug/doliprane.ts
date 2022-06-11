import { DrugName } from '../../type/DrugName';
import { Drug } from './drug';

export class Doliprane extends Drug {
  constructor(expiresIn: number, benefit: number) {
    super(DrugName.DOLIPRANE, expiresIn, benefit);
  }
}
