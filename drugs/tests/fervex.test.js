import Drug from "../drug.class";
import Fervex from "../Fervex.class";

describe("Fervex", () => {
  const testFervex = new Fervex(11, 30);

  it("should incrase the benefit by one unity", () => {
    testFervex.updateBenefitValue();
    expect(testFervex).toEqual(new Drug("Fervex", 10, 31));
  });

  it("should decrease the benefit by two unity if expiration date is equal to or less than 10", () => {
    testFervex.updateBenefitValue();

    expect(testFervex).toEqual(new Drug("Fervex", 9, 33, 2, false));
  });

  it("should decrease the benefit by two unity if expiration date is equal to or less than 5", () => {
    while (testFervex.expiresIn !== 4) {
      testFervex.updateBenefitValue();
    }

    expect(testFervex).toEqual(new Drug("Fervex", 4, 44, 3, false));
  });

  it("should return 0 if the date is expired", () => {
    for (let i = 8; i > 0; i -= 1) {
      testFervex.updateBenefitValue();
    }

    expect(testFervex).toEqual(new Drug("Fervex", -4, 0, 3, true));
  });
});
