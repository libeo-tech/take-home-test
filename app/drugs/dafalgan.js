import {DrugModel} from "./models/drug";

export class Dafalgan extends DrugModel {
  constructor(expiresIn, benefit) {
    super(DrugModel.drugs.DAFALGAN, expiresIn, benefit)
  }

  updateBenefitValue(data) {
    try {
      DrugModel.validate(data);

      if (data.benefit == DrugModel.minBenefitValue) return data;

      let benefitReduction = 0;
      if (data.benefit > DrugModel.minBenefitValue) benefitReduction += 2;
      if (data.expiresIn <= 0) benefitReduction += 2;

      data.benefit = data.benefit - benefitReduction;

      if (data.benefit < DrugModel.minBenefitValue) data.benefit = DrugModel.minBenefitValue;

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
