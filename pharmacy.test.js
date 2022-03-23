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
      new Pharmacy([new Drug("Normal Drug", 3, 1)]).updateBenefitValue()
    ).toEqual([new Drug("Normal Drug", 2, 0)]);
  });

  it("should not decrease normal drug 0 benefit but expiresIn", () => {
    expect(
      new Pharmacy([new Drug("Normal Drug", 3, 0)]).updateBenefitValue()
    ).toEqual([new Drug("Normal Drug", 2, 0)]);
  });

  it("should decrease normal drug benefit twice fast as expiration date passed", () => {
    expect(
      new Pharmacy([new Drug("Normal Drug", -2, 10)]).updateBenefitValue()
    ).toEqual([new Drug("Normal Drug", -3, 8)]);
  });

  it("should decrease normal drug benefit twice fast as expiration date passed with benefit not under 0", () => {
    expect(
      new Pharmacy([new Drug("Normal Drug", -2, 1)]).updateBenefitValue()
    ).toEqual([new Drug("Normal Drug", -3, 0)]);
  });

  it("should increase herbal tea benefit and decrease expiresIn", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", 3, 49)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", 2, 50)]);
  });

  it("should increase herbal tea benefit twice fast as expiration date passed", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", -2, 10)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", -3, 12)]);
  });

  it("should not increase herbal tea benefit and should decrease expiresIn", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", 3, 50)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", 2, 50)]);
  });

  it("should not twice fast increase herbal tea benefit over 50 and should decrease expiresIn ", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", -2, 49)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", -3, 50)]);
  });
});
