import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("At the end of each day both values are lowered", () => {
    expect(new Pharmacy([new Drug("test", 1, 1)]).updateBenefitValue()).toEqual(
      [new Drug("test", 0, 0)]
    );
  });

  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)]
    );
  });

  it("Once the expiration date has passed, benefit degrades twice as fast", () => {
    expect(
      new Pharmacy([new Drug("test", -1, 3)]).updateBenefitValue()
    ).toEqual([new Drug("test", -2, 1)]);
  });

  it("The benefit of an item is never negative", () => {
    expect(new Pharmacy([new Drug("test", 1, 0)]).updateBenefitValue()).toEqual(
      [new Drug("test", 0, 0)]
    );
  });

  it("Herbal Tea has his benefit increasing twice as fast after expiration date", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", 0, 1)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", -1, 3)]);
  });

  it("The benefit of an item is never more than 50", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", 0, 50)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", -1, 50)]);
  });

  it("Magic Pill never expires nor decreases is Benefit", () => {
    expect(
      new Pharmacy([new Drug("Magic Pill", 2, 2)]).updateBenefitValue()
    ).toEqual([new Drug("Magic Pill", 2, 2)]);
  });

  it("Fervex benefit increase of 2 when there are 10 days or less before expiration", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 10, 2)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 9, 4)]);
  });

  it("Fervex benefit increase of 3 when there are 5 days or less before expiration", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 5, 2)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 4, 5)]);
  });

  it("Fervex benefit drop to 0 after expiration date", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 0, 2)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", -1, 0)]);
  });

  // The Dafalgan feature
  it("Dafalgan degrades is benefit twice as fast as normal drugs", () => {
    expect(
      new Pharmacy([new Drug("Dafalgan", 1, 2)]).updateBenefitValue()
    ).toEqual([new Drug("Dafalgan", 0, 0)]);
  });

  it("Dafalgan degrades is benefit twice as fast as normal drugs, so it s even faster when the product is expired", () => {
    expect(
      new Pharmacy([new Drug("Dafalgan", 0, 4)]).updateBenefitValue()
    ).toEqual([new Drug("Dafalgan", -1, 0)]);
  });
});
