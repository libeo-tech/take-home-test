import { Drug } from "../../drug/entities/drug.entity";
import { PharmacyService } from "../pharmacy.service";

export class Pharmacy {
  drugs: Drug[];
  constructor(drugs: Drug[] = []) {
    this.drugs = drugs;
  }
  updateBenefitValue() {
    return this.drugs.map((drug) =>
      PharmacyService.updateBenefitAndExpirationDate(drug)
    );
  }
}
