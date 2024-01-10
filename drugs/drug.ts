export abstract class Drug {
    readonly minBenefit: number = 0;
    readonly maxBenefit: number = 50;
    
    public name: string;
    public expiresIn: number;
    public benefit: number;
    public isExpired: boolean = false;

    constructor(name: string, expiresIn: number, benefit: number) {
        this.name = name;
        this.expiresIn = expiresIn;
        this.benefit = benefit;
    }

    public decreaseExpiresIn(): void {
        this.expiresIn--;
        if (this.expiresIn <= 0) {
            this.isExpired = true;
        }
    };

   public decreaseBenefit(multiplicator: number = 1): void {
        if (this.isExpired) {
            this.benefit - multiplicator * 2 <= this.minBenefit ? this.benefit = this.minBenefit : this.benefit -= multiplicator * 2;
        } else {
            this.benefit - multiplicator <= this.minBenefit ? this.benefit = this.minBenefit : this.benefit -= multiplicator;
        }
    };

    public incrementBenefit(multiplicator: number = 1): void {
        this.benefit + multiplicator >= this.maxBenefit ? this.benefit = this.maxBenefit : this.benefit += multiplicator;
    };

    public resetBenefit(): void {
        this.benefit = this.minBenefit;
    }

    abstract updateDrug(): void;
}

export const DrugName = {
    DOLIPRANE: "Doliprane",
    HERBAL_TEA: "Herbal Tea",
    FERVEX: "Fervex",
    MAGIC_PILL: "Magic Pill",
    DAFALGAN: "Dafalgan"
  };