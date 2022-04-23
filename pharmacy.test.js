import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual([new Drug("test", 1, 2)]);
  });
  it("should decrease the benefit with 0 limit", () => {
    expect(new Pharmacy([new Drug("test", -2, 0)]).updateBenefitValue()).toEqual([new Drug("test", -3, 0)]);
  });
  it("should stay the same Magic Pill, decrease expiresIn", () => {
    expect(new Pharmacy([new Drug("Magic Pill", 12, 14)]).updateBenefitValue()).toEqual([
      new Drug("Magic Pill", 11, 14),
    ]);
  });
  it("Fervex should decrease expiresIn and increase the benefit by 3", () => {
    expect(new Pharmacy([new Drug("Fervex", 5, 20)]).updateBenefitValue()).toEqual([new Drug("Fervex", 4, 23)]);
  });
  it("Fervex should decrease expiresIn and increase the benefit by 2", () => {
    expect(new Pharmacy([new Drug("Fervex", 9, 20)]).updateBenefitValue()).toEqual([new Drug("Fervex", 8, 22)]);
  });
  it("Fervex should decrease expiresIn and increse benefit", () => {
    expect(new Pharmacy([new Drug("Fervex", 11, 46)]).updateBenefitValue()).toEqual([new Drug("Fervex", 10, 47)]);
  });
  it("Fervex should decrease expiresIn, increse benefit by 3 but max at 50", () => {
    expect(new Pharmacy([new Drug("Fervex", 4, 48)]).updateBenefitValue()).toEqual([new Drug("Fervex", 3, 50)]);
  });
  it("Fervex benefit should be 0", () => {
    expect(new Pharmacy([new Drug("Fervex", 1, 46)]).updateBenefitValue()).toEqual([new Drug("Fervex", 0, 0)]);
  });

  it("herbal tea should decrease expiresIn and increase the benefit", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", 1, 20)]).updateBenefitValue()).toEqual([new Drug("Herbal Tea", 0, 21)]);
  });
  it("herbal tea should decrease expiresIn and increase the benefit by 2", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", -1, 14)]).updateBenefitValue()).toEqual([
      new Drug("Herbal Tea", -2, 16),
    ]);
  });
  it("Dafalgan should decrease twice as fast as normal drugs", () => {
    expect(new Pharmacy([new Drug("Dafalgan", 0, 18)]).updateBenefitValue()).toEqual([new Drug("Dafalgan", -1, 14)]);
  });
  it("Dafalgan should decrease twice as fast as normal drugs but min at 0", () => {
    expect(new Pharmacy([new Drug("Dafalgan", 0, 3)]).updateBenefitValue()).toEqual([new Drug("Dafalgan", -1, 0)]);
  });
});
