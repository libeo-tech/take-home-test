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
});
