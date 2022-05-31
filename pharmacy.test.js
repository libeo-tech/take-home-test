import { Drug, Pharmacy } from "./pharmacy";


describe("Pharmacy", () => {
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
  it("should not have a negative benefit", () => {
    expect(new Pharmacy([new Drug("test", 2, 0)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 0)]
    );
  });

  //  "Herbal Tea" actually increases in Benefit the older it gets.
  it("should increase benefit for herbal tea", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", 2, 2)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", 1, 3)]);
  });

  //  "Herbal Tea" actually increases in Benefit the older it gets. Benefit increases twice as fast after the expiration date.
  it("should increase benefit twice as fast after expiration for herbal tea", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", -2, 2)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", -3, 4)]);
  });

  //   The Benefit of an item is never more than 50.
  it("should never have a benefit more than 50", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", 2, 50)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", 1, 50)]);
  });

  //    "Magic Pill" never expires nor decreases in Benefit.
  it("magic pill should never expire nor decrease in benefit", () => {
    expect(
      new Pharmacy([new Drug("Magic Pill", 0, 2)]).updateBenefitValue()
    ).toEqual([new Drug("Magic Pill", 0, 2)]);
  });

  //"Fervex", like Herbal Tea, increases in Benefit as its expiration date approaches. Benefit increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but Benefit drops to 0 after the expiration date.
  it("Fervex should increase in benefit", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 12, 2)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 11, 3)]);
  });

  it("Fervex should increase by 2 in benefit when 10 days or less", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 10, 2)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 9, 4)]);
  });

  it("Fervex should increase by 3 in benefit when 5 days or less", () => {
    expect(new Pharmacy([new Drug("Fervex", 5, 2)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 4, 5)]
    );
  });

  it("Fervex benefit should drop to 0 adter expiration date", () => {
    expect(new Pharmacy([new Drug("Fervex", 0, 8)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", -1, 0)]
    );
  });
});
