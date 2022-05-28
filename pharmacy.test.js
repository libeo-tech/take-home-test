import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
const herbalTeaName = "Herbal Tea"

  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)]
    );
  });

  //Once the expiration date has passed, Benefit degrades twice as fast.
  it("should decrease twice as fast after expiration date", () => {
    expect(
      new Pharmacy([new Drug("test", -1, 3)]).updateBenefitValue()
    ).toEqual([new Drug("test", -2, 1)]);
  });

  //   The Benefit of an item is never negative.
  it("should not have a negative benefit", () => {
    expect(new Pharmacy([new Drug("test", 2, 0)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 0)]
    );
  });

  //  "Herbal Tea" actually increases in Benefit the older it gets.
  it("should increase benefit for herbal tea", () => {
    expect(
      new Pharmacy([new Drug(herbalTeaName, 2, 2)]).updateBenefitValue()
    ).toEqual([new Drug(herbalTeaName, 1, 3)]);
  });

  //  "Herbal Tea" actually increases in Benefit the older it gets. Benefit increases twice as fast after the expiration date.
  it("should increase benefit twice as fast after expiration for herbal tea", () => {
    expect(new Pharmacy([new Drug(herbalTeaName, -2, 2)]).updateBenefitValue()).toEqual(
      [new Drug(herbalTeaName, -3, 4)]
    );
  });
  //   The Benefit of an item is never more than 50.
  //    "Magic Pill" never expires nor decreases in Benefit.
  //"Fervex", like Herbal Tea, increases in Benefit as its expiration date approaches. Benefit increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but Benefit drops to 0 after the expiration date.
});
