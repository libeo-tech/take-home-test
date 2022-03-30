import { Pharmacy } from "../lib/structures/Pharmacy";
import { Drug } from "../lib/structures/Drug";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn to handle normal drug case", () => {
    expect(
      new Pharmacy([new Drug("Normal Drug", 2, 3)]).updateBenefitValue()
    ).toEqual([new Drug("Normal Drug", 1, 2)]);
  });

  it("should keep the benefit to 0 and decrease expiresIn by 1 for the normal drug case", () => {
    expect(
      new Pharmacy([new Drug("Normal Drug", 0, 0)]).updateBenefitValue()
    ).toEqual([new Drug("Normal Drug", -1, 0)]);
  });

  it("should increase the benefit of Herbal Tea by 1 and decrease expiresIn by 1", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", 13, 2)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", 12, 3)]);
  });

  it("should increase the benefit of Herbal Tea by 2 and decrease expiresIn by 1", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", -2, 2)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", -3, 4)]);
  });

  it("should increase the benefit of Herbal Tea to 50 (and not 51)", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", -2, 49)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", -3, 50)]);
  });

  it("should keep the benefit and expiresIn values for Magic Pill the same", () => {
    expect(
      new Pharmacy([new Drug("Magic Pill", 5, 15)]).updateBenefitValue()
    ).toEqual([new Drug("Magic Pill", 5, 15)]);
  });

  it("should increase the benefit of Fervex by 1 and decrease expiresIn by 1", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 15, 15)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 14, 16)]);
  });

  it("should increase the benefit of Fervex by 2 and decrease expiresIn by 1", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 8, 8)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 7, 10)]);
  });

  it("should increase the benefit of Fervex by 3 and decrease expiresIn by 1", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 3, 3)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 2, 6)]);
  });

  it("should set the benefit to 0 and decreases expiresIn by 1", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 0, 8)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", -1, 0)]);
  });

  it("should decrease the benefit of Dafalgan twice as fast as normal drugs (by 2) and expiresIn by 1", () => {
    expect(
      new Pharmacy([new Drug("Dafalgan", 10, 10)]).updateBenefitValue()
    ).toEqual([new Drug("Dafalgan", 9, 8)]);
  });

  it("should decrease the benefit of Dafalgan twice as fast as normal drugs (by 4) and expiresIn by 1", () => {
    expect(
      new Pharmacy([new Drug("Dafalgan", 0, 14)]).updateBenefitValue()
    ).toEqual([new Drug("Dafalgan", -1, 10)]);
  });

  it("benefit should be set to 0 and expiresIn by 1 for Dafalgan", () => {
    expect(
      new Pharmacy([new Drug("Dafalgan", 0, 3)]).updateBenefitValue()
    ).toEqual([new Drug("Dafalgan", -1, 0)]);
  });
});
