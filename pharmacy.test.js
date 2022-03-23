import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  /*it("should return null drug if negative benefit", () => {
    expect(
      new Pharmacy([new Drug("Normal Drug", 2, -1)]).updateBenefitValue()
    ).toEqual([null]);
  });

  it("should return null drug if benefit greater than 50", () => {
    expect(
      new Pharmacy([new Drug("Normal Drug", 2, 51)]).updateBenefitValue()
    ).toEqual([null]);
  });*/

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

  it("should not update magic pill drug", () => {
    expect(
      new Pharmacy([new Drug("Magic Pill", 3, 30)]).updateBenefitValue()
    ).toEqual([new Drug("Magic Pill", 3, 30)]);
  });

  it("should increase fervex benefit and decrease expiresIn", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 3, 49)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 2, 50)]);
  });

  it("should increase fervex benefit twice fast as expiration date is in 10 days or less", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 9, 10)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 8, 12)]);
  });

  it("should increase fervex benefit twice fast as expiration date is in 10 days or less without exceed 50", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 9, 49)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 8, 50)]);
  });

  it("should increase fervex benefit by 3 as expiration date is in 5 days or less", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 3, 10)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 2, 13)]);
  });

  it("should increase fervex benefit by 3 as expiration date is in 5 days or less without exceed 50", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 3, 48)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 2, 50)]);
  });

  it("should update fervex benefit to 0 as expiration date reached", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 1, 47)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 0, 0)]);
  });

  it("should twice fast as normal drug decrease dafalgan drug benefit and expiresIn", () => {
    expect(
      new Pharmacy([new Drug("Dafalgan", 3, 8)]).updateBenefitValue()
    ).toEqual([new Drug("Dafalgan", 2, 6)]);
  });

  it("should not decrease 0 benefit dafalgan drug benefit", () => {
    expect(
      new Pharmacy([new Drug("Dafalgan", 3, 0)]).updateBenefitValue()
    ).toEqual([new Drug("Dafalgan", 2, 0)]);
  });

  it("should not under 0 decrease dafalgan drug benefit", () => {
    expect(
      new Pharmacy([new Drug("Dafalgan", 3, 1)]).updateBenefitValue()
    ).toEqual([new Drug("Dafalgan", 2, 0)]);
  });

  it("should twice fast as normal drug decrease dafalgan drug benefit as expiration date passed", () => {
    expect(
      new Pharmacy([new Drug("Dafalgan", -2, 10)]).updateBenefitValue()
    ).toEqual([new Drug("Dafalgan", -3, 6)]);
  });

  it("should not decrease dafalgan drug benefit under 0 when expiration date date passed", () => {
    expect(
      new Pharmacy([new Drug("Dafalgan", -3, 3)]).updateBenefitValue()
    ).toEqual([new Drug("Dafalgan", -4, 0)]);
  });
});
