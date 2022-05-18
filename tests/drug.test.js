import { Drug } from "../dist/drug";

describe("Drug", () => {
  it("should decrease expiration days by 1", () => {
    const asprine = new Drug("Asprine", 10, 22);
    asprine.decreaseExpiration();
    expect(asprine.expiresIn).toEqual(9);
  });

  it("should lock drug benefit to max 50 and lowest to 0", () => {
    const asprine = new Drug("Asprine", 10, 76);
    asprine.applyBenefitConstraints();
    expect(asprine.benefit).toEqual(50);

    const molly = new Drug("Molly", 10, -2);
    molly.applyBenefitConstraints();

    expect(molly.benefit).toEqual(0);
  });

  it("should return true for Asprine && false for Molly ", () => {
    const asprine = new Drug("Asprine", 10, 0);
    expect(asprine.hasBenefitLimitBeenReached()).toEqual(true);

    const molly = new Drug("Molly", 10, 43);
    expect(molly.hasBenefitLimitBeenReached()).toEqual(false);
  });

  it("should compute next benefit", () => {
    const asprine = new Drug("Asprine", 10, 22);
    asprine.computeNextBenefit();
    expect(asprine.benefit).toEqual(21);
  });
});
