// Dafalgan.test.ts
import Dafalgan from "../Dafalgan";

describe("Dafalgan", () => {
  describe("constructor", () => {
    it("should create a Dafalgan instance with expiresIn and benefit values", () => {
      const dafalgan = new Dafalgan(5, 10);
      expect(dafalgan.expiresIn).toBe(5);
      expect(dafalgan.benefit).toBe(10);
    });
  });

  describe("updateBenefit", () => {
    it("should decrease benefit by 2 and expiresIn by 1 after update", () => {
      const dafalgan = new Dafalgan(5, 10);
      dafalgan.updateBenefit();
      expect(dafalgan.expiresIn).toBe(4);
      expect(dafalgan.benefit).toBe(8);
    });

    it("should not decrease benefit below 0 after update", () => {
      const dafalgan = new Dafalgan(5, 1);
      dafalgan.updateBenefit();
      expect(dafalgan.expiresIn).toBe(4);
      expect(dafalgan.benefit).toBe(0);
    });
  });
});
