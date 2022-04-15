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
      const drugName = this.drugs[i].name;
      if(drugName == "Magic Pill") {
          continue;
      }
      // expiration evolution
      this.drugs[i].expiresIn = this.drugs[i].expiresIn - 1;
      const expirationTime = this.drugs[i].expiresIn;
      let evolutionValue = (expirationTime < 0)? 2:1;
      let evolutionSign = -1;
      let evolutionCoeff = 1;
      let stillWorthCoeff = 1;
      
      switch (drugName) {
          case 'Herbal Tea':
              evolutionSign = 1;
              break;

          case 'Fervex':
              switch (true) {
                  case (expirationTime < 0):
                      stillWorthCoeff = 0;
                      break;
                  case (expirationTime < 6):
                      evolutionValue = 3;
                      break;
                  case (expirationTime < 11):
                      evolutionValue = 2;
                      break;
                  default:
                      break;
              }
              evolutionSign = 1;
              break;

          case 'Dafalgan':
              evolutionCoeff = 2;
              break;

          default:
              break;
        }
        // calculate benefit evolution
        this.drugs[i].benefit = (this.drugs[i].benefit + (evolutionValue * evolutionSign * evolutionCoeff)) * stillWorthCoeff;

        // general rules
        // the benefit of an item is never more than 50
        if(this.drugs[i].benefit > 50) {
          this.drugs[i].benefit = 50;
        }
        // the benefit of an item is never less than 0
        if(this.drugs[i].benefit < 0) {
          this.drugs[i].benefit = 0;
        }
        
    }

    return this.drugs;
  }
}