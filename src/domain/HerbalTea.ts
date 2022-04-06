import { Drug } from "./Drug";


export class HerbalTea extends Drug {

    readonly defaultBenefitIncrease: number = 1;

    public static New(expiresIn: number, benefit: number): HerbalTea {
        return new HerbalTea(expiresIn, benefit);
    }

    private constructor(expiresIn: number, benefit: number) {
        super();

        this.name = "Herbal Tea";
        this.expiresIn = expiresIn;
        this.benefit = benefit;
    }

    public updateExpiredDateAndBenefitAfterOneDay(): void {
        this.expiresIn -= 1;
        this.benefit = this.benefit + this.getNewBenefitIncrease();  
    }

    private getNewBenefitIncrease() : number {
        return this.hasExpired ? this.defaultBenefitIncrease * 2 : this.defaultBenefitIncrease;
    }
}


