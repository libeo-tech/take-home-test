export const herbalTea = "Herbal Tea";
export const fervex = "Fervex";
export const magicPill = "Magic Pill";
export const dafalgan = "Dafalgan";

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
        // Si le medicament à deja un benefice inferieur ou eglal a 0 ou 50, rien ne change, seul la date de péremption diminue.
        if(this.drugs[i].benefit <= 0 || this.drugs[i].benefit >= 50){
          if(this.drugs[i].name === fervex){this.drugs[i].benefit = 0}
            this.drugs[i].benefit <= 0 ? this.drugs[i].benefit = 0 : this.drugs[i].benefit = 50;
            this.drugs[i].expiresIn --;
          }
          // si le medicament est "magic pill" alors rien ne change pour ce medicament.
          else if(this.drugs[i].name === magicPill){
            this.drugs[i].benefit = this.drugs[i].benefit;
            this.drugs[i].expiresIn = this.drugs[i].expiresIn;
          }
          else{
            // Sinon on switch, ce qui permet de checker les medicament 1 par 1 et d'arreter la condition si un medicament est trouvé. 
            // On évite ainsi de boucler dans tout les médicaments.
            switch (this.drugs[i].name) {
              // si le medicament est "herbal tea", si la puissance est >= 50, ont la réajuste a 50. Si l'expiration est > 0 ont ajoute +1 a la puissance sinon +2. 
              case herbalTea:
                this.drugs[i].benefit >= 50 ? this.drugs[i].benefit = 50 : this.drugs[i].expiresIn > 0 ? this.drugs[i].benefit++ : this.drugs[i].benefit += 2;
                this.drugs[i].expiresIn--;
                break; // ont arrete la condition si ce medicament est choisi.
              // si le medicament est "fervex", si l'expiration est > 10, ont ajoute +1 a la puissance 
              // sinon si l'expiration est > 5, ont ajoute +2 a la puissance 
              // sinon si l'expiration est > 3, ont ajoute +3 a la puissance sinon la puissance est égale a 0.
              case fervex:
                this.drugs[i].expiresIn > 10 ? this.drugs[i].benefit++ : this.drugs[i].expiresIn > 5 ? this.drugs[i].benefit += 2 : this.drugs[i].expiresIn < 3 ? this.drugs[i].benefit = 0 : this.drugs[i].benefit += 3;
                this.drugs[i].expiresIn--;
                break;
                // si le medicament est "dafalgan", si l'expiration est >= 0, on enlève -2 a la puissance sinon -4.
              case dafalgan:
                this.drugs[i].expiresIn >= 0 ? this.drugs[i].benefit -= 2 : this.drugs[i].benefit -= 4;
                this.drugs[i].expiresIn--;
                  break;
                  //par défault tout les médicaments qui n'ont pas de consigne précise comme le "doliprane",
                  //si l'expiration est >= 0, ont enléve -1 a la puissance sinon -2.
              default:
                this.drugs[i].benefit <= 0 ? this.drugs[i].benefit = 0 : this.drugs[i].expiresIn > 0 ? this.drugs[i].benefit-- : this.drugs[i].benefit -= 2;
                this.drugs[i].expiresIn--;
            }
          }
      }
      return this.drugs;
    }
  }
  