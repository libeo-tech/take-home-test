import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should return null drug if negative benefit", () => {
    expect(
      new Pharmacy([new Drug("Normal Drug", 2, -1)]).updateBenefitValue()
    ).toEqual([null]);
  });

  it("should return null drug if benefit greater than 50", () => {
    expect(
      new Pharmacy([new Drug("Normal Drug", 2, 51)]).updateBenefitValue()
    ).toEqual([null]);
  });

  it("should decrease normal drug benefit and expiresIn", () => {
    expect(
      new Pharmacy([new Drug("Normal Drug", 3, 50)]).updateBenefitValue()
    ).toEqual([new Drug("Normal Drug", 2, 49)]);
  });

  it("should not decrease normal drug 0 benefit but expiresIn", () => {
    expect(
      new Pharmacy([new Drug("Normal Drug", -2, 0)]).updateBenefitValue()
    ).toEqual([new Drug("Normal Drug", -3, 0)]);
  });

  it("should decrease normal drug benefit twice fast as expiration date passed", () => {
    expect(
      new Pharmacy([new Drug("Normal Drug", -2, 10)]).updateBenefitValue()
    ).toEqual([new Drug("Normal Drug", -3, 8)]);
  });
});
