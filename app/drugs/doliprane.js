import {DrugModel} from "./models/drug";

export class Doliprane extends DrugModel {
  constructor(expiresIn, benefit) {
    super(DrugModel.drugs.DOLIPRANE, expiresIn, benefit)
  }

  updateBenefitValue(data) {
    try {
      DrugModel.validate(data);

      return DrugModel.updateBenefitValue(data);
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
