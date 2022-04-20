import { Drug } from "../drug/entities/drug.entity";
import { DrugNames } from "../types";
import { PharmacyService } from "./pharmacy.service";

describe("PharmacyService", () => {
  describe("regular decrease strategy", () => {
    it("should update a valid drug by -1", () => {
      const drug = new Drug(DrugNames.DOLIPRANE, 2, 5);
      const expectedResult = new Drug(DrugNames.DOLIPRANE, 1, 4);

      expect(PharmacyService.updateBenefitAndExpirationDate(drug)).toEqual(
        expectedResult
      );
    });

    it("should update an expired drug by -2", () => {
      const drug = new Drug(DrugNames.DOLIPRANE, -1, 5);
      const expectedResult = new Drug(DrugNames.DOLIPRANE, -2, 3);

      expect(PharmacyService.updateBenefitAndExpirationDate(drug)).toEqual(
        expectedResult
      );
    });
  });

  describe("decrease twice as fast strategy", () => {
    it("should update a valid drug by -2", () => {
      const drug = new Drug(DrugNames.DAFALGAN, 2, 4);
      const expectedResult = new Drug(DrugNames.DAFALGAN, 1, 2);

      expect(PharmacyService.updateBenefitAndExpirationDate(drug)).toEqual(
        expectedResult
      );
    });

    it("should update an expired drug to 0", () => {
      const drug = new Drug(DrugNames.DAFALGAN, -1, 4);
      const expectedResult = new Drug(DrugNames.DAFALGAN, -2, 0);

      expect(PharmacyService.updateBenefitAndExpirationDate(drug)).toEqual(
        expectedResult
      );
    });
  });

  describe("increase as expiration date approches strategy", () => {
    it("should update a valid drug by +1", () => {
      const drug = new Drug(DrugNames.FERVEX, 11, 4);
      const expectedResult = new Drug(DrugNames.FERVEX, 10, 5);

      expect(PharmacyService.updateBenefitAndExpirationDate(drug)).toEqual(
        expectedResult
      );
    });

    it("should update a valid drug by +2 (10 days or less)", () => {
      const drug = new Drug(DrugNames.FERVEX, 8, 4);
      const expectedResult = new Drug(DrugNames.FERVEX, 7, 6);

      expect(PharmacyService.updateBenefitAndExpirationDate(drug)).toEqual(
        expectedResult
      );
    });

    it("should update a valid drug by +3 (5 days or less)", () => {
      const drug = new Drug(DrugNames.FERVEX, 4, 4);
      const expectedResult = new Drug(DrugNames.FERVEX, 3, 7);

      expect(PharmacyService.updateBenefitAndExpirationDate(drug)).toEqual(
        expectedResult
      );
    });

    it("should update an expired drug to 0", () => {
      const drug = new Drug(DrugNames.FERVEX, -1, 4);
      const expectedResult = new Drug(DrugNames.FERVEX, -2, 0);

      expect(PharmacyService.updateBenefitAndExpirationDate(drug)).toEqual(
        expectedResult
      );
    });
  });

  describe("never decrease strategy", () => {
    it("should not update a valid drug", () => {
      const drug = new Drug(DrugNames.MAGIC_PILL, 2, 4);
      const expectedResult = new Drug(DrugNames.MAGIC_PILL, 1, 4);

      expect(PharmacyService.updateBenefitAndExpirationDate(drug)).toEqual(
        expectedResult
      );
    });

    it("should not update an expired drug", () => {
      const drug = new Drug(DrugNames.MAGIC_PILL, -1, 4);
      const expectedResult = new Drug(DrugNames.MAGIC_PILL, -2, 4);

      expect(PharmacyService.updateBenefitAndExpirationDate(drug)).toEqual(
        expectedResult
      );
    });
  });

  describe("increase regularly strategy", () => {
    it("should update a valid drug by +1", () => {
      const drug = new Drug(DrugNames.HERBAL_TEA, 2, 4);
      const expectedResult = new Drug(DrugNames.HERBAL_TEA, 1, 5);

      expect(PharmacyService.updateBenefitAndExpirationDate(drug)).toEqual(
        expectedResult
      );
    });

    it("should update an expired drug by +2", () => {
      const drug = new Drug(DrugNames.HERBAL_TEA, -1, 4);
      const expectedResult = new Drug(DrugNames.HERBAL_TEA, -2, 6);

      expect(PharmacyService.updateBenefitAndExpirationDate(drug)).toEqual(
        expectedResult
      );
    });
  });
});
