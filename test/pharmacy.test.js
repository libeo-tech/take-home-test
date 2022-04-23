import { Drug, DrugName } from "../src/entities/drug";
import { Pharmacy } from "../src/entities/pharmacy";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)]
    );
  });

  it("should not decrease the benefit and expiresIn of magic pill", () => {
    expect(
      new Pharmacy([new Drug(DrugName.MAGIC_PILL, 15, 40)]).updateBenefitValue()
    ).toEqual([new Drug(DrugName.MAGIC_PILL, 15, 40)]);
  });

  it("should decrease the benefit and expiresIn of non-expired doliprane ", () => {
    const pharmacy = new Pharmacy([new Drug(DrugName.DOLIPRANE, 15, 40)]);
    expect(pharmacy.updateBenefitValue()).toEqual([
      new Drug(DrugName.DOLIPRANE, 14, 39)
    ]);
  });

  it("should decrease the benefit and expiresIn of expired doliprane ", () => {
    const pharmacy = new Pharmacy([new Drug(DrugName.DOLIPRANE, 0, 40)]);
    expect(pharmacy.updateBenefitValue()).toEqual([
      new Drug(DrugName.DOLIPRANE, -1, 38) // Twice as fast
    ]);
  });

  it("should increase the benefit and decrease expiresIn of non-expired Herbal Tea ", () => {
    const pharmacy = new Pharmacy([new Drug(DrugName.HERBAL_TEA, 10, 5)]);
    expect(pharmacy.updateBenefitValue()).toEqual([
      new Drug(DrugName.HERBAL_TEA, 9, 6)
    ]);
  });

  it("should increase twice as fast the benefit and decrease expiresIn of expired Herbal Tea ", () => {
    const pharmacy = new Pharmacy([new Drug(DrugName.HERBAL_TEA, 0, 5)]);
    expect(pharmacy.updateBenefitValue()).toEqual([
      new Drug(DrugName.HERBAL_TEA, -1, 7)
    ]);
  });

  it("should increase the benefit and decrease expiresIn of Fervex with expiresIn > 10 ", () => {
    const pharmacy = new Pharmacy([new Drug(DrugName.FERVEX, 20, 5)]);
    expect(pharmacy.updateBenefitValue()).toEqual([
      new Drug(DrugName.FERVEX, 19, 6)
    ]);
  });

  it("should increase by 2 the benefit and decrease expiresIn of Fervex with 5 < expiresIn <= 10", () => {
    const pharmacy = new Pharmacy([new Drug(DrugName.FERVEX, 9, 5)]);
    expect(pharmacy.updateBenefitValue()).toEqual([
      new Drug(DrugName.FERVEX, 8, 7)
    ]);
  });

  it("should increase by 3 the benefit and decrease expiresIn of Fervex with 0 < expiresIn <= 5", () => {
    const pharmacy = new Pharmacy([new Drug(DrugName.FERVEX, 4, 5)]);
    expect(pharmacy.updateBenefitValue()).toEqual([
      new Drug(DrugName.FERVEX, 3, 8)
    ]);
  });

  it("should drop the benefit to 0 and decrease expiresIn of an expired Fervex", () => {
    const pharmacy = new Pharmacy([new Drug(DrugName.FERVEX, 0, 5)]);
    expect(pharmacy.updateBenefitValue()).toEqual([
      new Drug(DrugName.FERVEX, -1, 0)
    ]);
  });

  it("should decrease twice as fast the benefit and decrease expiresIn of a Dafalgan", () => {
    const pharmacy = new Pharmacy([new Drug(DrugName.DAFALGAN, 10, 5)]);
    expect(pharmacy.updateBenefitValue()).toEqual([
      new Drug(DrugName.DAFALGAN, 9, 3)
    ]);
  });
});
