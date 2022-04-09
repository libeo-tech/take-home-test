export class Drug {
  
    constructor(name, expiresIn, benefit) {
      this.name = name;
      this.expiresIn = expiresIn;
      this.benefit = benefit;
    }
    incrementBenefit(cout=1)
    {
        this.benefit=+cout;
    }
    decrementBenefit(cout=1)
    {
        this.benefit=-cout;
    }
    decrementexpiresIn()
    {
        this.expiresIn--;
    }
  }