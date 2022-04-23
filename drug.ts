export class Drug {
    public name: string;
    public expiresIn: number;
    public benefit: number;

    constructor(name: string, expiresIn: number, benefit: number) {
        this.name = name;
        this.expiresIn = expiresIn;
        this.benefit = benefit;
    }
}