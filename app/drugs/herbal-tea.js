import {DrugModel} from "./models/drug";

export class HerbalTea extends DrugModel {
  constructor(expiresIn, benefit) {
    super(DrugModel.drugs.HERBAL_TEA, expiresIn, benefit)
  }

  updateBenefitValue(data) {
    try {
      DrugModel.validate(data);

      if (data.benefit < DrugModel.maxBenefitValue) {
        data.benefit = data.expiresIn > 0
          ? data.benefit + 1
          : data.benefit + 2;
      }
      if (data.benefit > DrugModel.maxBenefitValue) data.benefit = DrugModel.maxBenefitValue;

      return data;
    } catch (error) {
      throw error;
    }
  }

  updateExpiresInValue(data) {
    try {
      DrugModel.validate(data);

      return DrugModel.updateExpiresInValue(data);
    } catch (error) {
      throw error;
    }
  }
}
