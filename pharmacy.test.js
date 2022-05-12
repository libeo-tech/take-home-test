import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn by 1", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)]
    );
    expect(
      new Pharmacy([new Drug("Doliprane", 2, 3)]).updateBenefitValue()
    ).toEqual([new Drug("Doliprane", 1, 2)]);
    expect(
      new Pharmacy([new Drug("Dafalgan", 2, 3)]).updateBenefitValue()
    ).toEqual([new Drug("Dafalgan", 1, 2)]);
  });

  it("should increase the benefit by 1 and decrease expiresIn", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 12, 3)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 11, 4)]);
    expect(
      new Pharmacy([new Drug("Herbal Tea", 2, 3)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", 1, 4)]);
  });

  it("should increase the benefit by 2 when expiresIn less than 11", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 9, 3)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 8, 5)]);
    expect(
      new Pharmacy([new Drug("Fervex", 8, 2)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 7, 4)]);
  });

  it("should increase the benefit by 3 when expiresIn less than 6", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 5, 3)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 4, 6)]);
    expect(
      new Pharmacy([new Drug("Fervex", 4, 2)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 3, 5)]);
  });

  it("should the benefit drop to 0 when expiresIn is negative", () => {
    expect(
      new Pharmacy([new Drug("Fervex", -1, 2)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", -2, 0)]);
  });

  it("should the benefit increase by 2 when expiresIn is negative", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", -1, 3)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", -2, 5)]);
  });

  it("should not change benefit nor expiresIn", () => {
    expect(
      new Pharmacy([new Drug("Magic Pill", 1, 2)]).updateBenefitValue()
    ).toEqual([new Drug("Magic Pill", 1, 2)]);
  });
});
