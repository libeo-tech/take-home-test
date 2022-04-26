import { Drug, DrugName } from "./drug";

export class HerbalTea extends Drug {
    constructor(expiresIn: number, benefit: number) {
        super(DrugName.HERBAL_TEA, expiresIn, benefit);
    }

    public updateDrug(): void {
        if (this.isExpired) {
            this.incrementBenefit(2);
            return;
        }
        
        this.decreaseExpiresIn();
        this.incrementBenefit();
    }
}