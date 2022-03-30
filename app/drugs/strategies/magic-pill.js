import {Drug} from "../drug";
import {DrugStrategy} from "./drug-strategy";

export class MagicPillStrategy extends DrugStrategy {
  constructor(name) {
    super();
    this.name = name;
    this.updateBenefitValue = this._updateBenefitValue;
    this.updateExpiresInValue = this._updateExpiresInValue;
  }

  _updateBenefitValue(data) {
    try {
      Drug.validate(data);

      return data;
    } catch (error) {
      throw error;
    }
  }

  _updateExpiresInValue(data) {
    try {
      Drug.validate(data);

      return data;
    } catch (error) {
      throw error;
    }
  }
}
