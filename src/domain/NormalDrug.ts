import { Drug } from "./Drug";

export class NormalDrug extends Drug  {
  
    readonly defaultBenefitDecrease: number = 1;

    public static New(name: string, expiresIn: number, benefit: number): NormalDrug {
        return new NormalDrug(name, expiresIn, benefit);
    }

    private constructor(name: string, expiresIn: number, benefit: number) {
        super();
        
        this.name = name;
        this.expiresIn = expiresIn;
        this.benefit = benefit;
    }

    public updateExpiredDateAndBenefitAfterOneDay(): void {
        this.expiresIn -= 1;
        this.benefit = Math.max(this.benefit - this.getNewBenefitDecrease(), this.minimumBenefit);  
    }

    private getNewBenefitDecrease() : number {
        return this.hasExpired ? this.defaultBenefitDecrease * 2 : this.defaultBenefitDecrease;
    }
}