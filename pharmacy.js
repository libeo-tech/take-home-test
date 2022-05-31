export class Drug {
  constructor(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
}

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }
  updateBenefitValue() {
    for (var i = 0; i < this.drugs.length; i++) {
      if(this.drugs[i].benefit <= 0 || this.drugs[i].benefit >= 50){
        if(this.drugs[i].name === 'Fervex'){this.drugs[i].benefit = 0}
          this.drugs[i].benefit <= 0 ? this.drugs[i].benefit = 0 : this.drugs[i].benefit = 50;
          this.drugs[i].expiresIn --;
        }
        else if(this.drugs[i].name === 'Magic Pill'){
          this.drugs[i].benefit = this.drugs[i].benefit;
          this.drugs[i].expiresIn = this.drugs[i].expiresIn;
        }
        else{
          switch (this.drugs[i].name) {
            case 'Herbal Tea':
              this.drugs[i].benefit >= 50 ? this.drugs[i].benefit = 50 : this.drugs[i].expiresIn > 0 ? this.drugs[i].benefit++ : this.drugs[i].benefit += 2;
              this.drugs[i].expiresIn--;
              break;
            case 'Fervex':
              this.drugs[i].expiresIn > 10 ? this.drugs[i].benefit++ : this.drugs[i].expiresIn > 5 ? this.drugs[i].benefit += 2 : this.drugs[i].expiresIn < 3 ? this.drugs[i].benefit = 0 : this.drugs[i].benefit += 3;
              this.drugs[i].expiresIn--;
              break;
            default:
              this.drugs[i].benefit <= 0 ? this.drugs[i].benefit = 0 : this.drugs[i].expiresIn > 0 ? this.drugs[i].benefit-- : this.drugs[i].benefit -= 2;
              this.drugs[i].expiresIn--;
          }
        }
    }
    return this.drugs;
  }
}
