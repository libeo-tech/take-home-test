import { Drug, Pharmacy } from './pharmacy';

describe('Pharmacy', () => {
  it('should decrease the benefit and expiresIn', () => {
    expect(new Pharmacy([new Drug('test', 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug('test', 1, 2)]
    );
  });

  it('should change the benefit twice faster when expiresIn < 0', () => {
    expect(new Pharmacy([new Drug('test', 0, 3)]).updateBenefitValue()).toEqual(
      [new Drug('test', -1, 1)]
    );
  });

  it('should never decrease the benefit below 0', () => {
    expect(new Pharmacy([new Drug('test', 0, 0)]).updateBenefitValue()).toEqual(
      [new Drug('test', -1, 0)]
    );
  });

  it('should never increase the benefit above 50', () => {
    expect(
      new Pharmacy([new Drug('test', 2, 50)]).updateBenefitValue()
    ).toEqual([new Drug('test', 1, 50)]);
  });

  it('should increase the benefit value by benefitUpdateValue if parameter is set', () => {
    expect(
      new Pharmacy([new Drug('test', 5, 5, 2)]).updateBenefitValue()
    ).toEqual([new Drug('test', 4, 7, 2)]);
  });

  it('should change the benefitUpdateValue if benefitAcceleration parameter is set', () => {
    expect(
      new Pharmacy([
        new Drug('Fervex', 7, 10, 1, 1, { 5: 2 }),
      ]).updateBenefitValue()
    ).toEqual([new Drug('Fervex', 6, 11, 1, 1, { 5: 2 })]);
    expect(
      new Pharmacy([
        new Drug('Fervex', 6, 11, 1, 1, { 5: 2 }),
      ]).updateBenefitValue()
    ).toEqual([new Drug('Fervex', 5, 13, 2, 1, { 5: 2 })]);
  });

  it('should change the expiration by expirationUpdateValue if parameter is set', () => {
    expect(
      new Pharmacy([new Drug('test', 5, 5, -1, 0)]).updateBenefitValue()
    ).toEqual([new Drug('test', 5, 4, -1, 0)]);
  });
});
