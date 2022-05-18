const HERBAL_TEA = "Herbal Tea";
const MAGIC_PILL = "Magic Pill";
const FERVEX = "Fervex";
const DAFALGAN = "Dafalgan";

const DEFAULT_BENEFIT_DECREASE = 1;

export class Drug {
  name: string;
  expiresIn: number;
  benefit: number;

  constructor(name: string, expiresIn: number, benefit: number) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  decreaseExpiration() {
    if (this.name !== MAGIC_PILL) this.expiresIn--;
  }

  applyBenefitConstraints(): void {
    if (this.benefit > 50) this.benefit = 50;
    else if (this.benefit < 0) this.benefit = 0;
  }

  hasBenefitLimitBeenReached(): boolean {
    return !(this.benefit > 0 && this.benefit < 50);
  }

  computeNextBenefit(): void {
    if (this.hasBenefitLimitBeenReached()) return;

    switch (this.name) {
      case MAGIC_PILL:
        break;
      case HERBAL_TEA:
        this.benefit += degradeBenefit(this.expiresIn);
        break;

      case DAFALGAN:
        this.benefit -= 2 * degradeBenefit(this.expiresIn);
        break;

      case FERVEX:
        if (this.expiresIn < 1) this.benefit = 0;
        else if (this.expiresIn < 6)
          this.benefit += DEFAULT_BENEFIT_DECREASE * 3;
        else if (this.expiresIn < 11)
          this.benefit += DEFAULT_BENEFIT_DECREASE * 2;
        else this.benefit += DEFAULT_BENEFIT_DECREASE;

        break;

      default:
        this.benefit -= degradeBenefit(this.expiresIn);
        break;
    }

    this.applyBenefitConstraints();
  }
}

const degradeBenefit = (expiresIn: number): number =>
  expiresIn > 0 ? DEFAULT_BENEFIT_DECREASE : DEFAULT_BENEFIT_DECREASE * 2;
