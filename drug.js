export class Drug {
    constructor(name, expiresIn, benefit) {
      this.name = name;
      this.expiresIn = expiresIn;
      this.benefit = benefit;
    }
    
    updateBenefit() {
        switch (this.name) {
            case "Doliprane": this.updateDefault(); break;
            case "Fervex": this.updateFervex(); break;
            case "Herbal Tea": this.updateHerbalTea(); break;
            case "Dafalgan": this.updateDafalgan(); break;
            case "Magic Pill": break;
            default: this.updateDefault(); break;
        }
        
        if (this.name != "Magic Pill") this.expiresIn = this.expiresIn - 1
        if (this.benefit > 50) this.benefit = 50

        return this
    }

    updateHerbalTea() {
        if (this.expiresIn > 0)
            this.benefit = this.benefit + 1
        else if (this.expiresIn <= 0)
            this.benefit = this.benefit + 2
    }

    updateFervex() {
        if (this.expiresIn > 10)
            this.benefit = this.benefit + 1
        else if (this.expiresIn <= 10 && this.expiresIn > 5)
            this.benefit = this.benefit + 2
        else if (this.expiresIn <= 5 && this.expiresIn > 0)
            this.benefit = this.benefit + 3
        else
            this.benefit = 0
    }

    updateDafalgan() {
        if (this.expiresIn > 0 && this.benefit - 2 >= 0)
            this.benefit = this.benefit - 2
        else if (this.expiresIn <= 0 && this.benefit - 4 >= 0)
            this.benefit = this.benefit - 4
    }

    updateDefault() {
        if (this.expiresIn > 0 && this.benefit - 1 >= 0)
            this.benefit = this.benefit - 1
         else if (this.expiresIn <= 0 && this.benefit - 2 >= 0)
            this.benefit = this.benefit - 2
        
    }
}