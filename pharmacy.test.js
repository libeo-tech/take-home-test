import { Drug, Pharmacy } from "./pharmacy.js";



describe("Pharmacy and regular drugs", () => {
  it("should decrease the benefit and expiresIn", () => {
    const pharmacy = new Pharmacy([
      new Drug("test", 2, 3),
      new Drug("test", 20, 30)
    ]);
    const updated = pharmacy.updateBenefitValue();
    const expected = [new Drug("test", 1, 2), new Drug("test", 19, 29)];

    expect(updated).toEqual(expected);
  });

  it("should not have a negative benefit", () => {
    const pharmacy = new Pharmacy([new Drug("test", 1, 1)]);
    pharmacy.updateBenefitValue();
    pharmacy.updateBenefitValue();
    pharmacy.updateBenefitValue();
    const expected = [new Drug("test", -2, 0)];

    expect(pharmacy.drugs).toEqual(expected);
  });

  it("should degrade the benefit twice as fast after expiration", () => {
    const pharmacy = new Pharmacy([new Drug("test", 1, 10)]);
    pharmacy.updateBenefitValue();
    pharmacy.updateBenefitValue();
    pharmacy.updateBenefitValue();
    const expected = [new Drug("test", -2, 5)];

    expect(pharmacy.drugs).toEqual(expected);
  });
});


describe("Special drugs", () => {
  it('should not update Magic Pill', () => {
    const drug = new Drug('Magic Pill', 5, 10);
    updateDrugBy(drug, 5);
    
    expect(drug.expiresIn).toBe(5);
    expect(drug.benefit).toBe(10);
  })

  it('should increase benefit for Herbal Tea', () => {
    const drug = new Drug('Herbal Tea', 5, 10);
    updateDrugBy(drug, 2);

    expect(drug.expiresIn).toBe(3);
    expect(drug.benefit).toBe(12);
  })

  it('should increase benefit twice for Herbal Tea after expiration', () => {
    const drug = new Drug('Herbal Tea', 1, 10);
    updateDrugBy(drug, 3);

    expect(drug.expiresIn).toBe(-2);
    expect(drug.benefit).toBe(15);
  })

  it('should not have a benefit over 50 for Herbal Tea', () => {
    const drug = new Drug('Herbal Tea', 1, 49);
    updateDrugBy(drug, 2);

    expect(drug.expiresIn).toBe(-1);
    expect(drug.benefit).toBe(50);
  })

  it('should increase benefit accordingly for Fervex', () => {
    const drug = new Drug('Fervex', 6, 10);

    drug.updateBenefit();
    expect(drug.expiresIn).toBe(5);
    expect(drug.benefit).toBe(12);

    updateDrugBy(drug, 2);
    expect(drug.expiresIn).toBe(3);
    expect(drug.benefit).toBe(18);

    updateDrugBy(drug, 3);
    expect(drug.expiresIn).toBe(0);
    expect(drug.benefit).toBe(27);

    drug.updateBenefit();
    expect(drug.expiresIn).toBe(-1);
    expect(drug.benefit).toBe(0);
  })

  it('should not have a benefit over 50 for Fervex', () => {
    const drug = new Drug('Herbal Tea', 10, 45);
    updateDrugBy(drug, 8);

    expect(drug.expiresIn).toBe(2);
    expect(drug.benefit).toBe(50);
  })
})


/**
 * @param {Drug} drug
 * @param {number} times
 * @returns {Drug}
 */
function updateDrugBy(drug, times) {
  for (let i = 0; i < times; i++) {
    drug.updateBenefit()
  }
  return drug
}