import { Drug } from "./Drug";


export class Dafalgan extends Drug {

    readonly defaultBenefitDecrease: number = 2;

    public static New(expiresIn: number, benefit: number): Dafalgan {
        return new Dafalgan(expiresIn, benefit);
    }

    private constructor(expiresIn: number, benefit: number) {
        super();

        this.name = "Dafalgan";
        this.expiresIn = expiresIn;
        this.benefit = benefit;
    }

    public updateExpiredDateAndBenefitAfterOneDay(): void {
        this.expiresIn -= 1;
        this.benefit = this.benefit - this.getNewBenefitIncrease();
    }

    private getNewBenefitIncrease(): number {
        return this.hasExpired ? this.defaultBenefitDecrease * 2 : this.defaultBenefitDecrease;
    }
}
