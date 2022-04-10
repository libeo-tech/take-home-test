const HERBAL_TEA = "Herbal Tea";
const FERVEX = "Fervex";
const MAGIC_PILL = "Magic Pill";

const MAX_BENEFIT = 50;
const DOUBLE_BENEFIT_UNDER_DAY_EXPIRATION = 10;
const TRIPLE_BENEFIT_UNDER_DAY_EXPIRATION = 5;

export class Drug {
  constructor(
    public name: string,
    public expiresIn: number,
    public benefit: number
  ) {}

  updateBenefitValue(): void {
    if (this.name === HERBAL_TEA) {
      this.updateHerbalTeaBenefitValue();
    } else if (this.name === FERVEX) {
      this.updateFervexBenefitValue();
    } else if (this.name === MAGIC_PILL) {
      this.updateMagicPillBenefitValue();
    } else {
      this.updateBenefit(-1);
    }

    this.updateExpiration();

    if (this.expiresIn < 0) {
      this.updateExpiredBenefitValue();
    }
  }

  private updateHerbalTeaBenefitValue(): void {
    this.updateBenefit(1);
  }

  private updateFervexBenefitValue(): void {
    if (this.expiresIn <= TRIPLE_BENEFIT_UNDER_DAY_EXPIRATION) {
      this.updateBenefit(3);
    } else if (this.expiresIn <= DOUBLE_BENEFIT_UNDER_DAY_EXPIRATION) {
      this.updateBenefit(2);
    } else {
      this.updateBenefit(1);
    }
  }

  private updateMagicPillBenefitValue(): void {
    // Do nothing: "Magic pill" drug never lose benefit
  }

  private updateExpiration(): void {
    if (this.name === HERBAL_TEA) {
      this.updateHerbalTeaExpiration();
    } else if (this.name === FERVEX) {
      this.updateFervexExpiration();
    } else if (this.name === MAGIC_PILL) {
      this.updateMagicPillExpiration();
    } else {
      this.expiresIn -= 1;
    }
  }

  private updateHerbalTeaExpiration(): void {
    this.expiresIn -= 1;
  }

  private updateFervexExpiration(): void {
    this.expiresIn -= 1;
  }

  private updateMagicPillExpiration(): void {
    // Do nothing: "Magic pill" drug never expires
  }

  private updateExpiredBenefitValue(): void {
    if (this.name === HERBAL_TEA) {
      this.updateExpiredHerbalTeaBenefitValue();
    } else if (this.name === FERVEX) {
      this.updateExpiredFervexBenefitValue();
    } else if (this.name === MAGIC_PILL) {
      this.updateExpiredMagicPillBenefitValue();
    } else {
      this.updateBenefit(-1);
    }
  }

  private updateExpiredHerbalTeaBenefitValue(): void {
    this.updateBenefit(1);
  }

  private updateExpiredFervexBenefitValue(): void {
    this.benefit = this.benefit - this.benefit;
  }

  private updateExpiredMagicPillBenefitValue(): void {
    // Do nothing: "Magic pill" drug never lose benefit
  }

  private updateBenefit(value: number): void {
    const newBenefitValue = this.benefit + value;

    this.benefit =
      value < 0
        ? Math.max(0, newBenefitValue)
        : Math.min(MAX_BENEFIT, newBenefitValue);
  }
}
