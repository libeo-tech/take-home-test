import { Drug } from "../../drug/entities/drug.entity";
import { DrugNames } from "../../types";
import { Pharmacy } from "./pharmacy.entity";

describe("Pharmacy", () => {
  describe("single drug", () => {
    it("should decrease the benefit and expiresIn", () => {
      expect(
        new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()
      ).toEqual([new Drug("test", 1, 2)]);
    });
  });

  describe("multiple drugs", () => {
    it("should decrease the benefit and expiresIn", () => {
      const drugs = [
        new Drug(DrugNames.DOLIPRANE, 20, 30),
        new Drug(DrugNames.HERBAL_TEA, 10, 5),
        new Drug(DrugNames.FERVEX, 5, 40),
        new Drug(DrugNames.MAGIC_PILL, 15, 40),
        new Drug(DrugNames.DAFALGAN, 10, 30),
      ];

      const expectedResult = [
        new Drug(DrugNames.DOLIPRANE, 19, 29),
        new Drug(DrugNames.HERBAL_TEA, 9, 6),
        new Drug(DrugNames.FERVEX, 4, 43),
        new Drug(DrugNames.MAGIC_PILL, 14, 40),
        new Drug(DrugNames.DAFALGAN, 9, 28),
      ];

      const pharmacy = new Pharmacy(drugs);

      expect(pharmacy.updateBenefitValue()).toEqual(expectedResult);
    });
  });
});
