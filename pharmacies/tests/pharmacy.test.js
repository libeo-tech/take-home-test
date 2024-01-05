import Drug from "../../drugs/drug.class";
import Doliprane from "../../drugs/doliprane.class";
import HerbalTea from "../../drugs/herbal-tea.class";
import Fervex from "../../drugs/fervex.class";
import MagicPill from "../../drugs/magic-pill.class";
import Pharmacy from "../../pharmacies/pharmacy.class";
import Dafalgan from "../../drugs/dafalgan.class";

describe("Pharmacy", () => {
  it("should decrease the benefit and expiresIn", () => {
    const drugs = [
      new Doliprane(20, 30),
      new HerbalTea(10, 5),
      new Fervex(5, 40),
      new MagicPill(15, 40),
      new Dafalgan(20, 30)
    ];

    const drugsResult = [
      new Drug("Doliprane", 19, 29),
      new Drug("Herbal Tea", 9, 6),
      new Drug("Fervex", 4, 43),
      new Drug("Magic Pill", 15, 40),
      new Drug("Dafalgan", 19, 28)
    ];

    expect(new Pharmacy(drugs).updateBenefitValue()).toEqual(
      drugsResult.map(drug => drug.format(drug))
    );
  });
});
