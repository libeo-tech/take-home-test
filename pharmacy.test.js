import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("Default should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)],
    );
  });
  it("Dafalgan should decrease the benefit twice as fast as default", () => {
    expect(
      new Pharmacy([new Drug("Dafalgan", 2, 3)]).updateBenefitValue(),
    ).toEqual([new Drug("Dafalgan", 1, 1)]);
  });
  it("Magic Pill should stay the same", () => {
    expect(
      new Pharmacy([new Drug("Magic Pill", 2, 3)]).updateBenefitValue(),
    ).toEqual([new Drug("Magic Pill", 2, 3)]);
  });
  it("Herbal Tea should increase the benefit and decrease expiresIn", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", 2, 3)]).updateBenefitValue(),
    ).toEqual([new Drug("Herbal Tea", 1, 4)]);
  });
  it("Fervex should increase the benefit and decrease expiresIn", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 15, 3)]).updateBenefitValue(),
    ).toEqual([new Drug("Fervex", 14, 4)]);
    expect(
      new Pharmacy([new Drug("Fervex", 10, 3)]).updateBenefitValue(),
    ).toEqual([new Drug("Fervex", 9, 5)]);
    expect(
      new Pharmacy([new Drug("Fervex", 3, 3)]).updateBenefitValue(),
    ).toEqual([new Drug("Fervex", 2, 6)]);
  });
  it("Fervex should drop to 0 after the expiration date", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 0, 3)]).updateBenefitValue(),
    ).toEqual([new Drug("Fervex", -1, 0)]);
  });

  it("Minimum benefit should be limited at 0", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 0, 0)]).updateBenefitValue(),
    ).toEqual([new Drug("Fervex", -1, 0)]);
  });
  it("Maximum benefit should be limited at 50", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", -19, 50)]).updateBenefitValue(),
    ).toEqual([new Drug("Herbal Tea", -20, 50)]);
  });
});
