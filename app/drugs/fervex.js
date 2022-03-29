import {DrugModel} from "./models/drug";

export class Fervex extends DrugModel {
  constructor(expiresIn, benefit) {
    super(DrugModel.drugs.FERVEX, expiresIn, benefit)
  }

  updateBenefitValue(data) {
    try {
      DrugModel.validate(data);

      if (data.expiresIn <= 0) {
        data.benefit = DrugModel.minBenefitValue;
        return data;
      } else if (data.benefit < DrugModel.maxBenefitValue) {
        if (data.expiresIn <= 10 && data.expiresIn > 5) {
          data.benefit = data.benefit + 2;
        } else if (data.expiresIn <= 5 && data.expiresIn > 0) {
          data.benefit = data.benefit + 3;
        } else {
          data.benefit = data.benefit + 1;
        }
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
