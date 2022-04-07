import { Drug } from "./Drug";

export class NormalDrug extends Drug  {
  
    readonly defaultBenefitDecrease: number = 1;

    public static New(name: string, expiresIn: number, benefit: number): NormalDrug {
        return new NormalDrug(name, expiresIn, benefit);
    }

    private constructor(name: string, expiresIn: number, benefit: number) {
        super(name, expiresIn, benefit);
    }

    public updateExpiredDateAndBenefitAfterOneDay(): void {
        this.expiresIn -= 1;
        this.setBenefit(this.getNewBenefit());  
    }

    private getNewBenefit() : number {
        return this.benefit - (this.hasExpired ? this.defaultBenefitDecrease * 2 : this.defaultBenefitDecrease);
    }
}