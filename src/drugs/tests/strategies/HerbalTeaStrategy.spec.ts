// HerbalTeaStrategy.test.ts
import HerbalTeaStrategy from "../../strategies/HerbalTeaStrategy";
import Drug from "../../Drug";

describe("HerbalTeaStrategy", () => {
  describe("update", () => {
    it("should decrease expiresIn by 1 after update", () => {
      const drug = new Drug(5, 10);
      const herbalTeaStrategy = new HerbalTeaStrategy();
      const updatedDrug = herbalTeaStrategy.update(drug);
      expect(updatedDrug.expiresIn).toBe(4);
    });

    it("should increase benefit after update", () => {
      const drug = new Drug(5, 10);
      const herbalTeaStrategy = new HerbalTeaStrategy();
      const updatedDrug = herbalTeaStrategy.update(drug);
      expect(updatedDrug.benefit).toBe(11);
    });
  });
});
