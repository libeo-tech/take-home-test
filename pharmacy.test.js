import { Drug, Pharmacy } from "./pharmacy";

describe("Pharmacy (Drug)", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2)]
    );
  });

  it("should not decrease the benefit and decrease expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 0, 0)]).updateBenefitValue()).toEqual(
      [new Drug("test", -1, 0)]
    );
  });

  it("should decrease the benefit twice as fast and decrease expiresIn", () => {
    expect(new Pharmacy([new Drug("test", 0, 10)]).updateBenefitValue()).toEqual(
      [new Drug("test", -1, 8)]
    );
  });

  it("should decrease the benefit and expiresIn for both drugs", () => {
    expect(new Pharmacy([new Drug("test", 2, 3), new Drug("test", 3, 4)]).updateBenefitValue()).toEqual(
      [new Drug("test", 1, 2), new Drug("test", 2, 3)]
    );
  });
})

describe("Pharmacy (Herbal Tea)", () => {
  it("should increase the benefit and decrease expiresIn", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", 5, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea", 4, 4)]
    );
  });

  it("should increase the benefit twice as fast and decrease expiresIn", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", 0, 3)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea", -1, 5)]
    );
  });

  it("should increase the benefit to 50 and decrease expiresIn", () => {
    expect(new Pharmacy([new Drug("Herbal Tea", 0, 49)]).updateBenefitValue()).toEqual(
      [new Drug("Herbal Tea", -1, 50)]
    );
  });
})

describe("Pharmacy (Magic Pill)", () => {
  it("should not change benefit and expiresIn (Magic Pill)", () => {
    expect(new Pharmacy([new Drug("Magic Pill", 10, 40)]).updateBenefitValue()).toEqual(
      [new Drug("Magic Pill", 10, 40)]
    );
  });
})

describe("Pharmacy (Fervex)", () => {
  it("should decrease the benefit and expiresIn", () => {
    expect(new Pharmacy([new Drug("Fervex", 20, 10)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 19, 9)]
    );
  });

  it("should increase the benefit by two and decrease expiresIn", () => {
    expect(new Pharmacy([new Drug("Fervex", 10, 10)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 9, 12)]
    );
  });

  it("should increase the benefit by three and decrease expiresIn", () => {
    expect(new Pharmacy([new Drug("Fervex", 4, 10)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 3, 13)]
    );
  });

  it("should decrease the benefit to zero and decrease expiresIn", () => {
    expect(new Pharmacy([new Drug("Fervex", 0, 25)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", -1, 0)]
    );
  });

  it("should increase the benefit to 50 and decrease expiresIn", () => {
    expect(new Pharmacy([new Drug("Fervex", 3, 49)]).updateBenefitValue()).toEqual(
      [new Drug("Fervex", 2, 50)]
    );
  });
});
