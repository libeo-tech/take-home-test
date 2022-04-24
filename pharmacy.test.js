import { Drug, Pharmacy } from "./pharmacy.js";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)]
    );
  });
    // for magic pill
  it("should not change the benefit and expiresIn for Magic Pill", () => {
    expect(new Pharmacy([new Drug("Magic Pill", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Magic Pill", 2, 3)]
    );
  });
    // for Herbal tea
  it("should increase the benefit by 1 if expiresIn >= 0 and decrease expiresIn for Herbal Tea", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea", 1, 4)]
    );
  });
  it("should increase the benefit by 2 if expiresIn < 0 and decrease expiresIn for Herbal Tea", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", 0, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea", -1, 5)]
    );
  });
  it("should increase the benefit by 2 if expiresIn < 0, and benefit should not over 50 and decrease expiresIn for Herbal Tea", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", 0, 49)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea", -1, 50)]
    );
  });
    // for Fervex
  it("should increase the benefit by 1 if expiresIn > 10 and decrease expiresIn for Fervex", () => {
    expect(new Pharmacy([new Drug("Fervex", 12, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 11, 4)]
    );
  });
  it("should increase the benefit by 2 if 5 < expiresIn <= 10 and decrease expiresIn for Fervex", () => {
    expect(new Pharmacy([new Drug("Fervex", 7, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 6, 5)]
    );
  });
  it("should increase the benefit by 3 if 0 <= expiresIn <= 5 and decrease expiresIn for Fervex", () => {
    expect(new Pharmacy([new Drug("Fervex", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 1, 6)]
    );
  });
  it("should increase the benefit by 3 if 0 <= expiresIn <= 5, and benefit should not over 50 and decrease expiresIn for Fervex", () => {
    expect(new Pharmacy([new Drug("Fervex", 2, 49)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 1, 50)]
    );
  });
  it("should drop the benefit to 0 if expiresIn < 0 and decrease expiresIn for Fervex", () => {
    expect(new Pharmacy([new Drug("Fervex", -1, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", -2, 0)]
    );
  });
    // Dafalgan
  it("should decrease the benefit by 2 if expiresIn >= 0 and decrease expiresIn for Dafalgan", () => {
    expect(new Pharmacy([new Drug("Dafalgan", 5, 5)]).updateBenefitValue()).toEqual(
      [new Drug("Dafalgan", 4, 3)]
    );
  });
  it("should decrease the benefit by 4 if expiresIn < 0, and benefit should not be negative and decrease expiresIn for Dafalgan", () => {
    expect(new Pharmacy([new Drug("Dafalgan", -1, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Dafalgan", -2, 0)]
    );
  });
});
