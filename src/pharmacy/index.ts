import Validator from "validatorjs";
import { Drug } from "../drug";

const DRUG_VALIDATION_RULE = {
  name: "required|string",
  expiresIn: "required|integer",
  benefit: "required|integer"
};
const validator = (body: Object, rules: Validator.Rules) => {
  const validation = new Validator(body, rules);
  return validation.passes();
};

export class Pharmacy {
  drugs: Drug[];
  constructor(drugs: Drug[]) {
    const validDrugs = drugs.filter(({ name, expiresIn, benefit }) =>
      validator({ name, expiresIn, benefit }, DRUG_VALIDATION_RULE)
    );
    this.drugs = validDrugs;
  }

  updateBenefitValue(): Drug[] {
    return this.drugs.map(drug => {
      drug.decreaseExpiration();
      drug.computeNextBenefit();
      return drug;
    });
  }
}
