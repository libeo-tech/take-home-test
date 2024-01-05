import Drug from "../drug.class";
import MagicPill from "../magic-pill.class";

describe("MagicPill", () => {
  const magicPill = new MagicPill(5, 12);

  it("should not change expiresIn and benefits", () => {
    for (let i = 18; i > 0; i -= 1) {
      magicPill.updateBenefitValue();
    }

    expect(magicPill).toEqual(new Drug("Magic Pill", 5, 12));
  });
});
