export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
}

const NORMAL_EXPIRATION_UPDATE_EACH_DAY = -1;
const NORMAL_BENEFIT_UPDATE_EACH_DAY = -1;
const NORMAL_BENEFIT_UPDATE_AFTER_EXPIRATION =
  NORMAL_BENEFIT_UPDATE_EACH_DAY * 2;
const HIGHEST_BENEFIT_VALUE = 50;
const LOWEST_BENEFIT_VALUE = 0;

const getFervexBenefit = (expiresIn, currentBenefit) => {
  if (expiresIn < 0) return 0;
  if (expiresIn <= 5) return currentBenefit + 3;
  if (expiresIn <= 10) return currentBenefit + 2;
  return currentBenefit + 1;
};

const DRUGS_UPDATE_MAP = {
  "Herbal Tea": {
    specificBenefitUpdateAfterExpiration: NORMAL_BENEFIT_UPDATE_EACH_DAY * -2,
    specificBenefitUpdateEachDay: NORMAL_BENEFIT_UPDATE_EACH_DAY * -1
  },
  "Magic Pill": {
    specificBenefitUpdateEachDay: 0,
    specificExpirationUpdateEachDay: 0
  },
  Dafalgan: {
    specificBenefitUpdateAfterExpiration:
      NORMAL_BENEFIT_UPDATE_AFTER_EXPIRATION * 2,
    specificBenefitUpdateEachDay: NORMAL_BENEFIT_UPDATE_EACH_DAY * 2
  }
};

const isDefined = element => element !== undefined && element !== null;

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  updateBenefitValue() {
    for (var i = 0; i < this.drugs.length; i++) {
      const drugName = this.drugs[i].name;

      // ExpireIn update after each day
      this.drugs[i].expiresIn = isDefined(
        DRUGS_UPDATE_MAP[drugName]?.specificExpirationUpdateEachDay
      )
        ? this.drugs[i].expiresIn +
          DRUGS_UPDATE_MAP[drugName]?.specificExpirationUpdateEachDay
        : this.drugs[i].expiresIn + NORMAL_EXPIRATION_UPDATE_EACH_DAY;

      // Benefit update after each day
      // The drug if Fervex
      if (drugName === "Fervex") {
        const currentBenefit = this.drugs[i].benefit;
        this.drugs[i].benefit = getFervexBenefit(
          this.drugs[i].expiresIn,
          currentBenefit
        );
      }
      // The drug is expired
      else if (this.drugs[i].expiresIn < 0) {
        this.drugs[i].benefit = isDefined(
          DRUGS_UPDATE_MAP[drugName]?.specificBenefitUpdateAfterExpiration
        )
          ? this.drugs[i].benefit +
            DRUGS_UPDATE_MAP[drugName].specificBenefitUpdateAfterExpiration
          : this.drugs[i].benefit + NORMAL_BENEFIT_UPDATE_AFTER_EXPIRATION;
      }
      // The drug is not expired
      else {
        this.drugs[i].benefit = isDefined(
          DRUGS_UPDATE_MAP[drugName]?.specificBenefitUpdateEachDay
        )
          ? this.drugs[i].benefit +
            DRUGS_UPDATE_MAP[drugName]?.specificBenefitUpdateEachDay
          : this.drugs[i].benefit + NORMAL_BENEFIT_UPDATE_EACH_DAY;
      }

      // Benefit should never be negative
      if (this.drugs[i].benefit < LOWEST_BENEFIT_VALUE)
        this.drugs[i].benefit = LOWEST_BENEFIT_VALUE;

      // Benefit should never be higher than 50
      if (this.drugs[i].benefit > HIGHEST_BENEFIT_VALUE)
        this.drugs[i].benefit = HIGHEST_BENEFIT_VALUE;
    }

    return this.drugs;
  }
}
