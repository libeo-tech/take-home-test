interface DrugInterface {
  name: string;
  expiresIn: number;
  benefit: number;
  checkBenefit: () => void;
  canUpdateBenefit: () => boolean;
}

export class Drug implements DrugInterface {
  name: string;
  expiresIn: number;
  benefit: number;
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  checkBenefit() {
    if (this.benefit > 50) this.benefit = 50;
    if (this.benefit < 0) this.benefit = 0;
  }

  /* cela marche dans le cadre de l'exercice, 
  cependant ce n'est pas la meilleur façon de faire si de nouveaux cas particuliers arrivent */
  canUpdateBenefit() {
    return (
      (this.benefit < 50 && this.benefit > 0) ||
      (this.name === FERVEX && this.benefit !== 0)
    );
  }
}

export const DEFAULT = "default";
export const MAGIC_PILL = "Magic Pill";
export const HERBAL_TEA = "Herbal Tea";
const FERVEX = "Fervex";
const DAFALGAN = "Dafalgan";

const BENEFIT_CHANGE = 1;

type updateBenefitFunction = (benefit: number, expiresIn?: number) => number;

const getDefaultBenefitUpdate = (expiresIn: number): number =>
  expiresIn > 0 ? BENEFIT_CHANGE : BENEFIT_CHANGE * 2;

const updateDefautDrugBenefit: updateBenefitFunction = (benefit, expiresIn) =>
  benefit - getDefaultBenefitUpdate(expiresIn);

const updateUpgradingDrugsBenefit: updateBenefitFunction = (
  benefit,
  expiresIn
): number => benefit + getDefaultBenefitUpdate(expiresIn);

const upgradeDafalganBenefit: updateBenefitFunction = (benefit, expiresIn) =>
  benefit - 2 * getDefaultBenefitUpdate(expiresIn);

const updateFervexBenefit: updateBenefitFunction = (benefit, expiresIn) => {
  if (expiresIn <= 0) return 0;
  if (expiresIn <= 5) return benefit + BENEFIT_CHANGE * 3;
  if (expiresIn <= 10) return benefit + BENEFIT_CHANGE * 2;
  return benefit + BENEFIT_CHANGE;
};

export const benefitEvolutionRules: { [key: string]: updateBenefitFunction } = {
  [DEFAULT]: updateDefautDrugBenefit,
  [HERBAL_TEA]: updateUpgradingDrugsBenefit,
  [FERVEX]: updateFervexBenefit,
  [MAGIC_PILL]: benefit => benefit,
  [DAFALGAN]: upgradeDafalganBenefit
};
