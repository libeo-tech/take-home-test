import Pharmacy from '../src/Pharmacy';
import Drug from '../src/Model/Drug';

describe('Pharmacy', () => {
  it('should decrease  fervex  when 2 of expires benefit and expiresIn', () => {
    expect(new Pharmacy([new Drug('Fervex', 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug('Fervex', 1, 6)],
    );
  });
});

describe('Pharmacy', () => {
  it('should decrease  fervex when 12 of expires benefit and expiresIn', () => {
    expect(new Pharmacy([new Drug('Fervex', 12, 11)]).updateBenefitValue()).toEqual(
      [new Drug('Fervex', 11, 12)],
    );
  });
});

describe('Pharmacy', () => {
  it('should decrease  fervex when -3 of expires benefit and expiresIn', () => {
    expect(new Pharmacy([new Drug('Fervex', 8, 12)]).updateBenefitValue()).toEqual(
      [new Drug('Fervex', 7, 14)],
    );
  });
});

describe('Pharmacy', () => {
  it('should decrease  fervex when -3 of expires benefit and expiresIn', () => {
    expect(new Pharmacy([new Drug('Fervex', -3, 10)]).updateBenefitValue()).toEqual(
      [new Drug('Fervex', -4, 0)],
    );
  });
});
