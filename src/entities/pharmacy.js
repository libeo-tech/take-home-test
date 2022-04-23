import { DrugName } from "./drug";

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }

  updateBenefitValue() {
    this.drugs.forEach(drug => {
      switch (drug.name) {
        case DrugName.MAGIC_PILL:
          break;
        case DrugName.DOLIPRANE:
        default:
          drug.updateBenefit(!drug.isExpired() ? -1 : -2);
          break;
        case DrugName.HERBAL_TEA:
          drug.updateBenefit(!drug.isExpired() ? 1 : 2);
          break;
        case DrugName.FERVEX:
          if (drug.isExpired()) {
            drug.resetBenefit();
          } else if (drug.expiresIn <= 5) {
            drug.updateBenefit(3);
          } else if (drug.expiresIn <= 10) {
            drug.updateBenefit(2);
          } else {
            drug.updateBenefit(1);
          }
          break;
      }

      if (drug.name !== DrugName.MAGIC_PILL) {
        drug.expiresIn -= 1;
      }
    });

    // for (let i = 0; i < this.drugs.length; i++) {
    //   if (
    //     this.drugs[i].name != "Herbal Tea" &&
    //     this.drugs[i].name != "Fervex"
    //   ) {
    //     if (this.drugs[i].benefit > 0) {
    //       if (this.drugs[i].name != "Magic Pill") {
    //         this.drugs[i].benefit = this.drugs[i].benefit - 1;
    //       }
    //     }
    //   } else {
    //     if (this.drugs[i].benefit < 50) {
    //       this.drugs[i].benefit = this.drugs[i].benefit + 1;
    //       if (this.drugs[i].name == "Fervex") {
    //         if (this.drugs[i].expiresIn < 11) {
    //           if (this.drugs[i].benefit < 50) {
    //             this.drugs[i].benefit = this.drugs[i].benefit + 1;
    //           }
    //         }
    //         if (this.drugs[i].expiresIn < 6) {
    //           if (this.drugs[i].benefit < 50) {
    //             this.drugs[i].benefit = this.drugs[i].benefit + 1;
    //           }
    //         }
    //       }
    //     }
    //   }
    //   if (this.drugs[i].name != "Magic Pill") {
    //     this.drugs[i].expiresIn = this.drugs[i].expiresIn - 1;
    //   }
    //   if (this.drugs[i].expiresIn < 0) {
    //     if (this.drugs[i].name != "Herbal Tea") {
    //       if (this.drugs[i].name != "Fervex") {
    //         if (this.drugs[i].benefit > 0) {
    //           if (this.drugs[i].name != "Magic Pill") {
    //             this.drugs[i].benefit = this.drugs[i].benefit - 1;
    //           }
    //         }
    //       } else {
    //         this.drugs[i].benefit =
    //           this.drugs[i].benefit - this.drugs[i].benefit;
    //       }
    //     } else {
    //       if (this.drugs[i].benefit < 50) {
    //         this.drugs[i].benefit = this.drugs[i].benefit + 1;
    //       }
    //     }
    //   }
    // }

    return this.drugs;
  }
}
