import {Drug} from "../drug";
import {DrugStrategy} from "./drug-strategy";

export class DolipraneStrategy extends DrugStrategy {
  constructor(name) {
    super();
    this.name = name;
    this.updateBenefitValue = this._updateBenefitValue;
    this.updateExpiresInValue = this._updateExpiresInValue;
  }

  _updateBenefitValue(data) {
    try {
      Drug.validate(data);

      if (data.benefit == Drug.minBenefitValue) return data;

      let benefitReduction = 0;
      if (data.benefit > Drug.minBenefitValue) benefitReduction++;
      if (data.expiresIn <= 0) benefitReduction++;

      data.benefit = data.benefit - benefitReduction;

      if (data.benefit < Drug.minBenefitValue) data.benefit = Drug.minBenefitValue;

      return data;
    } catch (error) {
      throw error;
    }
  }

  _updateExpiresInValue(data) {
    try {
      Drug.validate(data);

      return DrugStrategy.updateExpiresInValue(data);
    } catch (error) {
      throw error;
    }
  }
}
