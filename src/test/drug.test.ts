import { Drug } from "../models/drug";
describe("Drug", () => {
  describe("updateBenefit", () => {
    it("should decrease the benefit by 1", () => {
      const testDrug = new Drug("test", 5, 5);
      testDrug.updateBenefit();
      expect(testDrug).toEqual(new Drug("test", 5, 4));
    });

    it("should decrease the benefit by 2", () => {
      const testDrug = new Drug("test", -1, 5);
      testDrug.updateBenefit();
      expect(testDrug).toEqual(new Drug("test", -1, 3));
    });

    it("shouldn't go negative", () => {
      const testDrug = new Drug("test", -1, 0);
      testDrug.updateBenefit();
      expect(testDrug).toEqual(new Drug("test", -1, 0));
    });

    it("shouldn't go over 50", () => {
      const testDrug = new Drug("Herbal Tea", 5, 50);
      testDrug.updateBenefit();
      expect(testDrug).toEqual(new Drug("Herbal Tea", 5, 50));
    });

    it("shouldn't change", () => {
      const testDrug = new Drug("Magic Pill", 5, 5);
      testDrug.updateBenefit();
      expect(testDrug).toEqual(new Drug("Magic Pill", 5, 5));
    });

    it("should increase by 1", () => {
      const testDrug = new Drug("Fervex", 20, 10);
      testDrug.updateBenefit();
      expect(testDrug).toEqual(new Drug("Fervex", 20, 11));
    });

    it("should increase by 2", () => {
      const testDrug = new Drug("Fervex", 9, 10);
      testDrug.updateBenefit();
      expect(testDrug).toEqual(new Drug("Fervex", 9, 12));
    });

    it("should increase by 3", () => {
      const testDrug = new Drug("Fervex", 3, 10);
      testDrug.updateBenefit();
      expect(testDrug).toEqual(new Drug("Fervex", 3, 13));
    });

    it("should drop to 0", () => {
      const testDrug = new Drug("Fervex", -4, 10);
      testDrug.updateBenefit();
      expect(testDrug).toEqual(new Drug("Fervex", -4, 0));
    });
  });

  describe("updateExpirationDate", () => {
    it("should decrease expiresIn by 1", () => {
      const testDrug = new Drug("test", 5, 5);
      testDrug.updateExpirationDate();
      expect(testDrug).toEqual(new Drug("test", 4, 5));
    });

    it("shouldn't decrease expiresIn", () => {
      const testDrug = new Drug("Magic Pill", 5, 5);
      testDrug.updateExpirationDate();
      expect(testDrug).toEqual(new Drug("Magic Pill", 5, 5));
    });
  });
});
