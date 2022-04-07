import { Drug } from "./Drug";


export class MagicPill extends Drug {

    public static New(expiresIn: number, benefit: number): MagicPill {
        return new MagicPill(expiresIn, benefit);
    }

    private constructor(expiresIn: number, benefit: number) {
        super("Magic Pill", expiresIn, benefit);
    }

    public updateExpiredDateAndBenefitAfterOneDay(): void { }

}
