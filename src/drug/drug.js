"use strict";
var _a;
exports.__esModule = true;
exports.benefitEvolutionRules = exports.HERBAL_TEA = exports.MAGIC_PILL = exports.DEFAULT = exports.Drug = void 0;
var Drug = /** @class */ (function() {
  function Drug(name, expiresIn, benefit) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }
  Drug.prototype.checkBenefit = function() {
    if (this.benefit > 50) this.benefit = 50;
    if (this.benefit < 0) this.benefit = 0;
  };
  Drug.prototype.canUpdateBenefit = function() {
    return (
      (this.benefit < 50 && this.benefit > 0) ||
      (this.name === FERVEX && this.benefit !== 0)
    );
  };
  return Drug;
})();
exports.Drug = Drug;
exports.DEFAULT = "default";
exports.MAGIC_PILL = "Magic Pill";
exports.HERBAL_TEA = "Herbal Tea";
var FERVEX = "Fervex";
var DAFALGAN = "Dafalgan";
var BENEFIT_CHANGE = 1;
var getDefaultBenefitUpdate = function(expiresIn) {
  return expiresIn > 0 ? BENEFIT_CHANGE : BENEFIT_CHANGE * 2;
};
var updateDefautDrugBenefit = function(benefit, expiresIn) {
  return benefit - getDefaultBenefitUpdate(expiresIn);
};
var updateUpgradingDrugsBenefit = function(benefit, expiresIn) {
  return benefit + getDefaultBenefitUpdate(expiresIn);
};
var upgradeDafalganBenefit = function(benefit, expiresIn) {
  return benefit - 2 * getDefaultBenefitUpdate(expiresIn);
};
var updateFervexBenefit = function(benefit, expiresIn) {
  if (expiresIn <= 0) return 0;
  if (expiresIn <= 5) return benefit + BENEFIT_CHANGE * 3;
  if (expiresIn <= 10) return benefit + BENEFIT_CHANGE * 2;
  return benefit + BENEFIT_CHANGE;
};
exports.benefitEvolutionRules =
  ((_a = {}),
  (_a[exports.DEFAULT] = updateDefautDrugBenefit),
  (_a[exports.HERBAL_TEA] = updateUpgradingDrugsBenefit),
  (_a[FERVEX] = updateFervexBenefit),
  (_a[exports.MAGIC_PILL] = function(benefit) {
    return benefit;
  }),
  (_a[DAFALGAN] = upgradeDafalganBenefit),
  _a);
