import { Drug } from "./Drug";


export class MagicPill extends Drug {

    public static New(expiresIn: number, benefit: number): MagicPill {
        return new MagicPill(expiresIn, benefit);
    }

    private constructor(expiresIn: number, benefit: number) {
        super();

        this.name = "Magic Pill";
        this.expiresIn = expiresIn;
        this.benefit = benefit;
    }

    public updateExpiredDateAndBenefitAfterOneDay(): void {
        this.expiresIn = Math.max(0, this.expiresIn - 1);
    }

}
