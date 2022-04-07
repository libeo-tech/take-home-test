import Drug from "../drug.class";

describe("Drug", () => {
  it("should decrease the expiresIn value by one unity", () => {
    const testDrug = new Drug("test", 1, 10);

    testDrug.decrementExpirationDate();
    expect(testDrug).toEqual(new Drug("test", 0, 10));

    testDrug.decrementExpirationDate();
    expect(testDrug).toEqual(new Drug("test", -1, 10, 2, true));
  });

  it("should decrease the benefit value by one unity before expiration", () => {
    const testDrug = new Drug("test", 1, 10);

    testDrug.decrementBenefit();
    expect(testDrug).toEqual(new Drug("test", 1, 9));
  });

  it("should decrease the benefit value by two unity after expiration", () => {
    const testDrug = new Drug("test", 0, 10);

    testDrug.decrementExpirationDate();
    testDrug.decrementBenefit();
    expect(testDrug).toEqual(new Drug("test", -1, 8, 2, true));
  });

  it("should stop decrease the benefit value after reaching the minimum value", () => {
    const testDrug = new Drug("test", -1, 0);

    testDrug.decrementBenefit();
    expect(testDrug).toEqual(new Drug("test", -1, 0));
  });

  it("should stop decrease the benefit value after reaching the minimum value (2)", () => {
    const testDrug = new Drug("test", -1, 1);

    testDrug.decrementBenefit();
    expect(testDrug).toEqual(new Drug("test", -1, 0));
  });
});
