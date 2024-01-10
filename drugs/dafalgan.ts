import { Drug, DrugName } from "./drug";

export class Dafalgan extends Drug {
    constructor(expiresIn: number, benefit: number) {
        super(DrugName.DAFALGAN, expiresIn, benefit);
    }
    
    public updateDrug(): void {
        if (this.isExpired) {
            this.decreaseBenefit(2);
            return;
        }
        this.decreaseExpiresIn();
        this.decreaseBenefit(2);
    }
}