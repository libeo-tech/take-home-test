/**
 * Drug names available in the pharmacy
 */
export enum DrugNames {
  DOLIPRANE = "Doliprane",
  HERBAL_TEA = "Herbal Tea",
  FERVEX = "Fervex",
  MAGIC_PILL = "Magic Pill",
  DAFALGAN = "Dafalgan",
}

/**
 * List of strategies to apply when updating the benefit
 */
export enum BenefitStrategy {
  DEFAULT = "DEFAULT", // Benefit decreases by one day by day before expiration, by two after expiration
  NEVER_DECREASE = "NEVER_DECREASE", // Drug does not expire nor benefit does not decrease
  INCREASE_REGULARLY = "INCREASE_REGULARLY", // Benefit increases day by day
  INCREASE_AS_EXPIRATION_DATE_APROCHES = "INCREASE_AS_EXPIRATION_DATE_APROCHES", // Benefit increases more and more as expiration date approches
  DECREASE_TWICE_AS_FAST = "DECREASE_TWICE_AS_FAST", // Benefit decreases twice as fast as normal drugs
}
