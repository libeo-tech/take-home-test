import { Drug, Fervex, HerbalTea, MagicPill, Dafalgan } from './drug';

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

        case 'Dafalgan':
          this.drugs.push(
            new Dafalgan(drug.name, drug.expiresIn, drug.benefit)
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
    return this.drugs;
  }
}
