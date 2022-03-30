import {Drug} from "../drug";
import {DrugStrategy} from "./drug-strategy";

export class FervexStrategy extends DrugStrategy {
  constructor(name) {
    super();
    this.name = name;
    this.updateBenefitValue = this._updateBenefitValue;
    this.updateExpiresInValue = this._updateExpiresInValue;
  }

  _updateBenefitValue(data) {
    try {
      Drug.validate(data);

      if (data.expiresIn <= 0) {
        data.benefit = Drug.minBenefitValue;
        return data;
      } else if (data.benefit < Drug.maxBenefitValue) {
        if (data.expiresIn <= 10 && data.expiresIn > 5) {
          data.benefit = data.benefit + 2;
        } else if (data.expiresIn <= 5 && data.expiresIn > 0) {
          data.benefit = data.benefit + 3;
        } else {
          data.benefit = data.benefit + 1;
        }
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
