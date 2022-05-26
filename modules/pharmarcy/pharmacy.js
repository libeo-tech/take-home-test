export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  updateBenefitValue() {
    this.drugs.map(drugs => {
      if (
        this._isNotHerbealTea(drugs) &&
        this._isNotFervex(drugs) &&
        this._isNotMagicPill(drugs) &&
        this._isNotDafalgan(drugs) &&
        drugs.benefit >= 0 &&
        drugs.expiresIn > 0
      ) {
        this._decreaseOfOneBenefit(drugs);
        this._decreaseOfOneExpireIn(drugs);
      }

      if (drugs.expiresIn <= 0 && this._isNotHerbealTea(drugs)) {
        this.decreaseBenefitTwice(drugs);
      }

      if (!this._isNotHerbealTea(drugs)) {
        if (drugs.expiresIn < 0) {
          this.increaseBenefitTwice(drugs);
        }

        if (drugs.expiresIn >= 0) {
          this._increaseOfOneBenefit(drugs);
          this._decreaseOfOneExpireIn(drugs);
        }
      }

      if (!this._isNotFervex(drugs)) {
        if (drugs.expiresIn <= 10 && drugs.expiresIn > 5) {
          this.increaseBenefitTwice(drugs);
        } else if (drugs.expiresIn <= 5 && drugs.expiresIn > 0) {
          this.increaseBenefitThird(drugs);
        } else {
          this._increaseOfOneBenefit(drugs);
        }
        this._decreaseOfOneExpireIn(drugs);
      }

      if (!this._isNotDafalgan(drugs)) {
        this.decreaseBenefitTwice(drugs);
        this._decreaseOfOneExpireIn(drugs);
      }

      if (drugs.benefit > 50) {
        drugs.benefit = 50;
      }
    });
    return this.drugs;
  }

  // Private Methods

  _isNotHerbealTea(drugs) {
    return drugs.name !== "Herbal Tea";
  }

  _isNotFervex(drugs) {
    return drugs.name !== "Fervex";
  }

  _isNotMagicPill(drugs) {
    return drugs.name !== "Magic Pill";
  }

  _decreaseOfOneBenefit(drugs) {
    if (drugs.benefit !== 0) drugs.benefit--;
  }

  _increaseOfOneBenefit(drugs) {
    drugs.benefit++;
  }

  _isNotDafalgan(drugs) {
    return drugs.name !== "Dafalgan";
  }

  _decreaseOfOneExpireIn(drugs) {
    drugs.expiresIn--;
  }

  increaseBenefitThird(drugs) {
    drugs.benefit = drugs.benefit + 3;
  }

  increaseBenefitTwice(drugs) {
    drugs.benefit = drugs.benefit + 2;
  }

  decreaseBenefitTwice(drugs) {
    drugs.benefit = drugs.benefit - 2;
  }
}
