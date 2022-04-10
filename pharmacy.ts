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
    if (drug.name != HERBAL_TEA && drug.name != FERVEX) {
      if (drug.benefit > 0) {
        if (drug.name != MAGIC_PILL) {
          drug.benefit = drug.benefit - 1;
        }
      }
    } else {
      if (drug.benefit < MAX_BENEFIT) {
        drug.benefit = drug.benefit + 1;
        if (drug.name == FERVEX) {
          if (drug.expiresIn <= DOUBLE_BENEFIT_UNDER_DAY_EXPIRATION) {
            if (drug.benefit < MAX_BENEFIT) {
              drug.benefit = drug.benefit + 1;
            }
          }
          if (drug.expiresIn <= TRIPLE_BENEFIT_UNDER_DAY_EXPIRATION) {
            if (drug.benefit < MAX_BENEFIT) {
              drug.benefit = drug.benefit + 1;
            }
          }
        }
      }
    }
  }

  private static updateDrugExpiration(drug: Drug): void {
    if (drug.name != MAGIC_PILL) {
      drug.expiresIn = drug.expiresIn - 1;
    }
  }

  private static updateExpiredDrugBenefitValue(drug: Drug): void {
    if (drug.name != HERBAL_TEA) {
      if (drug.name != FERVEX) {
        if (drug.benefit > 0) {
          if (drug.name != MAGIC_PILL) {
            drug.benefit = drug.benefit - 1;
          }
        }
      } else {
        drug.benefit = drug.benefit - drug.benefit;
      }
    } else {
      if (drug.benefit < MAX_BENEFIT) {
        drug.benefit = drug.benefit + 1;
      }
    }
  }
}
