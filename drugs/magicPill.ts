import { Drug, DrugName } from "./drug";

export class MagicPill extends Drug {
    constructor(expiresIn: number, benefit: number) {
        super(DrugName.MAGIC_PILL, expiresIn, benefit);
    }

    public updateDrug(): void {}
}