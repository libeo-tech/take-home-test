import { Drug, DrugName } from "./drug";

export class Fervex extends Drug {
    constructor(expiresIn: number, benefit: number) {
        super(DrugName.FERVEX, expiresIn, benefit);
    }

    public updateDrug(): void {
        if (this.isExpired) {
            this.resetBenefit();
            return;
        }
        if (this.expiresIn <= 5) {
            this.decreaseExpiresIn();
            this.incrementBenefit(3);
            return;
        }
        if (this.expiresIn <= 10) {
            this.decreaseExpiresIn();
            this.incrementBenefit(2);
            return;
        }
    }
}