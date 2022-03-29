import {DrugModel} from "../drugs/models/drug"
import {Doliprane, HerbalTea, Fervex, MagicPill, Dafalgan} from "../drugs/index"

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = this.createDrugs(drugs);
  }

  createDrugs(drugs) {
    return drugs.map((drug) => {
      let newDrug;

      if (Object.values(DrugModel.drugs).indexOf(drug[0]) > -1) {
        switch (drug[0].toLowerCase()) {
          case 'doliprane':
            newDrug = new Doliprane(drug[1], drug[2])
            break;
          case 'herbal tea':
            newDrug = new HerbalTea(drug[1], drug[2])
            break;
          case 'fervex':
            newDrug = new Fervex(drug[1], drug[2])
            break;
          case 'magic pill':
            newDrug = new MagicPill(drug[1], drug[2])
            break;
          case 'dafalgan':
            newDrug = new Dafalgan(drug[1], drug[2])
            break;
          default:
            break;
        }

        return newDrug;
      } else {
        throw new TypeError('The Pharmacy does not have this drug available.');
      }
    })
  }

  updateDrugValues() {
    this.drugs.map((drug) => {
      drug.updateBenefitValue(drug)
      drug.updateExpiresInValue(drug)
    });

    return this.drugs;
  }
}
