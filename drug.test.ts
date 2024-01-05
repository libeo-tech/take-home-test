import { Drug } from "./drug";

describe("Drug", () => {
  it("should decrease the benefit and expiresIn", () => {
    const drug = new Drug("test", 2, 2);
    drug.updateBenefitValue();

    expect(drug.expiresIn).toEqual(1);
    expect(drug.benefit).toEqual(1);
  });

  it("should decrease the benefit as twice once expired", () => {
    const drug = new Drug("test", 0, 5);
    drug.updateBenefitValue();

    expect(drug.expiresIn).toEqual(-1);
    expect(drug.benefit).toEqual(3);
  });

  it("should not have negative benefit", () => {
    const drug = new Drug("test", 0, 0);
    drug.updateBenefitValue();

    expect(drug.benefit).toEqual(0);
  });
});

describe('"Herbal Tea" Drug', () => {
  it("should increase the benefit", () => {
    const drug = new Drug("Herbal Tea", 2, 2);
    drug.updateBenefitValue();

    expect(drug.expiresIn).toEqual(1);
    expect(drug.benefit).toEqual(3);
  });

  it("should increase the benefit twice as fast once expired", () => {
    const drug = new Drug("Herbal Tea", 0, 5);
    drug.updateBenefitValue();

    expect(drug.expiresIn).toEqual(-1);
    expect(drug.benefit).toEqual(7);
  });

  it("should not have benefit more than 50", () => {
    const drug = new Drug("Herbal Tea", 0, 50);
    drug.updateBenefitValue();

    expect(drug.benefit).toEqual(50);
  });
});

describe('"Magic Pill" Drug', () => {
  it("should not decrease the benefit", () => {
    const drug = new Drug("Magic Pill", 2, 2);
    drug.updateBenefitValue();

    expect(drug.benefit).toEqual(2);
  });

  it("should never expires", () => {
    const drug = new Drug("Magic Pill", 0, 5);
    drug.updateBenefitValue();

    expect(drug.expiresIn).toEqual(0);
  });
});

describe('"Fervex" Drug', () => {
  it("should increase the benefit by 1 ten days upper expiration date", () => {
    const drug = new Drug("Fervex", 11, 2);
    drug.updateBenefitValue();

    expect(drug.benefit).toEqual(3);
  });

  it("should increase the benefit by 2 nine days under expiration date and five days upper expiration date", () => {
    const drug = new Drug("Fervex", 8, 2);
    drug.updateBenefitValue();

    expect(drug.benefit).toEqual(4);
  });

  it("should increase the benefit by 3 four days under expiration date", () => {
    const drug = new Drug("Fervex", 3, 2);
    drug.updateBenefitValue();

    expect(drug.benefit).toEqual(5);
  });

  it("should not have benefit more than 50", () => {
    const drug = new Drug("Fervex", 1, 50);
    drug.updateBenefitValue();

    expect(drug.benefit).toEqual(50);
  });

  it("should lose its benefit once expired", () => {
    const drug = new Drug("Fervex", 0, 50);
    drug.updateBenefitValue();

    expect(drug.benefit).toEqual(0);
  });
});


describe('"Dafalgan" Drug', () => {
  it("should decrease benefit as twice as fast as normal drugs", () => {
    const dafalgan = new Drug("Dafalgan", 2, 3);
    dafalgan.updateBenefitValue();

    expect(dafalgan.benefit).toEqual(1);

    const expiredDafalgan = new Drug("Dafalgan", 0, 5);
    expiredDafalgan.updateBenefitValue();

    expect(expiredDafalgan.benefit).toEqual(1);
  });
});
