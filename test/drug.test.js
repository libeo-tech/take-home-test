import { Drug } from "../src/entities/drug";

describe("Drug", () => {
  it("should increase the benefit value", () => {
    const drug = new Drug("test", 2, 3);
    drug.updateBenefit(1);
    expect(drug.benefit).toEqual(4);

    drug.updateBenefit(2);
    expect(drug.benefit).toEqual(6);
  });

  it("should not increase the benefit value above the max value", () => {
    const drug = new Drug("test", 2, 49);
    drug.updateBenefit(1);
    expect(drug.benefit).toEqual(50);

    drug.updateBenefit(1);
    expect(drug.benefit).toEqual(50);
  });

  it("should decrease the benefit value", () => {
    const drug = new Drug("test", 2, 3);
    drug.updateBenefit(-1);
    expect(drug.benefit).toEqual(2);

    drug.updateBenefit(-2);
    expect(drug.benefit).toEqual(0);
  });

  it("should not decrease the benefit value below the max value", () => {
    const drug = new Drug("test", 2, 1);
    drug.updateBenefit(-1);
    expect(drug.benefit).toEqual(0);

    drug.updateBenefit(-1);
    expect(drug.benefit).toEqual(0);
  });

  it("should define a drug as expired", () => {
    const drug = new Drug("test", 0, 3);
    expect(drug.isExpired()).toBe(true);
  });

  it("should reset a drug benefit", () => {
    const drug = new Drug("test", 5, 5);
    drug.resetBenefit();
    expect(drug.benefit).toEqual(0);
  });
});
