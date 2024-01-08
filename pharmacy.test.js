import { Drug, Pharmacy } from "./pharmacy";
describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)]
    );
  });
  it("should decrease the benefit twice as fast and expiresIn by 1", () => {
    expect(new Pharmacy([new Drug("test", -1, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", -2, 1)]
    );
  });
  it("should decrease expiresIn and increase the benefit by 3", () => {
    expect(new Pharmacy([new Drug("Fervex", 5, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 4, 6)]
    );
  });
  it("should decrease expiresIn and increase the benefit by 2", () => {
    expect(new Pharmacy([new Drug("Fervex", 10, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 9, 5)]
    );
  });
  it("should decrease expiresIn and benefit", () => {
    expect(new Pharmacy([new Drug("Fervex", 11, 46)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 10, 47)]
    );
  });
  it("should decrease expiresIn and keep benefit equals to 0", () => {
    expect(new Pharmacy([new Drug("Fervex", -1, 0)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", -2, 0)]
    );
  });
  it("should decrease expiresIn and increase the benefit", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", 1, 10)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea", 0, 11)]
    );
  });
  it("should decrease expiresIn and increase the benefit by 2", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", -1, 12)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea", -2, 14)]
    );
  });
  it("should nor decrease nor increase expiresIn and benefit", () => {
    expect(new Pharmacy([new Drug("Magic Pill", 0, 14)]).updateBenefitValue()).toEqual(
      [new Drug("Magic Pill", 0, 14)]
    );
  });
  it("should increase twice as fast as normal drugs", () => {
    expect(new Pharmacy([new Drug("Dafalgan", -1, 14)]).updateBenefitValue()).toEqual(
      [new Drug("Dafalgan", -2, 10)]
    );
  });
});