import { Drug } from "./Drug";


export class HerbalTea extends Drug {

    readonly defaultBenefitIncrease: number = 1;

    public static New(expiresIn: number, benefit: number): HerbalTea {
        return new HerbalTea(expiresIn, benefit);
    }

    private constructor(expiresIn: number, benefit: number) {
        super("Herbal Tea", expiresIn, benefit);
    }

    public updateExpiredDateAndBenefitAfterOneDay(): void {
        this.expiresIn -= 1;
        this.setBenefit(this.getNewBenefit());  
    }

    private getNewBenefit() : number {
        return this.benefit + (this.hasExpired ? this.defaultBenefitIncrease * 2 : this.defaultBenefitIncrease);
    }
}


