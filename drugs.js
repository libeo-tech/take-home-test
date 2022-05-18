
export class Drug {
    constructor(name, expiresIn, benefit) {
      this.name = name;
      this.expiresIn = expiresIn;
      this.benefit = benefit;
    }

    updateBenefitValue () {
        if(this.expiresIn >= 1) {
            this.expiresIn--
            if (this.benefit >= 1) this.benefit--
        }
        else {
            if (this.benefit >= 2)  this.benefit -= 2
            else if (this.benefit >= 1)  this.benefit --
        }
        return this
    }
  }
  