import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)]
    );
  });
  it("should decrease the benefit twice faster than not expired drug", () => {
    expect(
      new Pharmacy([new Drug("Doliprane", 0, 3)]).updateBenefitValue()
    ).toEqual([new Drug("Doliprane", -1, 1)]);
  });
  it("should set Benefit to 0 since it can't be negative", () => {
    expect(
      new Pharmacy([new Drug("Doliprane", 2, -5)]).updateBenefitValue()
    ).toEqual([new Drug("Doliprane", 1, 0)]);
  });
  it("should increase Herbal Tea's benefit the older it gets", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", 2, 3)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", 1, 4)]);
  });
  it("should increase Herbal Tea's benefit twice faster after expiration date", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", 0, 3)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", -1, 5)]);
  });
  it("should set Benefit to 50 since it can't be over 50", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", 0, 55)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", -1, 50)]);
  });
  it("should not update 'Magic Pill'", () => {
    expect(
      new Pharmacy([new Drug("Magic Pill", 5, 5)]).updateBenefitValue()
    ).toEqual([new Drug("Magic Pill", 5, 5)]);
  });
  it("should increase Fervex's benefit the older it gets", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 15, 3)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 14, 4)]);
  });
  it("should increase Fervex's benefit the older it gets (10 days less)", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 9, 2)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 8, 4)]);
  });
  it("should increase Fervex's benefit the older it gets (5 days less)", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 2, 3)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 1, 6)]);
  });
  it("should set Fervex's benefit to 0 when expiration date has been reached", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 1, 3)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 0, 0)]);
  });
  it("should decrease Dafalgan's benefit twice faster than normal drug", () => {
    expect(
      new Pharmacy([new Drug("Dafalgan", 4, 3)]).updateBenefitValue()
    ).toEqual([new Drug("Dafalgan", 3, 1)]);
  });
});
