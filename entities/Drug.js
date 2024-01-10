/**
 * Represents a medicinal drug.
 *
 * @class Drug
 * @param {string} name The name of the drug.
 * @param {number} expiresIn The duration in days after which the drug expires.
 * @param {number} benefit The initial benefit of the drug.
 */
export default class Drug {
    /**
     * Constructor for the Drug class.
     *
     * @param {string} name The name of the drug.
     * @param {number} expiresIn The duration in days after which the drug expires.
     * @param {number} benefit The initial benefit of the drug.
     */
    constructor(name, expiresIn, benefit) {
      this.name = name;
      this.expiresIn = expiresIn;
      this.benefit = benefit;
    }
  
    /**
     * Checks if the drug has expired.
     *
     * @method
     * @name isExpired
     * @returns {boolean} True if the drug has expired, false otherwise.
     */
    isExpired() {
      return this.expiresIn < 0;
    }
  }
  