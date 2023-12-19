export default class Drug {
  public name: string;

  private expiresIn: number;

  private benefit: number;

  constructor(name: string, expiresIn: number, benefit: number) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  public getExpiresIn():number {
    return (this.expiresIn);
  }

  public setExpiresIn(day:number) {
    this.expiresIn += day;
  }

  public getBenefit():number {
    return (this.benefit);
  }

  public setBenefit(benefit:number) {
    this.benefit += benefit;
    if (this.benefit > 50) { this.benefit = 50; }
    if (this.benefit < 0) { this.benefit = 0; }
  }

  public computeDrug() {
    this.expiresIn -= 1;
    this.benefit -= 1;
  }
}
