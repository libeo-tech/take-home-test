export class DrugStrategy {
  updateBenefitValue(data) {
    throw new Error('process must be implemented');
  }

  static updateExpiresInValue(data) {
    data.expiresIn = data.expiresIn - 1;

    return data;
  }
}

