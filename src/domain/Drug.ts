export abstract class Drug { 
    readonly minimumBenefit: number = 0;  
    readonly maximumBenefit: number = 50; 

    private _name: string;
    private _expiresIn: number;
    private _benefit: number;

    protected get hasExpired() : boolean {
        return this._expiresIn < 0;
    }

    public abstract updateExpiredDateAndBenefitAfterOneDay(): void;

    protected get name() : string {
        return this._name;
    }

    protected set name(name: string) {
        this._name = name;
    }

    protected get benefit() : number {
        return this._benefit;
    }

    protected set benefit(newBenefit: number) {
        this._benefit = Math.max(this.minimumBenefit, Math.min(this.maximumBenefit, newBenefit));
    }

    protected get expiresIn() : number {
        return this._expiresIn;
    }

    protected set expiresIn(expiresIn: number) {
        this._expiresIn = expiresIn;
    }
}