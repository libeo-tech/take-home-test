import { Drug } from "./Drug";

export class Fervex extends Drug {

    readonly defaultBenefitIncrease: number = 1;

    public static New(expiresIn: number, benefit: number): Fervex {
        return new Fervex(expiresIn, benefit);
    }

    private constructor(expiresIn: number, benefit: number) {
        super();

        this.name = "Fervex";
        this.expiresIn = expiresIn;
        this.benefit = benefit;
    }

    public updateExpiredDateAndBenefitAfterOneDay(): void {
        this.expiresIn -= 1;
        this.benefit = this.GetNewBenefit();
    }

    private GetNewBenefit(): number {
        if(this.expiresIn <= 0)
            return 0;
        else if(this.expiresIn <= 5)
            return this.benefit + (this.defaultBenefitIncrease * 3);
        else if(this.expiresIn <= 10)
            return this.benefit + (this.defaultBenefitIncrease * 2);
        else
            return this.benefit + this.defaultBenefitIncrease;
    }
}
