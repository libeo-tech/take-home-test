import { Drug } from "../modules/drug/drug";

describe("Drug", () => {
  it("should decrease expiration days by 1", () => {
    const asprine = new Drug("Asprine", 10, 22);
    asprine.expiration();
    expect(asprine.expiresIn).toEqual(9);
  });

  it("should lock drug benefit to max 50 and lowest to 0", () => {
    const asprine = new Drug("Asprine", 10, 76);
    asprine.computeNextBenefit();
    expect(asprine.benefit).toEqual(50);

    const omega3 = new Drug("Omega3", 10, -2);
    omega3.computeNextBenefit();

    expect(omega3.benefit).toEqual(0);
  });

  it("should compute next benefit", () => {
    const asprine = new Drug("Asprine", 10, 22);
    asprine.computeNextBenefit();
    expect(asprine.benefit).toEqual(21);
  });

  //Herbal Tea TEST
  it("should  compute Herbal Tea Logic", () => {
    const herbal = new Drug("Herbal Tea", 1, 10);
    herbal.computeNextBenefit();
    expect(herbal.benefit).toEqual(11);

    herbal.expiration();
    herbal.computeNextBenefit();
    expect(herbal.benefit).toEqual(13);
  });

  // Magic Pill
  it("should compute Magic Pill logic", () => {
    const pill = new Drug("Magic Pill", 2, 10);
    pill.computeNextBenefit();
    expect(pill.benefit).toEqual(10);

    pill.expiration();
    expect(pill.expiresIn).toEqual(2);
  });

  // Dafalgan
  it("should compute Dafalgan logic", () => {
    const pill = new Drug("Dafalgan", 4, 20);
    pill.computeNextBenefit();
    expect(pill.benefit).toEqual(18);
  });
});
