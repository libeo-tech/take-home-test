import { Drug } from "./drug";

export class Pharmacy {
  constructor(private readonly drugs: Drug[] = []) {}

  updateBenefitValue(): Drug[] {
    this.drugs.forEach((drug) => {
      drug.updateBenefitValue();
    });

    return this.drugs;
  }
}
