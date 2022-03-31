import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  // ALL drugs, general rules
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)]
    );
  });
  it("should once the expiration date has passed, Benefit degrades twice as fast", () => {
    expect(new Pharmacy([new Drug("test", 0, 4)]).updateBenefitValue()).toEqual(
      [new Drug("test", -1, 2)]
    );
  });

  // benefit never negative
  it("should benefit never negative", () => {
    expect(new Pharmacy([new Drug("test", 0, 0)]).updateBenefitValue()).toEqual(
      [new Drug("test", -1, 0)]
    );
  });

  // Herbal tea
  it("should Herbal tea's benefit increases normaly before the expiration date", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", 1, 2)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", 0, 3)]);
  });
  it("should Herbal tea's benefit increases twice as fast after the expiration date", () => {
    expect(
      new Pharmacy([new Drug("Herbal Tea", 0, 2)]).updateBenefitValue()
    ).toEqual([new Drug("Herbal Tea", -1, 4)]);
  });

  // Magic Pill
  it("should Magic Pill never expires nor decreases in Benefit", () => {
    expect(
      new Pharmacy([new Drug("Magic Pill", 2, 3)]).updateBenefitValue()
    ).toEqual([new Drug("Magic Pill", 2, 3)]);
  });
  it("should Magic Pill never expires nor decreases in Benefit", () => {
    expect(
      new Pharmacy([new Drug("Magic Pill", 20, 51)]).updateBenefitValue()
    ).toEqual([new Drug("Magic Pill", 20, 51)]);
  });

  // Fervex
  it("should Fervex's benefit increases by 2 when there are 10 days or less", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 10, 3)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 9, 5)]);
  });
  it("should Fervex's benefit increases by 3 when there are 5 days or less", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 5, 3)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", 4, 6)]);
  });
  it("should Fervex's benefit drops to 0 after the expiration date", () => {
    expect(
      new Pharmacy([new Drug("Fervex", 0, 3)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", -1, 0)]);
  });
  it("should Fervex's benefit drops to 0 after the expiration date", () => {
    expect(
      new Pharmacy([new Drug("Fervex", -1, 3)]).updateBenefitValue()
    ).toEqual([new Drug("Fervex", -2, 0)]);
  });
});
