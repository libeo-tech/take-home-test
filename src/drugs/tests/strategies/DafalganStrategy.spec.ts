// DafalganStrategy.test.ts
import DafalganStrategy from "../../strategies/DafalganStrategy";
import Drug from "../../Drug";

describe("DafalganStrategy", () => {
  describe("update", () => {
    it("should decrease expiresIn by 1 after update", () => {
      const dafalgan = new Drug(5, 10);
      const dafalganStrategy = new DafalganStrategy();
      const updatedDafalgan = dafalganStrategy.update(dafalgan);
      expect(updatedDafalgan.expiresIn).toBe(4);
    });

    it("should decrease benefit twice as fast after update", () => {
      const dafalgan = new Drug(5, 10);
      const dafalganStrategy = new DafalganStrategy();
      const updatedDafalgan = dafalganStrategy.update(dafalgan);
      expect(updatedDafalgan.benefit).toBe(8);
    });

    it("should not decrease benefit below 0 after update", () => {
      const dafalgan = new Drug(5, 1);
      const dafalganStrategy = new DafalganStrategy();
      const updatedDafalgan = dafalganStrategy.update(dafalgan);
      expect(updatedDafalgan.benefit).toBe(0);
    });
  });
});
