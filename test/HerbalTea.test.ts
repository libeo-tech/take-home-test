import Pharmacy from '../src/Pharmacy';
import Drug from '../src/Model/Drug';

describe('Pharmacy', () => {
  it('should decrease  herbal tea  when 2 of expires benefit and expiresIn', () => {
    expect(new Pharmacy([new Drug('Herbal Tea', 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug('Herbal Tea', 1, 4)],
    );
  });
});

describe('Pharmacy', () => {
  it('should decrease  hearbal tea when 12 of expires benefit and expiresIn', () => {
    expect(new Pharmacy([new Drug('Herbal Tea', 12, 11)]).updateBenefitValue()).toEqual(
      [new Drug('Herbal Tea', 11, 12)],
    );
  });
});

describe('Pharmacy', () => {
  it('should decrease  herbal tea when -3 of expires benefit and expiresIn', () => {
    expect(new Pharmacy([new Drug('Herbal Tea', 8, 12)]).updateBenefitValue()).toEqual(
      [new Drug('Herbal Tea', 7, 13)],
    );
  });
});

describe('Pharmacy', () => {
  it('should decrease  fervex when -3 of expires benefit and expiresIn', () => {
    expect(new Pharmacy([new Drug('Herbal Tea', -3, 10)]).updateBenefitValue()).toEqual(
      [new Drug('Herbal Tea', -4, 12)],
    );
  });
});
