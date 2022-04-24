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
        
          if (this.drugs[i].name != "Magic Pill") {
              this.drugs[i].expiresIn = this.drugs[i].expiresIn - 1;
              if (this.drugs[i].benefit > 0 && this.drugs[i].benefit <= 50) {
                  switch (this.drugs[i].name) {
                      case "Herbal Tea":
                          this.drugs[i].benefit += this.drugs[i].expiresIn >= 0 ? 1 : 2;
                          break;
                      case "Fervex":
                          if (this.drugs[i].expiresIn > 10) {
                            this.drugs[i].benefit += 1;
                          } else if (this.drugs[i].expiresIn > 5 && this.drugs[i].expiresIn <= 10 ) {
                              // Benefit increases by 2 when there are 10 days or less
                              this.drugs[i].benefit += 2;
                          } else if (this.drugs[i].expiresIn >= 0 &&  this.drugs[i].expiresIn <= 5 ) {
                              // Benefit increases by 3 when there are 5 days or less 
                              this.drugs[i].benefit += 3;
                          } else {
                              // Benefit drops to 0 after the expiration date
                              this.drugs[i].benefit = 0;
                          }
                          break;
                      case "Dafalgan":
                        this.drugs[i].benefit -= this.drugs[i].expiresIn >= 0 ? 2 : 4;
                          break;
                      default:
                          this.drugs[i].benefit -= this.drugs[i].expiresIn >= 0 ? 1 : 2;
                          break;
                  }
              }
              if (this.drugs[i].benefit > 50) this.drugs[i].benefit = 50;
              if (this.drugs[i].benefit < 0) this.drugs[i].benefit = 0;
          }
    }
    return this.drugs;
  }
}
