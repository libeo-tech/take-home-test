/**
 * Ensures that a given value falls within a specified range.
 *
 * @param {number} value - The value to be forced into the range.
 * @param {number} min - The minimum value of the range.
 * @param {number} max - The maximum value of the range.
 * @returns {number} - The value adjusted to fall within the specified range.
 * @throws {Error} - Throws an error if any of the input values are falsy.
 */
export default function forceRange(value, min, max) {
    /**
     * Throws an error if the input is falsy.
     *
     * @param {*} val - The value to be checked.
     * @param {string} name - The name of the parameter for error message.
     * @throws {Error} - Throws an error if the input value is falsy.
     * @private
     */
    function validateInput(val, name) {
      if (val === undefined || val === null) {
        throw new Error(`Invalid ${name}`);
      }
    }
  
    // Validate input values
    validateInput(value, 'value');
    validateInput(min, 'min');
    validateInput(max, 'max');
    // Ensure the value falls within the specified range
    return Math.min(max, Math.max(min, value));
  }
  