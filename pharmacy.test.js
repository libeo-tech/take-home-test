import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)]
    );
  });

  //  Once the expiration date has passed, Benefit degrades twice as fast.
  it("should decrease the benefit twice as fast when expiration passed.", () => {
    expect(new Pharmacy([
      new Drug("test", 0, 4),
      new Drug("test", -1, 3)
    ]).updateBenefitValue()).toEqual(
      [
        new Drug("test", -1, 2),
        new Drug("test", -2, 1)
      ]
    );
  })

  //The Benefit of an item is never negative.
  it("should not have negative benefit.", () => {
    expect(new Pharmacy([
      new Drug("test", 0, 0),
    ]).updateBenefitValue()).toEqual(
      [
        new Drug("test", -1, 0)
      ]
    );
  })

  //"Herbal Tea" actually increases in Benefit the older it gets.
  it("should 'Herbal Tea' have better benefit the older it gets.", () => {
    expect(new Pharmacy([
      new Drug("Herbal Tea", 2, 10),
    ]).updateBenefitValue()).toEqual(
      [
        new Drug("Herbal Tea", 1, 11)
      ]
    );
  })

  //"Herbal Tea" Benefit increases twice as fast after the expiration date.
  it("should 'Herbal Tea' have better benefit twice faster when expired.", () => {
    expect(new Pharmacy([
      new Drug("Herbal Tea", 0, 10),
    ]).updateBenefitValue()).toEqual(
      [
        new Drug("Herbal Tea", -1, 12)
      ]
    );
  })

  // The Benefit of an item is never more than 50.
  it("should Benefit of an item not be more than 50", () => {
    expect(new Pharmacy([
      new Drug("Herbal Tea", 1, 50),
    ]).updateBenefitValue()).toEqual(
      [
        new Drug("Herbal Tea", 0, 50)
      ]
    );
  })

  // "Magic Pill" never expires nor decreases in Benefit.
  it("should 'Magic Pill' never expire nor decreases in Benefit", () => {
    expect(new Pharmacy([
      new Drug("Magic Pill", 1, 25),
      new Drug("Magic Pill", 1, 0),
      new Drug("Magic Pill", 1, 50)
    ]).updateBenefitValue()).toEqual(
      [
        new Drug("Magic Pill", 1, 25),
        new Drug("Magic Pill", 1, 0),
        new Drug("Magic Pill", 1, 50)
      ]
    );
  })

  //  "Fervex", like Herbal Tea, increases in Benefit as its expiration date approaches. 
  // Benefit increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but Benefit drops to 0 after the expiration date.
  it("should Magic Pill never expire nor decreases in Benefit", () => {
    expect(new Pharmacy([
      new Drug("Fervex", 11, 10),
      new Drug("Fervex", 10, 10),
      new Drug("Fervex", 5, 10),
      new Drug("Fervex", 1, 10),
      new Drug("Fervex", 0, 10)

    ]).updateBenefitValue()).toEqual(
      [
        new Drug("Fervex", 10, 11),
        new Drug("Fervex", 9, 12),
        new Drug("Fervex", 4, 13),
        new Drug("Fervex", 0, 13),
        new Drug("Fervex", -1, 0)
      ]
    );
  })
});
