import { Drug } from '../drug/drug';

export class Pharmacy {
  constructor(private readonly drugs: Drug[] = []) {}

  public updateBenefitValue() {
    return this.drugs.map((drug) => drug.updateValues());
  }
}
