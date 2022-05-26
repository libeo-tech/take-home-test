import Dafalgan from './Doliprane/Doliprane';
import Fervex from './Fervex/Fervex';
import HerbalTea from './HerbalTea/HerbalTea';
import MagicPill from './MagicPill/MagiPill';
import Drug from './Model/Drug';

export default class Pharmacy {
  drugs:Drug[];

  constructor(drugs:Drug []) {
    this.drugs = drugs.map<Drug>((drug:Drug) => {
      switch (drug.name) {
        case 'Fervex': {
          return new Fervex(drug.name, drug.getExpiresIn(), drug.getBenefit());
        }
        case 'Herbal Tea': {
          return new HerbalTea(drug.name, drug.getExpiresIn(), drug.getBenefit());
        }
        case 'Magic Pill': {
          return new MagicPill(drug.name, drug.getExpiresIn(), drug.getBenefit());
        }
        case 'Doliprane': {
          return new Dafalgan(drug.name, drug.getExpiresIn(), drug.getBenefit());
        }
        default: {
          return drug;
        }
      }
    });
  }

  updateBenefitValue() {
    for (let i = 0; i < this.drugs.length; i += 1) {
      this.drugs[i].computeDrug();
    }
    return this.drugs;
  }
}
