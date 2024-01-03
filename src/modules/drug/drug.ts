export class Drug {
  name: string;
  benefit: number;
  expiresIn: number;
  constructor(name: string, expiresIn: number, benefit: number) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
}
