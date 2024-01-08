/**
 * Used to increase the benefit value according to general drug rules
 * @param {int} currentBenefitValue the benefit value before the increase
 * @param {int} increaseValue the number used to increase
 * @returns the increased benefit
 */
function increaseBenefit(currentBenefitValue, increaseValue) {
  let increasedBenefit = currentBenefitValue + increaseValue;
  if (increasedBenefit > 50) {
    increasedBenefit = 50;
  }
  return increasedBenefit;
}

/**
 * Used to decrease the benefit value according to general drug rules
 * @param {int} currentBenefitValue the benefit value before the decrease
 * @param {int} decreaseValue the number used to decrease
 * @returns the decreased benefit
 */
function decreaseBenefit(currentBenefitValue, decreaseValue) {
  let decreasedBenefit = currentBenefitValue - decreaseValue;
  if (decreasedBenefit < 0) {
    decreasedBenefit = 0;
  }
  return decreasedBenefit;
}
/**
 * Decrease the ExpiresIn value
 * @param {int} currentExpiresInValue the ExpiresIn value to decrease
 * @param {int} decreaseValue the number used to decrease
 * @returns the decreased ExpiresIn
 */
function decreaseExpiresIn(currentExpiresInValue, decreaseValue) {
  return currentExpiresInValue - decreaseValue;
}

/**
 * Used to know if a drug is expired or not
 * @param {*} expiresIn the number of days left before expiration
 * @returns true if the drug is expired
 */
function isExpired(expiresIn) {
  return expiresIn <= 0;
}

function herbalTeaLogic(expiresIn, benefit) {
  if (isExpired(expiresIn)) {
    benefit = increaseBenefit(benefit, 2);
  } else {
    benefit = increaseBenefit(benefit, 1);
  }
  return [decreaseExpiresIn(expiresIn, 1), benefit];
}

function magicPillLogic(expiresIn, benefit) {
  return [expiresIn, benefit];
}

function fervexLogic(expiresIn, benefit) {
  if (expiresIn > 10) {
    return drugLogic(expiresIn, benefit);
  } else if (expiresIn <= 10 && expiresIn > 5) {
    benefit = increaseBenefit(benefit, 2);
  } else if (expiresIn <= 5 && expiresIn > 0) {
    benefit = increaseBenefit(benefit, 3);
  } else {
    benefit = 0;
  }
  return [decreaseExpiresIn(expiresIn, 1), benefit];
}

function dafalganLogic(expiresIn, benefit) {
  if (isExpired(expiresIn)) {
    benefit = decreaseBenefit(benefit, 4);
  } else {
    benefit = decreaseBenefit(benefit, 2);
  }
  return [decreaseExpiresIn(expiresIn, 1), benefit];
}

function drugLogic(expiresIn, benefit) {
  if (isExpired(expiresIn)) {
    benefit = decreaseBenefit(benefit, 2);
  } else {
    benefit = decreaseBenefit(benefit, 1);
  }
  return [decreaseExpiresIn(expiresIn, 1), benefit];
}

export {
  herbalTeaLogic,
  magicPillLogic,
  fervexLogic,
  dafalganLogic,
  drugLogic,
  increaseBenefit,
  decreaseBenefit,
  decreaseExpiresIn,
  isExpired
};
