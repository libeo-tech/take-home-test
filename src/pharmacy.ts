import { Drug, Fervex, HerbalTea, MagicPill } from './drug';

export class Pharmacy {
  drugs: Drug[];

  constructor(drugs: Drug[] = []) {
    this.drugs = [];
    drugs.forEach((drug) => {
      switch (drug.name) {
        case 'Herbal Tea':
          this.drugs.push(
            new HerbalTea(drug.name, drug.expiresIn, drug.benefit)
          );
          break;

        case 'Fervex':
          this.drugs.push(new Fervex(drug.name, drug.expiresIn, drug.benefit));
          break;

        case 'Magic Pill':
          this.drugs.push(
            new MagicPill(drug.name, drug.expiresIn, drug.benefit)
          );
          break;

        default:
          this.drugs.push(new Drug(drug.name, drug.expiresIn, drug.benefit));
          break;
      }
    });
  }
  updateBenefitValue() {
    this.drugs.forEach((drug) => drug.updateOwnBenefitValue());

    // for (var i = 0; i < this.drugs.length; i++) {
    //   if (
    //     this.drugs[i].name != 'Herbal Tea' &&
    //     this.drugs[i].name != 'Fervex'
    //   ) {
    //     if (this.drugs[i].benefit > 0) {
    //       if (this.drugs[i].name != 'Magic Pill') {
    //         this.drugs[i].benefit = this.drugs[i].benefit - 1;
    //       }
    //     }
    //   } else {
    //     if (this.drugs[i].benefit < 50) {
    //       this.drugs[i].benefit = this.drugs[i].benefit + 1;
    //       if (this.drugs[i].name == 'Fervex') {
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
    //   if (this.drugs[i].name != 'Magic Pill') {
    //     this.drugs[i].expiresIn = this.drugs[i].expiresIn - 1;
    //   }
    //   if (this.drugs[i].expiresIn < 0) {
    //     if (this.drugs[i].name != 'Herbal Tea') {
    //       if (this.drugs[i].name != 'Fervex') {
    //         if (this.drugs[i].benefit > 0) {
    //           if (this.drugs[i].name != 'Magic Pill') {
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
