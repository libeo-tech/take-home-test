export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  checkBenefit() {
    if (this.benefit > 50) this.benefit = 50;
    if (this.benefit < 0) this.benefit = 0;
  }

  canUpdateBenefit() {
    return (
      (this.benefit < 50 && this.benefit > 0) ||
      (this.name === FERVEX && this.benefit !== 0)
    );
  }
}

export const DEFAULT = "default";
export const MAGIC_PILL = "Magic Pill";
const HERBAL_TEA = "Herbal Tea";
const FERVEX = "Fervex";
const DAFALGAN = "Dafalgan";

const BENEFIT_CHANGE = 1;

const getDefaultBenefitUpdate = expiresIn =>
  expiresIn > 0 ? BENEFIT_CHANGE : BENEFIT_CHANGE * 2;

const updateDefautDrugBenefit = (benefit, expiresIn) =>
  benefit - getDefaultBenefitUpdate(expiresIn);

const updateUpgradingDrugsBenefit = (benefit, expiresIn) =>
  benefit + getDefaultBenefitUpdate(expiresIn);

const upgradeDafalganBenefit = (benefit, expiresIn) =>
  benefit - 2 * getDefaultBenefitUpdate(expiresIn);

const updateFervexBenefit = (benefit, expiresIn) => {
  if (expiresIn <= 0) return 0;
  if (expiresIn <= 5) return benefit + BENEFIT_CHANGE * 3;
  if (expiresIn <= 10) return benefit + BENEFIT_CHANGE * 2;
  return benefit + BENEFIT_CHANGE;
};

export const benefitEvolutionRules = {
  [DEFAULT]: updateDefautDrugBenefit,
  [HERBAL_TEA]: updateUpgradingDrugsBenefit,
  [FERVEX]: updateFervexBenefit,
  [MAGIC_PILL]: benefit => benefit,
  [DAFALGAN]: upgradeDafalganBenefit
};
