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
    } else if (this.benefit > 0) {
      this.benefit = this.benefit - 1;
    }

    this.updateExpiration();

    if (this.expiresIn < 0) {
      this.updateExpiredBenefitValue();
    }
  }

  private updateHerbalTeaBenefitValue(): void {
    if (this.benefit < MAX_BENEFIT) {
      this.benefit = this.benefit + 1;
    }
  }

  private updateFervexBenefitValue(): void {
    if (this.benefit < MAX_BENEFIT) {
      this.benefit = this.benefit + 1;

      if (
        this.expiresIn <= DOUBLE_BENEFIT_UNDER_DAY_EXPIRATION &&
        this.benefit < MAX_BENEFIT
      ) {
        this.benefit = this.benefit + 1;
      }

      if (
        this.expiresIn <= TRIPLE_BENEFIT_UNDER_DAY_EXPIRATION &&
        this.benefit < MAX_BENEFIT
      ) {
        this.benefit = this.benefit + 1;
      }
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
      this.expiresIn = this.expiresIn - 1;
    }
  }

  private updateHerbalTeaExpiration(): void {
    this.expiresIn = this.expiresIn - 1;
  }

  private updateFervexExpiration(): void {
    this.expiresIn = this.expiresIn - 1;
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
      if (this.benefit > 0) {
        this.benefit = this.benefit - 1;
      }
    }
  }

  private updateExpiredHerbalTeaBenefitValue(): void {
    if (this.benefit < MAX_BENEFIT) {
      this.benefit = this.benefit + 1;
    }
  }

  private updateExpiredFervexBenefitValue(): void {
    this.benefit = this.benefit - this.benefit;
  }

  private updateExpiredMagicPillBenefitValue(): void {
    // Do nothing: "Magic pill" drug never lose benefit
  }
}
