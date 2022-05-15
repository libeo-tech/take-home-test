import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)]
    );
  });
});

describe("Dafalgan", () => {
  it("Test: before expiration (two fast than normal)", () => {
    expect(new Pharmacy([new Drug("Dafalgan", 4, 8)]).updateBenefitValue()).toEqual(
      [new Drug("Dafalgan", 3, 6)]
    );
  });
  it("Test: after expiration (two fast than normal)", () => {
    expect(new Pharmacy([new Drug("Dafalgan", -4, 8)]).updateBenefitValue()).toEqual(
      [new Drug("Dafalgan", -5, 4)]
    );
  });
  it("Test: before expiration (two fast than normal), case benefit: 0", () => {
    expect(new Pharmacy([new Drug("Dafalgan", 4, 0)]).updateBenefitValue()).toEqual(
      [new Drug("Dafalgan", 3, 0)]
    );
  });
  it("Test: after expiration (two fast than normal), case benefit: 0", () => {
    expect(new Pharmacy([new Drug("Dafalgan", -4, 0)]).updateBenefitValue()).toEqual(
      [new Drug("Dafalgan", -5, 0)]
    );
  });
});
