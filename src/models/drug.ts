interface DrugConfig {
  [key: string]: {
    benefitDecrease: number;
    expiresInDecrease: number;
  };
}

export class Drug {
  name: string;
  expiresIn: number;
  benefit: number;

  constructor(name: string, expiresIn: number, benefit: number) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  getFervexBenefitIncrease(): number {
    if (this.expiresIn < 0) return -this.benefit;
    if (this.expiresIn <= 5) return 3;
    if (this.expiresIn <= 10) return 2;
    return 1;
  }

  getDrugConfig(): any {
    const drugConfig: DrugConfig = {
      "Herbal Tea": {
        benefitDecrease: -1 - Number(this.expiresIn < 0),
        expiresInDecrease: 1
      },
      "Magic Pill": {
        benefitDecrease: 0,
        expiresInDecrease: 0
      },
      Fervex: {
        benefitDecrease: -this.getFervexBenefitIncrease(),
        expiresInDecrease: 1
      },
      other: {
        benefitDecrease: 1 + Number(this.expiresIn < 0),
        expiresInDecrease: 1
      }
    };

    let config = drugConfig[this.name];
    if (config === undefined) {
      config = drugConfig["other"];
    }
    return config;
  }

  updateBenefit(): void {
    this.benefit = Math.min(
      Math.max(this.benefit - this.getDrugConfig().benefitDecrease, 0),
      50
    );
  }

  updateExpirationDate(): void {
    this.expiresIn = this.expiresIn - this.getDrugConfig().expiresInDecrease;
  }
}
