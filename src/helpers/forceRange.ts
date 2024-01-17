function forceRange(value: number, min: number, max: number): number {
  if (
    value === undefined ||
    value === null ||
    min === undefined ||
    min === null ||
    max === undefined ||
    max === null
  ) {
    throw new Error("Invalid input values for forceRange");
  }
  return Math.min(Math.max(value, min), max);
}
export default forceRange;
