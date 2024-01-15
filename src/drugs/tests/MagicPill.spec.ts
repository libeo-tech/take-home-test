import MagicPill from "../MagicPill";

describe("MagicPill", () => {
  describe("constructor", () => {
    it("should create a MagicPill instance with expiresIn and benefit values", () => {
      const magicPill = new MagicPill(5, 10);
      expect(magicPill.expiresIn).toBe(5);
      expect(magicPill.benefit).toBe(10);
    });
  });

  describe("updateBenefit", () => {
    it("after updatingshould not change expiresIn and benefit", () => {
      const magicPill = new MagicPill(5, 10);
      magicPill.updateBenefit();
      expect(magicPill.expiresIn).toBe(5);
      expect(magicPill.benefit).toBe(10);
    });
  });
});
