import Drug from "../Drug";
import * as constants from "../../constants";

describe("Drug", () => {
  describe("constructor", () => {
    it("should create a Drug instance with the given expiresIn and benefit", () => {
      const drug = new Drug(5, 10);
      expect(drug.expiresIn).toBe(5);
      expect(drug.benefit).toBe(10);
    });
  });

  describe("decreaseBenefitTwice", () => {
    it("should decrease benefit by DEGRADATION_EXPIRED", () => {
      const drug = new Drug(5, 10);
      drug.decreaseBenefitTwice();
      expect(drug.benefit).toBe(10 - constants.DEGRADATION_EXPIRED);
    });
  });

  describe("handleExpiration", () => {
    it("should not decrease benefit when expiresIn is above or equal to threshold", () => {
      const drug = new Drug(5, 10);
      drug.handleExpiration();
      expect(drug.benefit).toBe(10);
    });
  });

  describe("increaseBenefit", () => {
    it("should increase benefit by DEGRADATION_NORMAL when expiresIn is above or equal to threshold", () => {
      const drug = new Drug(5, 10);
      drug.increaseBenefit();
      expect(drug.benefit).toBe(10 + constants.DEGRADATION_NORMAL);
    });
  });

  describe("ensureBenefitBounds", () => {
    it("should set benefit to 0 if it's negative", () => {
      const drug = new Drug(5, -5);
      drug.ensureBenefitBounds();
      expect(drug.benefit).toBe(0);
    });

    it("should set benefit to BENEFIT_UPPER_BOUND if it's above the upper bound", () => {
      const drug = new Drug(5, constants.BENEFIT_UPPER_BOUND + 5);
      drug.ensureBenefitBounds();
      expect(drug.benefit).toBe(constants.BENEFIT_UPPER_BOUND);
    });

    it("should not change benefit if it's within bounds", () => {
      const drug = new Drug(5, 10);
      drug.ensureBenefitBounds();
      expect(drug.benefit).toBe(10);
    });
  });

  describe("isExpired", () => {
    it("should return false if expiresIn is above or equal to threshold", () => {
      const drug = new Drug(5, 10);
      expect(drug.isExpired()).toBe(false);
    });
  });
});
