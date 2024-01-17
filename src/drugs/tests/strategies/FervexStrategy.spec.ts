import FervexStrategy from "../../strategies/FervexStrategy";
import Drug from "../../Drug";
import * as constants from "../../../constants";

describe("FervexStrategy", () => {
  describe("update", () => {
    it("should decrease expiresIn by 1 after update", () => {
      const drug = new Drug(5, 10);
      const fervexStrategy = new FervexStrategy();
      const updatedDrug = fervexStrategy.update(drug);
      expect(updatedDrug.expiresIn).toBe(4);
    });

    it("should set benefit to EXPIRATION_THRESHOLD if drug is expired", () => {
      const expiredDrug = new Drug(0, 10);
      const fervexStrategy = new FervexStrategy();
      const updatedDrug = fervexStrategy.update(expiredDrug);
      expect(updatedDrug.benefit).toBe(constants.EXPIRATION_THRESHOLD);
    });
  });
});
