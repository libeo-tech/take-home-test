export class Drug {
  constructor(name, expiresIn, benefit, benefitUpdateValue = -1, expirationUpdateValue = 1, benefitAcceleration = null) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
    this.benefitUpdateValue = benefitUpdateValue
    this.expirationUpdateValue = expirationUpdateValue
    this.benefitAcceleration = benefitAcceleration
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  updateBenefitValue() {
    return this.drugs.map((drug) => {
      drug.expiresIn -= drug.expirationUpdateValue

      if (drug.benefitAcceleration && Object.keys(drug.benefitAcceleration).includes(drug.expiresIn.toString())) {
        drug.benefitUpdateValue = drug.benefitAcceleration[drug.expiresIn]
      }

      if (drug.expiresIn >= 0 && (drug.benefit > 0 && drug.benefit < 50)) {
        // if drug has not expired and benefit is between 0 and 50, update benefit
        drug.benefit += drug.benefitUpdateValue
      }
      else if (drug.expiresIn < 0 && (drug.benefit > 0 && drug.benefit < 50)) {
        // if drug has expired and benefit is between 0 and 50, update benefit twice faster
        drug.benefit += drug.benefitUpdateValue * 2
      }

      // if benefit has been updated but is not between 0 and 50, update benefit
      if (drug.benefit < 0) drug.benefit = 0
      if (drug.benefit > 50) drug.benefit = 50

      return drug
    })
  }
}
