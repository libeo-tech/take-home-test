import Drug from '../src/Model/Drug';
import Pharmacy from '../src/Pharmacy';

describe('Pharmacy', () => {
  it('should decrease Magic pill  when 2 of expires benefit and expiresIn', () => {
    expect(new Pharmacy([new Drug('Magic Pill', 2, 3)]).updateBenefitValue()).toEqual(
      [new Drug('Magic Pill', 2, 3)],
    );
  });
});
