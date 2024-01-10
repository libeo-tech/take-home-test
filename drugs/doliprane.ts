import { Drug, DrugName } from "./drug";

export class Doliprane extends Drug {
    constructor(expiresIn: number, benefit: number) {
        super(DrugName.DOLIPRANE, expiresIn, benefit);
    }

    public updateDrug(): void {
        if (this.isExpired) {
            this.resetBenefit();
            return;
        }
       this.decreaseExpiresIn();
       this.decreaseBenefit();
    }
}