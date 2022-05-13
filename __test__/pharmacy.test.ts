import { Pharmacy } from '../src/pharmacy';
import { Drug } from '../src/drug';

describe('Pharmacy with generic drug', () => {
  it('should decrease the benefit and expiresIn', () => {
    expect(
      new Pharmacy([new Drug('test', 2, 3)]).updateBenefitValue()
    ).toEqual([new Drug('test', 1, 2)]);
  });

  it('should set a negative expireIn but not negative benefit', () => {
    const drugStore = new Pharmacy([new Drug('test', 0, 3)]);
    expect(drugStore.updateBenefitValue()).toEqual([new Drug('test', -1, 1)]);
    expect(drugStore.updateBenefitValue()).toEqual([new Drug('test', -2, 0)]);
    expect(drugStore.updateBenefitValue()).toEqual([new Drug('test', -3, 0)]);
  });

  it('should not set benefit higher than 50', () => {
    const drugStore = new Pharmacy([new Drug('test', 2, 300)]);
    expect(drugStore.drugs[0].benefit).toEqual(50);
  });

  it('should not set a negative benefit', () => {
    const drugStore = new Pharmacy([new Drug('test', 2, -3)]);
    expect(drugStore.drugs[0].benefit).toEqual(0);
  });
});

describe('Pharmacy with Magic Pill', () => {
  it('should not change any value', () => {
    expect(
      new Pharmacy([new Drug('Magic Pill', 2, 3)]).updateBenefitValue()
    ).toEqual([new Drug('Magic Pill', 2, 3)]);
  });
});

describe('Pharmacy with Herbal Tea', () => {
  it('should increase benefit by 1', () => {
    expect(
      new Pharmacy([new Drug('Herbal Tea', 5, 3)]).updateBenefitValue()
    ).toEqual([new Drug('Herbal Tea', 4, 4)]);
  });

  it('should increase benefit by 2 when expired', () => {
    expect(
      new Pharmacy([new Drug('Herbal Tea', 0, 3)]).updateBenefitValue()
    ).toEqual([new Drug('Herbal Tea', -1, 5)]);
  });
});

describe('Pharmacy with Fervex', () => {
  it('should increase benefit by 1 when expires in more than 10 days', () => {
    expect(
      new Pharmacy([new Drug('Fervex', 15, 3)]).updateBenefitValue()
    ).toEqual([new Drug('Fervex', 14, 4)]);
  });

  it('should increase benefit by 2 when expires in more than 5 days and less than 11', () => {
    expect(
      new Pharmacy([new Drug('Fervex', 8, 3)]).updateBenefitValue()
    ).toEqual([new Drug('Fervex', 7, 5)]);
  });

  it('should increase benefit by 3 when expires in more than 0 days and less than 6', () => {
    expect(
      new Pharmacy([new Drug('Fervex', 4, 3)]).updateBenefitValue()
    ).toEqual([new Drug('Fervex', 3, 6)]);
  });

  it('should set benefit to 0 when expired', () => {
    const drugStore = new Pharmacy([new Drug('Fervex', 2, 3)]);
    expect(drugStore.updateBenefitValue()).toEqual([new Drug('Fervex', 1, 6)]);
    expect(drugStore.updateBenefitValue()).toEqual([new Drug('Fervex', 0, 9)]);
    expect(drugStore.updateBenefitValue()).toEqual([new Drug('Fervex', -1, 0)]);
    expect(drugStore.updateBenefitValue()).toEqual([new Drug('Fervex', -2, 0)]);
  });
});

describe('Pharmacy with Dafalgan', () => {
  it('should decrease the benefit and expiresIn twice as generic Drug', () => {
    const drugStore = new Pharmacy([new Drug('Dafalgan', 2, 42)]);
    expect(drugStore.updateBenefitValue()).toEqual([new Drug('Dafalgan', 1, 40)]);
    expect(drugStore.updateBenefitValue()).toEqual([new Drug('Dafalgan', 0, 38)]);
    expect(drugStore.updateBenefitValue()).toEqual([new Drug('Dafalgan', -1, 34)]);
    expect(drugStore.updateBenefitValue()).toEqual([new Drug('Dafalgan', -2, 30)]);
    expect(drugStore.updateBenefitValue()).toEqual([new Drug('Dafalgan', -3, 26)]);
  });
});
