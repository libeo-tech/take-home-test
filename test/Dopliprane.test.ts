import Pharmacy from '../src/Pharmacy';
import Drug from '../src/Model/Drug';

describe('Pharmacy', () => {
  it('should decrease  Doliprane  when 2 of expires benefit and expiresIn', () => {
    expect(new Pharmacy([new Drug('Doliprane', 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug('Doliprane', 1, 2)],
    );
  });
});

describe('Pharmacy', () => {
  it('should decrease  Doliprane when 12 of expires benefit and expiresIn', () => {
    expect(new Pharmacy([new Drug('Doliprane', 12, 11)]).updateBenefitValue()).toEqual(
      [new Drug('Doliprane', 11, 10)],
    );
  });
});

describe('Pharmacy', () => {
  it('should decrease  Doliprane when -3 of expires benefit and expiresIn', () => {
    expect(new Pharmacy([new Drug('Doliprane', 8, 12)]).updateBenefitValue()).toEqual(
      [new Drug('Doliprane', 7, 11)],
    );
  });
});

describe('Pharmacy', () => {
  it('should decrease  fervex when -3 of expires benefit and expiresIn', () => {
    expect(new Pharmacy([new Drug('Doliprane', -3, 10)]).updateBenefitValue()).toEqual(
      [new Drug('Doliprane', -4, 8)],
    );
  });
});
