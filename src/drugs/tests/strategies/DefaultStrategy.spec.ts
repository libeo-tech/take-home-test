// DefaultStrategy.test.ts
import DefaultStrategy from "../../strategies/DefaultStrategy";
import Drug from "../../Drug";

describe("DefaultStrategy", () => {
  describe("update", () => {
    it("should decrease expiresIn by 1 after update", () => {
      const drug = new Drug(5, 10);
      const defaultStrategy = new DefaultStrategy();
      const updatedDrug = defaultStrategy.update(drug);
      expect(updatedDrug.expiresIn).toBe(4);
    });

    it("should decrease benefit after update", () => {
      const drug = new Drug(5, 10);
      const defaultStrategy = new DefaultStrategy();
      const updatedDrug = defaultStrategy.update(drug);
      expect(updatedDrug.benefit).toBe(9);
    });

    it("should not decrease benefit below 0 after update", () => {
      const drug = new Drug(5, 0);
      const defaultStrategy = new DefaultStrategy();
      const updatedDrug = defaultStrategy.update(drug);
      expect(updatedDrug.benefit).toBe(0);
    });
  });
});
