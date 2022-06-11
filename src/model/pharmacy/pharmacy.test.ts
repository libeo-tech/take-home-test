import { Drug } from '../drug/drug';
import { Pharmacy } from './pharmacy';

describe('Pharmacy', () => {
  describe('drug', () => {
    it('should decrease the benefit and expiresIn', () => {
      expect(
        new Pharmacy([new Drug('test', 2, 3)]).updateBenefitValue()
      ).toEqual([new Drug('test', 1, 2)]);
    });

    it('should decrease twice as fast if expired', () => {
      expect(
        new Pharmacy([new Drug('test', -2, 3)]).updateBenefitValue()
      ).toEqual([new Drug('test', -3, 1)]);
    });

    it('should not decrease benefit under 0', () => {
      expect(
        new Pharmacy([new Drug('test', -2, 1)]).updateBenefitValue()
      ).toEqual([new Drug('test', -3, 0)]);
      expect(
        new Pharmacy([new Drug('test', -2, 0)]).updateBenefitValue()
      ).toEqual([new Drug('test', -3, 0)]);
    });
  });

  describe('Fervex', () => {
    it('should increase benefit with time', () => {
      expect(
        new Pharmacy([new Drug('Fervex', 30, 1)]).updateBenefitValue()
      ).toEqual([new Drug('Fervex', 29, 2)]);
    });

    test('benefit + 2 if 10 >= expiresIn > 5', () => {
      expect(
        new Pharmacy([new Drug('Fervex', 10, 1)]).updateBenefitValue()
      ).toEqual([new Drug('Fervex', 9, 3)]);
      expect(
        new Pharmacy([new Drug('Fervex', 6, 1)]).updateBenefitValue()
      ).toEqual([new Drug('Fervex', 5, 3)]);
    });

    test('benefit + 3 if 5 >= expiresIn > 0', () => {
      expect(
        new Pharmacy([new Drug('Fervex', 5, 1)]).updateBenefitValue()
      ).toEqual([new Drug('Fervex', 4, 4)]);
      expect(
        new Pharmacy([new Drug('Fervex', 1, 1)]).updateBenefitValue()
      ).toEqual([new Drug('Fervex', 0, 4)]);
    });

    test('benefit drops to 0 if 0 >= expiresIn > -∞', () => {
      expect(
        new Pharmacy([new Drug('Fervex', 0, 1)]).updateBenefitValue()
      ).toEqual([new Drug('Fervex', -1, 0)]);
    });
  });

  describe('Herbal Tea', () => {
    it('should increase benefit with time', () => {
      expect(
        new Pharmacy([new Drug('Herbal Tea', 30, 1)]).updateBenefitValue()
      ).toEqual([new Drug('Herbal Tea', 29, 2)]);
    });

    it('should increase benefit twice as much if expired', () => {
      expect(
        new Pharmacy([new Drug('Herbal Tea', 0, 1)]).updateBenefitValue()
      ).toEqual([new Drug('Herbal Tea', -1, 3)]);
    });
  });

  describe('Magic Pill', () => {
    it('should not change expiration or benefit with time', () => {
      expect(
        new Pharmacy([new Drug('Magic Pill', 30, 1)]).updateBenefitValue()
      ).toEqual([new Drug('Magic Pill', 30, 1)]);
      expect(
        new Pharmacy([new Drug('Magic Pill', 0, 1)]).updateBenefitValue()
      ).toEqual([new Drug('Magic Pill', 0, 1)]);
      expect(
        new Pharmacy([new Drug('Magic Pill', -30, 1)]).updateBenefitValue()
      ).toEqual([new Drug('Magic Pill', -30, 1)]);
    });
  });
});
