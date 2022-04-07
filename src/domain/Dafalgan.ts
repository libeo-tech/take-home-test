import { Drug } from "./Drug";


export class Dafalgan extends Drug {

    readonly defaultBenefitDecrease: number = 2;

    public static New(expiresIn: number, benefit: number): Dafalgan {
        return new Dafalgan(expiresIn, benefit);
    }

    private constructor(expiresIn: number, benefit: number) {
        super("Dafalgan", expiresIn, benefit);
    }

    public updateExpiredDateAndBenefitAfterOneDay(): void {
        this.expiresIn -= 1;
        this.setBenefit(this.getNewBenefit());
    }

    private getNewBenefit(): number {
        return this.benefit - (this.hasExpired ? this.defaultBenefitDecrease * 2 : this.defaultBenefitDecrease);
    }
}
