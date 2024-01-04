const HERBAL_TEA = "Herbal Tea";
const MAGIC_PILL = "Magic Pill";
const FERVEX = "Fervex";
const DAFALGAN = "Dafalgan";

const MAX_BENEFIT = 50;
const MIN_BENEFIT = 0;

const DEFAULT_BENEFIT_DECREASE = 1;
export class Drug {
  name: string;
  benefit: number;
  expiresIn: number;
  constructor(name: string, expiresIn: number, benefit: number) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  get benefitRule(): number {
    return this.expiresIn > 0
      ? DEFAULT_BENEFIT_DECREASE
      : DEFAULT_BENEFIT_DECREASE * 2;
  }

  expiration = (): void => {
    if (this.name !== MAGIC_PILL) this.expiresIn--;
  };

  private applyBenefitConstraints = (): void => {
    if (this.benefit > MAX_BENEFIT) this.benefit = MAX_BENEFIT;
    else if (this.benefit < MIN_BENEFIT) this.benefit = MIN_BENEFIT;
  };

  computeNextBenefit(): void {
    switch (this.name) {
      case MAGIC_PILL:
        break;
      case HERBAL_TEA:
        this.benefit += this.benefitRule;
        break;

      case DAFALGAN:
        this.benefit -= 2 * this.benefitRule;
        break;

      case FERVEX:
        if (this.benefit === 0) return;
        if (this.expiresIn < 1) this.benefit = MIN_BENEFIT;
        else if (this.expiresIn < 6)
          this.benefit += DEFAULT_BENEFIT_DECREASE * 3;
        else if (this.expiresIn < 11)
          this.benefit += DEFAULT_BENEFIT_DECREASE * 2;
        else this.benefit += DEFAULT_BENEFIT_DECREASE;

        break;

      default:
        this.benefit -= this.benefitRule;
        break;
    }

    this.applyBenefitConstraints();
  }
}
