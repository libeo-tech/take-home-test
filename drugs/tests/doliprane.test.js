import Drug from "../drug.class";
import Doliprane from "../doliprane.class";

describe("Doliprane", () => {
  const testDoliprane = new Doliprane(4, 10);

  it("should decrease the benefit by one unity", () => {
    testDoliprane.updateBenefitValue();
    expect(testDoliprane).toEqual(new Drug("Doliprane", 3, 9));
  });

  it("should decrease the benefit by one unit before expiration and two units after that", () => {
    while (!testDoliprane.isExpired) {
      testDoliprane.updateBenefitValue();
    }

    expect(testDoliprane).toEqual(new Drug("Doliprane", -1, 4, 2, true));
  });

  it("should decrease the benefit by two units after expiration", () => {
    testDoliprane.updateBenefitValue();

    expect(testDoliprane).toEqual(new Drug("Doliprane", -2, 2, 2, true));
  });

  it("should stop the decrease in benefits at 0", () => {
    for (let i = 5; i > 0; i -= 1) {
      testDoliprane.updateBenefitValue();
    }

    expect(testDoliprane).toEqual(new Drug("Doliprane", -7, 0, 2, true));
  });
});
