const DrugName = {
  HerbalTea: "Herbal Tea",
  MagicPill: "Magic Pill",
  Fervex: "Fervex",
  Dafalgan: "Dafalgan",
};

const maxBenefit = 50;
const minBenefit = 0;

export class GenericDrug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  get isExpired() {
    return this.expiresIn <= 0;
  }

  get canUpdateBenefit() {
    return this.benefit < maxBenefit && this.benefit > minBenefit;
  }
  get canUpdateExpiresIn() {
    return true;
  }
  get benefitVariation() {
    return this.isExpired ? -2 : -1;
  }

  updateBenefit() {
    if (!this.canUpdateBenefit) {
      return;
    }

    this.benefit += this.benefitVariation;
  }

  verifyBenefit() {
    if (this.benefit > maxBenefit) this.benefit = maxBenefit;

    if (this.benefit < minBenefit) this.benefit = minBenefit;
  }

  updateExpiresIn() {
    if (!this.canUpdateExpiresIn) {
      return;
    }

    this.expiresIn--;
  }

  updateBenefitValue() {
    this.updateBenefit();
    this.updateExpiresIn();
    this.verifyBenefit();
  }
}
class HerbalTea extends GenericDrug {
  constructor(name, expiresIn, benefit) {
    super(DrugName.HerbalTea, expiresIn, benefit);
  }

  get benefitVariation() {
    return this.isExpired ? 2 : 1;
  }
}

class MagicPill extends GenericDrug {
  constructor(name, expiresIn, benefit) {
    super(DrugName.MagicPill, expiresIn, benefit);
  }

  get canUpdateBenefit() {
    return false;
  }
  get canUpdateExpiresIn() {
    return false;
  }
}

class Fervex extends GenericDrug {
  constructor(name, expiresIn, benefit) {
    super(DrugName.Fervex, expiresIn, benefit);
  }

  get isExpired() {
    return this.expiresIn < 0;
  }

  get benefitVariation() {
    if (this.expiresIn <= 5) {
      return 3;
    } else if (this.expiresIn <= 10) {
      return 2;
    }

    return 1;
  }

  updateBenefitValue() {
    super.updateBenefitValue();

    if (this.isExpired) {
      this.benefit = 0;
    }
  }
}

class Dafalgan extends GenericDrug {
  constructor(name, expiresIn, benefit) {
    super(DrugName.Dafalgan, expiresIn, benefit);
  }

  get benefitVariation() {
    console.log(super.benefitVariation);
    console.log(super.benefitVariation * 2);
    return super.benefitVariation * 2;
  }
}

export class Drug {
  constructor(name, expiresIn, benefit) {
    switch (name) {
      case DrugName.HerbalTea:
        return new HerbalTea(name, expiresIn, benefit);
      case DrugName.MagicPill:
        return new MagicPill(name, expiresIn, benefit);
      case DrugName.Fervex:
        return new Fervex(name, expiresIn, benefit);
      case DrugName.Dafalgan:
        return new Dafalgan(name, expiresIn, benefit);
      default:
        return new GenericDrug(name, expiresIn, benefit);
    }
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  updateBenefitValue() {
    for (const drug of this.drugs) {
      drug.updateBenefitValue();
    }

    return this.drugs;
  }
}
