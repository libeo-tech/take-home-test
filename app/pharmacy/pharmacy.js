import {StrategyManager} from "../drugs/strategy-manager"
import {
  DolipraneStrategy,
  HerbalTeaStrategy,
  FervexStrategy,
  MagicPillStrategy,
  DafalganStrategy
} from "../drugs/strategies/index";

export class Pharmacy {
  constructor(drugs = []) {
    this.drugs = drugs;
  }

  updateBenefitValue() {
    const strategyManager = this._setUpStrategies();

    this.drugs.map((drug) => {
      const strategy = strategyManager.getStrategy(drug.name.toLowerCase());

      strategy.updateBenefitValue(drug);
      strategy.updateExpiresInValue(drug);
    });

    return this.drugs;
  }

  _setUpStrategies() {
    let strategyManager = new StrategyManager();
    const dolipraneStrategy = new DolipraneStrategy('doliprane');
    const herbalTeaStrategy = new HerbalTeaStrategy('herbal tea');
    const fervexStrategy = new FervexStrategy('fervex');
    const magicPillStrategy = new MagicPillStrategy('magic pill');
    const dafalganStrategy = new DafalganStrategy('dafalgan');

    strategyManager.addStrategy(dolipraneStrategy);
    strategyManager.addStrategy(herbalTeaStrategy);
    strategyManager.addStrategy(fervexStrategy);
    strategyManager.addStrategy(magicPillStrategy);
    strategyManager.addStrategy(dafalganStrategy);

    return strategyManager;
  }
}
