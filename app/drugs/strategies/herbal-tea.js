import {Drug} from "../drug";
import {DrugStrategy} from "./drug-strategy";

export class HerbalTeaStrategy extends DrugStrategy{
  constructor(name) {
    super();
    this.name = name;
    this.updateBenefitValue = this._updateBenefitValue;
    this.updateExpiresInValue = this._updateExpiresInValue;
  }

  _updateBenefitValue(data) {
    try {
      Drug.validate(data);

      if (data.benefit < Drug.maxBenefitValue) {
        data.benefit = data.expiresIn > 0
          ? data.benefit + 1
          : data.benefit + 2;
      }
      if (data.benefit > Drug.maxBenefitValue) data.benefit = Drug.maxBenefitValue;

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
