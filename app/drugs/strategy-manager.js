export class StrategyManager {
  constructor() {
    this._strategies = [];
  }

  addStrategy(strategy) {
    if (!strategy) return;
    this._strategies = [...this._strategies, strategy];
  }

  getStrategy(name) {
    return this._strategies.find(strategy => strategy.name === name);
  }
}
