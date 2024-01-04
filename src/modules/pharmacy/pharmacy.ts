import Validator from "validatorjs";
import { Drug } from "../drug/drug";

const DRUG_VALIDATION_RULE = {
  name: "required|string",
  expiresIn: "required|integer",
  benefit: "required|integer",
};
const validator = (body: Object, rules: Validator.Rules) => {
  const validation = new Validator(body, rules);
  return validation.passes();
};

export class Pharmacy {
  drugs: Drug[];
  constructor(drugs: Drug[]) {
    this.drugs = drugs.filter(({ name, expiresIn, benefit }) =>
      validator({ name, expiresIn, benefit }, DRUG_VALIDATION_RULE)
    );
  }

  updateBenefitValue(): Drug[] {
    return this.drugs.map((drug) => {
      drug.computeNextBenefit();
      drug.expiration();
      return drug;
    });
  }
}
