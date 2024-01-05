import Drug from "../drug.class";
import HerbalTea from "../herbal-tea.class";

describe("HerbalTea", () => {
  const testHerbalTea = new HerbalTea(4, 30);

  it("should incrase the benefit by one unity", () => {
    testHerbalTea.updateBenefitValue();
    expect(testHerbalTea).toEqual(new Drug("Herbal Tea", 3, 31));
  });

  it("should incrase the benefit by one unit before expiration and two units after that", () => {
    while (!testHerbalTea.isExpired) {
      testHerbalTea.updateBenefitValue();
    }

    expect(testHerbalTea).toEqual(new Drug("Herbal Tea", -1, 36, 2, true));
  });

  it("should incrase the benefit by two units after expiration", () => {
    testHerbalTea.updateBenefitValue();

    expect(testHerbalTea).toEqual(new Drug("Herbal Tea", -2, 38, 2, true));
  });

  it("should stop the incrase in benefits at 0", () => {
    for (let i = 8; i > 0; i -= 1) {
      testHerbalTea.updateBenefitValue();
    }

    expect(testHerbalTea).toEqual(new Drug("Herbal Tea", -10, 50, 2, true));
  });
});
