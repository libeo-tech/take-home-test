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
      }

      if (this.drugs[i].benefit > -1 && this.drugs[i].benefit < 51) {
        switch (this.drugs[i].name) {
          case "Herbal Tea":
            if (this.drugs[i].expiresIn > 0) {
              if (this.drugs[i].benefit < 50) {
                this.drugs[i].benefit = this.drugs[i].benefit + 1;
              }
            } else {
              if (this.drugs[i].benefit < 49) {
                this.drugs[i].benefit = this.drugs[i].benefit + 2;
              } else {
                this.drugs[i].benefit = 50;
              }
            }
            break;
          case "Magic Pill":
            break;
          case "Fervex":
            if (this.drugs[i].expiresIn > 0) {
              if (this.drugs[i].expiresIn <= 5) {
                if (this.drugs[i].benefit < 48) {
                  this.drugs[i].benefit = this.drugs[i].benefit + 3;
                } else {
                  this.drugs[i].benefit = 50;
                }
              } else if (
                this.drugs[i].expiresIn > 5 &&
                this.drugs[i].expiresIn <= 10
              ) {
                if (this.drugs[i].benefit < 49) {
                  this.drugs[i].benefit = this.drugs[i].benefit + 2;
                } else {
                  this.drugs[i].benefit = this.drugs[i].benefit + 1;
                }
              } else {
                this.drugs[i].benefit = this.drugs[i].benefit + 1;
              }
            } else {
              this.drugs[i].benefit = 0;
            }
            break;
          case "Dafalgan":
            if (this.drugs[i].expiresIn > 0) {
              if (this.drugs[i].benefit > 1) {
                this.drugs[i].benefit = this.drugs[i].benefit - 2;
              } else {
                this.drugs[i].benefit = 0;
              }
            } else {
              if (this.drugs[i].benefit > 3) {
                this.drugs[i].benefit = this.drugs[i].benefit - 4;
              } else {
                this.drugs[i].benefit = 0;
              }
            }
            break;
          default:
            if (this.drugs[i].expiresIn > 0) {
              if (this.drugs[i].benefit > 0) {
                this.drugs[i].benefit = this.drugs[i].benefit - 1;
              }
            } else {
              if (this.drugs[i].benefit > 1) {
                this.drugs[i].benefit = this.drugs[i].benefit - 2;
              } else {
                this.drugs[i].benefit = 0;
              }
            }
        }
      } /*else {
        this.drugs[i] = null;
      }*/
    }

    return this.drugs;
  }
}
