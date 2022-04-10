import { Drug } from "./drug";

const HERBAL_TEA = "Herbal Tea";
const FERVEX = "Fervex";
const MAGIC_PILL = "Magic Pill";

const MAX_BENEFIT = 50;
const DOUBLE_BENEFIT_UNDER_DAY_EXPIRATION = 10;
const TRIPLE_BENEFIT_UNDER_DAY_EXPIRATION = 5;

export class Pharmacy {
  constructor(private readonly drugs: Drug[] = []) {}

  updateBenefitValue(): Drug[] {
    this.drugs.forEach((drug) => {
      Pharmacy.updateDrugBenefitValue(drug);

      Pharmacy.updateDrugExpiration(drug);

      if (drug.expiresIn < 0) {
        Pharmacy.updateExpiredDrugBenefitValue(drug);
      }
    });

    return this.drugs;
  }

  private static updateDrugBenefitValue(drug: Drug): void {
    if (drug.name === HERBAL_TEA) {
      Pharmacy.updateHerbalTeaBenefitValue(drug);
    } else if (drug.name === FERVEX) {
      Pharmacy.updateFervexBenefitValue(drug);
    } else if (drug.name === MAGIC_PILL) {
      Pharmacy.updateMagicPillBenefitValue();
    } else if (drug.benefit > 0) {
      drug.benefit = drug.benefit - 1;
    }
  }

  private static updateHerbalTeaBenefitValue(drug: Drug): void {
    if (drug.benefit < MAX_BENEFIT) {
      drug.benefit = drug.benefit + 1;
    }
  }

  private static updateFervexBenefitValue(drug: Drug): void {
    if (drug.benefit < MAX_BENEFIT) {
      drug.benefit = drug.benefit + 1;

      if (
        drug.expiresIn <= DOUBLE_BENEFIT_UNDER_DAY_EXPIRATION &&
        drug.benefit < MAX_BENEFIT
      ) {
        drug.benefit = drug.benefit + 1;
      }

      if (
        drug.expiresIn <= TRIPLE_BENEFIT_UNDER_DAY_EXPIRATION &&
        drug.benefit < MAX_BENEFIT
      ) {
        drug.benefit = drug.benefit + 1;
      }
    }
  }

  private static updateMagicPillBenefitValue(): void {
    // Do nothing: "Magic pill" drug never lose benefit
  }

  private static updateDrugExpiration(drug: Drug): void {
    if (drug.name === HERBAL_TEA) {
      Pharmacy.updateHerbalTeaExpiration(drug);
    } else if (drug.name === FERVEX) {
      Pharmacy.updateFervexExpiration(drug);
    } else if (drug.name === MAGIC_PILL) {
      Pharmacy.updateMagicPillExpiration();
    } else {
      drug.expiresIn = drug.expiresIn - 1;
    }
  }

  private static updateHerbalTeaExpiration(drug: Drug): void {
    drug.expiresIn = drug.expiresIn - 1;
  }

  private static updateFervexExpiration(drug: Drug): void {
    drug.expiresIn = drug.expiresIn - 1;
  }

  private static updateMagicPillExpiration(): void {
    // Do nothing: "Magic pill" drug never expires
  }

  private static updateExpiredDrugBenefitValue(drug: Drug): void {
    if (drug.name === HERBAL_TEA) {
      Pharmacy.updateExpiredHerbalTeaBenefitValue(drug);
    } else if (drug.name === FERVEX) {
      Pharmacy.updateExpiredFervexBenefitValue(drug);
    } else if (drug.name === MAGIC_PILL) {
      Pharmacy.updateExpiredMagicPillBenefitValue();
    } else {
      if (drug.benefit > 0) {
        drug.benefit = drug.benefit - 1;
      }
    }
  }

  private static updateExpiredHerbalTeaBenefitValue(drug: Drug): void {
    if (drug.benefit < MAX_BENEFIT) {
      drug.benefit = drug.benefit + 1;
    }
  }

  private static updateExpiredFervexBenefitValue(drug: Drug): void {
    drug.benefit = drug.benefit - drug.benefit;
  }

  private static updateExpiredMagicPillBenefitValue(): void {
    // Do nothing: "Magic pill" drug never lose benefit
  }
}
