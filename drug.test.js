import { benefitEvolutionRules, HERBAL_TEA } from "./drug";

describe("Pharmacy", () => {
  it("should decrease the benefit according default rule", () => {
    expect(benefitEvolutionRules.default(3, 1)).toEqual(2);
    expect(benefitEvolutionRules.default(3, -1)).toEqual(1);

    /* i could check in my function if the parameters are NaN, 
    Infinite or other type but it is not the interessting part of the exercise */

    expect(benefitEvolutionRules.default(NaN, 1)).toEqual(NaN);
    expect(benefitEvolutionRules.default(1, NaN)).toEqual(-1);
    expect(benefitEvolutionRules.default(Infinity, 1)).toEqual(Infinity);
    expect(benefitEvolutionRules.default("tototo", 1)).toEqual(NaN);
  });
  it("should check update fervex benefit according its rules", () => {
    expect(benefitEvolutionRules.Fervex(20, 11)).toBe(21);
    expect(benefitEvolutionRules.Fervex(20, 9)).toBe(22);
    expect(benefitEvolutionRules.Fervex(20, 4)).toBe(23);
    expect(benefitEvolutionRules.Fervex(20, 0)).toBe(0);
  });
  it("should check update Herbal Tea benefit according its rules", () => {
    expect(benefitEvolutionRules[HERBAL_TEA](20, 1)).toBe(21);
    expect(benefitEvolutionRules[HERBAL_TEA](20, 0)).toBe(22);
  });
  it("should check update dafalgan benefit according its rules", () => {
    expect(benefitEvolutionRules.Dafalgan(10, 1)).toBe(8);
    expect(benefitEvolutionRules.Dafalgan(10, 0)).toBe(6);
    expect(benefitEvolutionRules.Dafalgan(10, -1)).toBe(6);
  });
});
