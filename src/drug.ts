export class Drug {
  name: string;
  expiresIn: number;
  benefit: number;

  constructor(name: string, expiresIn: number, benefit: number) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = (benefit > 50) ? 50 : ((benefit < 0) ? 0 : benefit);
  }

	updateOwnBenefitValue() {}
}

export class HerbalTea extends Drug {
	updateOwnBenefitValue() {}
}

export class Fervex extends Drug {
	updateOwnBenefitValue() {}
}

export class MagicPill extends Drug {
	updateOwnBenefitValue() {}
}
