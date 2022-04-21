import { Drug, Pharmacy } from './entities';
import { DRUG_NAME } from './constant';

describe('Drug', () => {
  it('The benefit  is never negative', () => {
    expect(new Drug(DRUG_NAME.DOLIPRANE, 2, 0).update()).toEqual(
      new Drug(DRUG_NAME.DOLIPRANE, 1, 0)
    );
  });

  it('Should decrease the benefit twice', () => {
    expect(new Drug(DRUG_NAME.DOLIPRANE, 0, 3).update()).toEqual(
      new Drug(DRUG_NAME.DOLIPRANE, -1, 1)
    );
  });

  it('Nomal drug: should decrease the benefit and expiresIn', () => {
    expect(new Drug(DRUG_NAME.DOLIPRANE, 2, 3).update()).toEqual(
      new Drug(DRUG_NAME.DOLIPRANE, 1, 2)
    );
  });

  it('Nomal drug: should decrease the benefit and expiresIn', () => {
    expect(new Drug(DRUG_NAME.DOLIPRANE, 2, 3).update()).toEqual(
      new Drug(DRUG_NAME.DOLIPRANE, 1, 2)
    );
  });

  it('Herbal Tea: should increases the benefit and  decrease expiresIn', () => {
    expect(new Drug(DRUG_NAME.HERBAL_TEA, 1, 3).update()).toEqual(
      new Drug(DRUG_NAME.HERBAL_TEA, 0, 4)
    );
  });

  it('Herbal Tea: should increases the benefit twice and decrease expiresIn', () => {
    expect(new Drug(DRUG_NAME.HERBAL_TEA, 0, 3).update()).toEqual(
      new Drug(DRUG_NAME.HERBAL_TEA, -1, 5)
    );
  });

  it('Magic Pill: has a fixed benefit and expiresIn', () => {
    expect(new Drug(DRUG_NAME.MAGIC_PILL, 0, 3).update()).toEqual(
      new Drug(DRUG_NAME.MAGIC_PILL, 0, 3)
    );
  });

  it('Fervex expires in 10 days: inscrease benefit 2 and decrease expiresIn', () => {
    expect(new Drug(DRUG_NAME.FERVEX, 9, 5).update()).toEqual(
      new Drug(DRUG_NAME.FERVEX, 8, 7)
    );
  });

  it('Fervex expires in 5 days: inscrease benefit 3 and decrease expiresIn', () => {
    expect(new Drug(DRUG_NAME.FERVEX, 5, 5).update()).toEqual(
      new Drug(DRUG_NAME.FERVEX, 4, 8)
    );
  });

  it('Fervex expired: benefit decrease to 0 and decrease expiresIn', () => {
    expect(new Drug(DRUG_NAME.FERVEX, 0, 5).update()).toEqual(
      new Drug(DRUG_NAME.FERVEX, -1, 0)
    );
  });

  it('Dafalgan: should decrease the benefit twice and expiresIn', () => {
    expect(new Drug(DRUG_NAME.DAFALGAN, 3, 5).update()).toEqual(
      new Drug(DRUG_NAME.DAFALGAN, 2, 3)
    );
  });

  it('Dafalgan expired: should decrease the benefit four times and expiresIn', () => {
    expect(new Drug(DRUG_NAME.DAFALGAN, 0, 5).update()).toEqual(
      new Drug(DRUG_NAME.DAFALGAN, -1, 1)
    );
  });
});

describe('Pharmacy', () => {
  it('Case: Dolipran && Fervex expires in 10 days', () => {
    expect(
      new Pharmacy([
        new Drug(DRUG_NAME.DOLIPRANE, 2, 3),
        new Drug(DRUG_NAME.FERVEX, 9, 5),
      ]).updateBenefitValue()
    ).toEqual([
      new Drug(DRUG_NAME.DOLIPRANE, 1, 2),
      new Drug(DRUG_NAME.FERVEX, 8, 7),
    ]);
  });

  it('Case: Magic Pill && Herbal Tea', () => {
    expect(
      new Pharmacy([
        new Drug(DRUG_NAME.MAGIC_PILL, 0, 3),
        new Drug(DRUG_NAME.HERBAL_TEA, 1, 3),
      ]).updateBenefitValue()
    ).toEqual([
      new Drug(DRUG_NAME.MAGIC_PILL, 0, 3),
      new Drug(DRUG_NAME.HERBAL_TEA, 0, 4),
    ]);
  });
});
