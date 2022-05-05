import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy", () => {
  it("Default strategy decrease benefit and expiresIn by one", () => {
    expect(
      new Pharmacy([new Drug("Doliprane", 2, 3)]).updateBenefitValue()
    ).toEqual([new Drug("Doliprane", 1, 2)]);
  });

  it("Magic pills shouldn't decrease benefit nor expires", () => {
    expect(
      new Pharmacy([new Drug(Pharmacy.MAGIC_PILL, 15, 40)]).updateBenefitValue()
    ).toEqual([new Drug(Pharmacy.MAGIC_PILL, 15, 40)]);
  });

  it("Herbal tea should increase benefit by one if not expired", () => {
    expect(
      new Pharmacy([new Drug(Pharmacy.HERBAL_TEA, 15, 5)]).updateBenefitValue()
    ).toEqual([new Drug(Pharmacy.HERBAL_TEA, 14, 6)]);
  });

  it("Drug benefit don't grow if at 50", () => {
    expect(
      new Pharmacy([new Drug(Pharmacy.HERBAL_TEA, 15, 50)]).updateBenefitValue()
    ).toEqual([new Drug(Pharmacy.HERBAL_TEA, 14, 50)]);
  });

  it("Drug benefit can never be greater then 50", () => {
    const greatDoliprane = new Drug("Doliprane", 15, 200);
    expect(greatDoliprane.benefit).toEqual(50);
    expect(new Pharmacy([greatDoliprane]).updateBenefitValue()).toEqual([
      new Drug("Doliprane", 14, 49),
    ]);
  });

  it("Herbal tea should increase benefit by two if expired", () => {
    expect(
      new Pharmacy([new Drug(Pharmacy.HERBAL_TEA, 0, 5)]).updateBenefitValue()
    ).toEqual([new Drug(Pharmacy.HERBAL_TEA, -1, 7)]);
  });

  it("Fervex should increase benefit by one if there's more then 10 day left", () => {
    expect(
      new Pharmacy([new Drug(Pharmacy.FERVEX, 13, 5)]).updateBenefitValue()
    ).toEqual([new Drug(Pharmacy.FERVEX, 12, 6)]);
  });

  it("Fervex should increase benefit by two if there's 10 days left or less", () => {
    expect(
      new Pharmacy([new Drug(Pharmacy.FERVEX, 10, 5)]).updateBenefitValue()
    ).toEqual([new Drug(Pharmacy.FERVEX, 9, 7)]);
  });

  it("Fervex should increase benefit by three if there's 5 days left or less", () => {
    expect(
      new Pharmacy([new Drug(Pharmacy.FERVEX, 5, 5)]).updateBenefitValue()
    ).toEqual([new Drug(Pharmacy.FERVEX, 4, 8)]);
  });

  it("Fervex should benefit should drop to 0 if it is expired", () => {
    expect(
      new Pharmacy([new Drug(Pharmacy.FERVEX, 0, 10)]).updateBenefitValue()
    ).toEqual([new Drug(Pharmacy.FERVEX, -1, 0)]);
  });

  it("Dafalgan should degrade benefit by two if not expired", () => {
    expect(
      new Pharmacy([new Drug(Pharmacy.DAFALGAN, 10, 10)]).updateBenefitValue()
    ).toEqual([new Drug(Pharmacy.DAFALGAN, 9, 8)]);
  });

  it("Dafalgan should degrade benefit by four if expired", () => {
    expect(
      new Pharmacy([new Drug(Pharmacy.DAFALGAN, 0, 10)]).updateBenefitValue()
    ).toEqual([new Drug(Pharmacy.DAFALGAN, -1, 6)]);
  });
});
