/**
 * Bound a number to the interval defined by [min, max]
 * @param x
 * @param min
 * @param max
 */
export function boundNumber(x: number, min: number, max: number): number {
  const low = Math.min(min, max);
  const high = Math.max(min, max);
  return Math.min(high, Math.max(low, x));
}
