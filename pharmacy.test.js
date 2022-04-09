import { Drug } from "./drug";
import { Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)]
    );
  });

  it("should decrease the benefit twice as fast if expiresIn has passed", () => {
    expect(
      new Pharmacy([new Drug("test", -1, 4)]).updateBenefitValue()
    ).toEqual([new Drug("test", -2, 2)]);
  });

  it("should decrease the benefit until 0", () => {
    expect(new Pharmacy([new Drug("test", 2, 0)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 0)]
    );
  });

  it("should increase the benefit for 'Herbal Tea'", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", 2, 3)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", 1, 4)]);
  });

  it("should increase the benefit for 'Herbal Tea' twice if expiresIn has passed", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", -1, 3)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", -2, 5)]);
  });

  it("should increase the benefit until 50", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", 4, 50)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", 3, 50)]);
  });

  it("should not modify benefit and expiresIn for Magic Pill", () => {
    expect(
      new Pharmacy([new Drug("Magic Pill", 4, 3)]).updateBenefitValue()
    ).toEqual([new Drug("Magic Pill", 4, 3)]);
  });
});
