import { Drug } from "./Drug";


export class Pharmacy {

    private _drugs: Drug[];

    public static Rehydrate(drugs: Drug[]): Pharmacy {
        return new Pharmacy(drugs);
    }

    private constructor(drugs: Drug[]) {
        this._drugs = drugs;
    }

    public updateBenefitsOfDrugsAfterOneDay() {
        this._drugs.forEach(function (drug: Drug) {
            drug.updateExpiredDateAndBenefitAfterOneDay();
        });
    }

    public get drugs(): Drug[] {
      return this._drugs;  
    } 
}
