import Drug from "../drug.class";
import Dafalgan from "../Dafalgan.class";

describe("Dafalgan", () => {
  const testDafalgan = new Dafalgan(4, 10);

  it("should decrease the benefit by two units", () => {
    testDafalgan.updateBenefitValue();
    expect(testDafalgan).toEqual(new Drug("Dafalgan", 3, 8, 2));
  });

  it("should decrease the benefit by two units before expiration and four units after that", () => {
    while (!testDafalgan.isExpired) {
      testDafalgan.updateBenefitValue();
    }

    expect(testDafalgan).toEqual(new Drug("Dafalgan", -1, 0, 4, true));
  });

  it("should decrease the benefit by eight unity after the date expirated", () => {
    testDafalgan.updateBenefitValue();

    expect(testDafalgan).toEqual(new Drug("Dafalgan", -2, 0, 4, true));
  });

  it("should stop the decrease in benefits at 0", () => {
    for (let i = 5; i > 0; i -= 1) {
      testDafalgan.updateBenefitValue();
    }

    expect(testDafalgan).toEqual(new Drug("Dafalgan", -7, 0, 4, true));
  });
});
