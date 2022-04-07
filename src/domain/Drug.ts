export abstract class Drug { 
    readonly minimumBenefit: number = 0;  
    readonly maximumBenefit: number = 50; 

    protected name: string;
    protected expiresIn: number;
    protected benefit: number;

    constructor(name:string, expiresIn: number, benefit: number) {
        this.name = name;
        this.expiresIn = expiresIn;
        this.setBenefit(benefit);
    }

    protected get hasExpired() : boolean {
        return this.expiresIn < 0;
    }

    public abstract updateExpiredDateAndBenefitAfterOneDay(): void;

    protected setBenefit(newBenefit: number) {
        this.benefit = Math.max(this.minimumBenefit, Math.min(this.maximumBenefit, newBenefit));
    }
}