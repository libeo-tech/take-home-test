export class Drug {
  constructor(
    name,
    expiresIn,
    benefit,
    expiresInMult = -1,
    benefitMult = -1,
    benefitInCaseUpdateMult = null
  ) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
    this.expiresInMult = expiresInMult;
    this.benefitMult = benefitMult;
    this.benefitInCaseUpdateMult = benefitInCaseUpdateMult;
  }
}

/* 
  new Drug(String name, number expiresIn, number benefit, number expiresInMult, number benefitMult, Object { 10: number, 5: number, 0: number }),
  expiresInMult need to be positive if you want to increase value each day and negative if you want to decrease value each day.
  benefitMult need to be positive if you want to increase value each day and negative if you want to decrease value each day.
  benefitInCaseUpdateMult must be an object with key represent the value of expiresIn when you want to decrease or increase more, so you must put the benefitMult value of your choice on each key.
*/

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  updateBenefitValue() {
    this.drugs.map(drug => {
      // decrease expire date
      drug.expiresIn += drug.expiresInMult;

      // update value of 'drug.benefitMult' if 'drug.benefitInCaseUpdateMult' is filled for different value
      if (drug.benefitInCaseUpdateMult) {
        Object.keys(drug.benefitInCaseUpdateMult).every(key => {
          if (drug.expiresIn <= key) {
            drug.benefitMult = drug.benefitInCaseUpdateMult[key];
            return false;
          }
          return true;
        });
      }
      // decrease benefit
      if (drug.expiresIn <= 0) {
        drug.benefit += drug.benefitMult * 2;
      } else {
        drug.benefit += drug.benefitMult;
      }
      // check if benefit is never less than 0 and never more than 50
      if (drug.benefit < 0) drug.benefit = 0;
      if (drug.benefit > 50) drug.benefit = 50;
    });

    return this.drugs;
  }
}
