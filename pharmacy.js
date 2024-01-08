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
            switch (this.drugs[i].name) {
                case "Herbal Tea":
                    this.drugs[i].benefit < 49 && this.drugs[i].expiresIn > 0 ?
                        (this.drugs[i].benefit = this.drugs[i].benefit + 1) && (this.drugs[i].expiresIn = this.drugs[i].expiresIn - 1)
                        :
                        this.drugs[i].expiresIn <= 0 && this.drugs[i].benefit < 49 ?
                            (this.drugs[i].expiresIn = this.drugs[i].expiresIn - 1) && (this.drugs[i].benefit = this.drugs[i].benefit + 2)
                            :
                            (this.drugs[i].expiresIn = this.drugs[i].expiresIn - 1) && (this.drugs[i].benefit = this.drugs[i].benefit)
                    break;
                case "Fervex":
                    this.drugs[i].benefit < 50 ?
                        this.drugs[i].expiresIn > 0 ?
                            (this.drugs[i].expiresIn < 6) && (this.drugs[i].benefit < 47) ?
                                (this.drugs[i].expiresIn = this.drugs[i].expiresIn - 1) && (this.drugs[i].benefit = this.drugs[i].benefit + 3)
                                :
                                (this.drugs[i].expiresIn < 11) && (this.drugs[i].benefit < 48) ?
                                    (this.drugs[i].expiresIn = this.drugs[i].expiresIn - 1) && (this.drugs[i].benefit = this.drugs[i].benefit + 2)
                                    :
                                    (this.drugs[i].expiresIn = this.drugs[i].expiresIn - 1) && (this.drugs[i].benefit = this.drugs[i].benefit + 1)
                            :
                            (this.drugs[i].expiresIn = this.drugs[i].expiresIn - 1) && (this.drugs[i].benefit = this.drugs[i].benefit)
                        :
                        (this.drugs[i].expiresIn = this.drugs[i].expiresIn - 1) && (this.drugs[i].benefit = 0)
                    break;
                case "Magic Pill":
                    this.drugs[i].expiresIn = this.drugs[i].expiresIn
                    this.drugs[i].benefit < 0 ? this.drugs[i].benefit = 0 : this.drugs[i].benefit = this.drugs[i].benefit
                    break;
                case "Dafalgan":
                    this.drugs[i].benefit > 0 && this.drugs[i].benefit < 50 ?
                        this.drugs[i].expiresIn <= 0 && this.drugs[i].benefit > 0 ?
                            this.drugs[i].benefit = this.drugs[i].benefit - 4
                            :
                            this.drugs[i].benefit = this.drugs[i].benefit - 2
                        :
                        this.drugs[i].benefit
                    this.drugs[i].expiresIn = this.drugs[i].expiresIn - 1
                    break;
                default:
                    this.drugs[i].benefit > 0 && this.drugs[i].benefit < 50 ?
                        this.drugs[i].expiresIn <= 0 && this.drugs[i].benefit > 0 ?
                            this.drugs[i].benefit = this.drugs[i].benefit - 2
                            :
                            this.drugs[i].benefit = this.drugs[i].benefit - 1
                        :
                        this.drugs[i].benefit
                    this.drugs[i].expiresIn = this.drugs[i].expiresIn - 1
                    break;
            }
        }
        return this.drugs;
    }
}