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
    for (let i = 0; i < this.drugs.length; i++) {
      if (this.drugs[i].name != HERBAL_TEA && this.drugs[i].name != FERVEX) {
        if (this.drugs[i].benefit > 0) {
          if (this.drugs[i].name != MAGIC_PILL) {
            this.drugs[i].benefit = this.drugs[i].benefit - 1;
          }
        }
      } else {
        if (this.drugs[i].benefit < MAX_BENEFIT) {
          this.drugs[i].benefit = this.drugs[i].benefit + 1;
          if (this.drugs[i].name == FERVEX) {
            if (
              this.drugs[i].expiresIn <= DOUBLE_BENEFIT_UNDER_DAY_EXPIRATION
            ) {
              if (this.drugs[i].benefit < MAX_BENEFIT) {
                this.drugs[i].benefit = this.drugs[i].benefit + 1;
              }
            }
            if (
              this.drugs[i].expiresIn <= TRIPLE_BENEFIT_UNDER_DAY_EXPIRATION
            ) {
              if (this.drugs[i].benefit < MAX_BENEFIT) {
                this.drugs[i].benefit = this.drugs[i].benefit + 1;
              }
            }
          }
        }
      }
      if (this.drugs[i].name != MAGIC_PILL) {
        this.drugs[i].expiresIn = this.drugs[i].expiresIn - 1;
      }
      if (this.drugs[i].expiresIn < 0) {
        if (this.drugs[i].name != HERBAL_TEA) {
          if (this.drugs[i].name != FERVEX) {
            if (this.drugs[i].benefit > 0) {
              if (this.drugs[i].name != MAGIC_PILL) {
                this.drugs[i].benefit = this.drugs[i].benefit - 1;
              }
            }
          } else {
            this.drugs[i].benefit =
              this.drugs[i].benefit - this.drugs[i].benefit;
          }
        } else {
          if (this.drugs[i].benefit < MAX_BENEFIT) {
            this.drugs[i].benefit = this.drugs[i].benefit + 1;
          }
        }
      }
    }

    return this.drugs;
  }
}
