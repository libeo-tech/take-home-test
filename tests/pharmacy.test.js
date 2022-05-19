import { Pharmacy } from "../dist/pharmacy";
import { Drug } from "../dist/drug";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)]
    );
  });

  it("should return only Valid Drugs", () => {
    expect(
      new Pharmacy([
        new Drug("Doliprane", 4, 3),
        new Drug("Asperin", 15, 40),
        new Drug("Invalid_Drug", "oops", 40)
      ]).updateBenefitValue()
    ).toEqual([new Drug("Doliprane", 3, 2), new Drug("Asperin", 14, 39)]);
  });

  it("should Compute template drugs: HERBAL TEA, MAGIC PILL, FERVEX, DAFALGAN", () => {
    expect(
      new Pharmacy([
        new Drug("Herbal Tea", 10, 5),
        new Drug("Magic Pill", 15, 40),
        new Drug("Fervex", 5, 40),
        new Drug("Dafalgan", 16, 40)
      ]).updateBenefitValue()
    ).toEqual([
      new Drug("Herbal Tea", 9, 6),
      new Drug("Magic Pill", 15, 40),
      new Drug("Fervex", 4, 43),
      new Drug("Dafalgan", 15, 38)
    ]);
  });
});
