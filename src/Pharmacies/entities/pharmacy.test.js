import { Drug } from "../../Drugs/entities/drug.entity";
import { Pharmacy } from "./pharmacy.entity";

describe("Pharmacy", () => {
  describe("Other drugs", () => {
    it("should decrease the benefit and expiresIn", () => {
      expect(
        new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()
      ).toEqual([new Drug("test", 1, 2)]);
    });

    it("should decrease the benefit by 2 when it's expired", () => {
      expect(
        new Pharmacy([new Drug("test", 0, 3)]).updateBenefitValue()
      ).toEqual([new Drug("test", -1, 1)]);
    });

    it("should unchange benefit and decrease expiresIn", () => {
      expect(
        new Pharmacy([new Drug("test", 0, 0)]).updateBenefitValue()
      ).toEqual([new Drug("test", -1, 0)]);
    });
  });

  describe("Herbal Tea", () => {
    it("should increase the benefit and decrease expiresIn", () => {
      expect(
        new Pharmacy([new Drug("Herbal Tea", 2, 3)]).updateBenefitValue()
      ).toEqual([new Drug("Herbal Tea", 1, 4)]);
    });

    it("should set the benefit to 50", () => {
      expect(
        new Pharmacy([new Drug("Herbal Tea", 4, 49)]).updateBenefitValue()
      ).toEqual([new Drug("Herbal Tea", 3, 50)]);
    });

    it("should increase the benefit by 2 and decrease expiresIn", () => {
      expect(
        new Pharmacy([new Drug("Herbal Tea", 0, 3)]).updateBenefitValue()
      ).toEqual([new Drug("Herbal Tea", -1, 5)]);
    });

    it("should not increase the benefit", () => {
      expect(
        new Pharmacy([new Drug("Herbal Tea", 0, 50)]).updateBenefitValue()
      ).toEqual([new Drug("Herbal Tea", -1, 50)]);
    });
  });

  describe("Magic Pill", () => {
    it("should do nothing", () => {
      expect(
        new Pharmacy([new Drug("Magic Pill", 2, 3)]).updateBenefitValue()
      ).toEqual([new Drug("Magic Pill", 2, 3)]);
    });
  });

  describe("Fervex", () => {
    it("should increase the benefit by 2 and decrease expiresIn", () => {
      expect(
        new Pharmacy([new Drug("Fervex", 9, 3)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", 8, 5)]);
    });

    it("should set the benefit to 50", () => {
      expect(
        new Pharmacy([new Drug("Fervex", 4, 49)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", 3, 50)]);
    });

    it("should increase the benefit by 3 and decrease expiresIn", () => {
      expect(
        new Pharmacy([new Drug("Fervex", 4, 3)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", 3, 6)]);
    });

    it("should drop the benefit to 0 and decrease expiresIn", () => {
      expect(
        new Pharmacy([new Drug("Fervex", 0, 30)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", -1, 0)]);
    });

    it("should not increase the benefit", () => {
      expect(
        new Pharmacy([new Drug("Fervex", 9, 50)]).updateBenefitValue()
      ).toEqual([new Drug("Fervex", 8, 50)]);
    });
  });

  describe("Dafalgan", () => {
    it("should decrease twice as fast the benefit", () => {
      expect(
        new Pharmacy([new Drug("Dafalgan", 9, 50)]).updateBenefitValue()
      ).toEqual([new Drug("Dafalgan", 8, 48)]);

      expect(
        new Pharmacy([new Drug("Dafalgan", 0, 50)]).updateBenefitValue()
      ).toEqual([new Drug("Dafalgan", -1, 46)]);
    });
  });
});
