const FERVEX = "Fervex";
const HERBAL_TEA = "Herbal Tea";
const MAGIC_PILL = "Magic Pill";
const DAFALGAN = "Dafalgan";

const BENEFIT_MAX = 50;
const BENEFIT_MIN = 0;

export class Drug {

  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  increaseBenefitBy(gain) {
    this.benefit = this.benefit + gain;
    // The Benefit of an item is never more than 50.
    if (this.benefit > BENEFIT_MAX) {
      this.benefit = BENEFIT_MAX
    }
  }

  decreaseBenefitBy(lost) {
    this.benefit = this.benefit - lost;
    // The Benefit of an item is never negative.
    if (this.benefit < BENEFIT_MIN) {
      this.benefit = BENEFIT_MIN
    }
  }

  decreaseExpiresIn() {
    this.expiresIn = this.expiresIn - 1;
  }

  get isExpired() {
    return this.expiresIn <= 0;
  }
}

class DefaultUpdateBenefitStrategy {

  constructor(multiplier = 1) {
    this.multiplier = multiplier;
  }

  updateBenefit(drug) {
    //Once the expiration date has passed, Benefit degrades twice as fast.
    const lost = drug.isExpired ? 2 : 1;
    drug.decreaseBenefitBy(lost * this.multiplier)
  }

  updateExpireIn(drug) {
    drug.decreaseExpiresIn();
  }
}

//"Fervex", like Herbal Tea, increases in Benefit as its expiration date approaches.
// Benefit increases by 2 when there are 10 days or less 
// and by 3 when there are 5 days or less 
// but Benefit drops to 0 after the expiration date.
class FervexUpdateBenefitStrategy extends DefaultUpdateBenefitStrategy {
  updateBenefit(drug) {
    if (drug.isExpired) {
      drug.decreaseBenefitBy(drug.benefit)
    } else {
      let gain = 1;
      if (drug.expiresIn <= 5) {
        gain = 3
      } else if (drug.expiresIn <= 10) {
        gain = 2
      }
      drug.increaseBenefitBy(gain)
    }
  }
}
// "Herbal Tea" actually increases in Benefit the older it gets.Benefit increases twice as fast after the expiration date.
class HerbalTeaUpdateBenefitStrategy extends DefaultUpdateBenefitStrategy {
  updateBenefit(drug) {
    const gain = drug.isExpired ? 2 : 1;
    drug.increaseBenefitBy(gain)
  }
}

// "Magic Pill" never expires nor decreases in Benefit.
class MagicPillUpdateBenefitStrategy extends DefaultUpdateBenefitStrategy {
  updateBenefit(drug) {
    // do nothing
  }

  updateExpireIn(drug) {
    // do nothing
  }
}

// "Dafalgan" degrades in Benefit twice as fast as normal drugs.
class DafalganUpdateBenefitStrategy extends DefaultUpdateBenefitStrategy {
  constructor() {
    super(2)
  }
}

class UpdateBenefitStrategyFactory {
  getUpdateBenefitStrategy(drug) {
    switch (drug.name) {
      case FERVEX: return new FervexUpdateBenefitStrategy();
      case HERBAL_TEA: return new HerbalTeaUpdateBenefitStrategy();
      case MAGIC_PILL: return new MagicPillUpdateBenefitStrategy();
      case DAFALGAN: return new DafalganUpdateBenefitStrategy();
      default: return new DefaultUpdateBenefitStrategy()
    }
  }
}


export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
    this.strategyFactory = new UpdateBenefitStrategyFactory();
  }
  updateBenefitValue() {
    for (let drug of this.drugs) {
      const strategy = this.strategyFactory.getUpdateBenefitStrategy(drug);
      strategy.updateBenefit(drug);
      strategy.updateExpireIn(drug);
    }

    return this.drugs;
  }
}
