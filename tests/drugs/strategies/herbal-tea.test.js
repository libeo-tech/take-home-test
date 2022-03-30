import {Drug} from "../../../app/drugs/drug";
import {HerbalTeaStrategy} from "../../../app/drugs/strategies";

describe("HerbalTeaStrategy", () => {
  const strategy = new HerbalTeaStrategy( 'Herbal Tea');

  describe('When try to instantiate the class', () => {
    it("should return an object", () => {
      expect(strategy).toBeInstanceOf(HerbalTeaStrategy)
      expect(strategy).toMatchObject({
        name: 'Herbal Tea',
        updateBenefitValue: expect.any(Function),
        updateExpiresInValue: expect.any(Function),
      })
    });
  });

  describe('When updateBenefitValue is called', () => {
    describe('When the name is invalid', () => {
      it("should throw and error", () => {
        try {
          strategy.updateBenefitValue({name: 123213, expiresIn: 10, benefit: 10})
        } catch (error) {
          expect(error).toBeInstanceOf(Error);
          expect(error).toHaveProperty('errors', {name: '"name" must be a string'});
        }
      });
    });

    describe('When the expiresIn is invalid', () => {
      it("should throw and error", () => {
        try {
          strategy.updateBenefitValue({name: 'Herbal Tea', expiresIn: '2022-03-22', benefit: 10})
        } catch (error) {
          expect(error).toBeInstanceOf(Error);
          expect(error).toHaveProperty('errors', {expiresIn: '"expiresIn" must be a number'});
        }
      });
    });

    describe('When the benefit is invalid', () => {
      it("should throw and error", () => {
        try {
          strategy.updateBenefitValue({name: 'Herbal Tea', expiresIn: 10, benefit: 'max'})
        } catch (error) {
          expect(error).toBeInstanceOf(Error);
          expect(error).toHaveProperty('errors', {benefit: '"benefit" must be a number'});
        }
      });
    });

    describe('When the data is valid and the drug didn\'t expire', () => {
      describe('And the benefit is at its max value (50)', () => {
        it("should return the same object", () => {
          const herbalTeaMaxBenefit = new Drug( 'Herbal Tea', 1, 50);
          const result = strategy.updateBenefitValue(herbalTeaMaxBenefit)
          expect(result).toEqual({
            name: 'Herbal Tea',
            expiresIn: 1,
            benefit: 50
          })
        });
      });

      describe('And the benefit is lower than max value (50)', () => {
        it("should return benefit increade by 1", () => {
          const drugCloseMaxBenefit = new Drug( 'Herbal Tea', 1, 49);
          const result = strategy.updateBenefitValue(drugCloseMaxBenefit)
          expect(result).toEqual({
            name: 'Herbal Tea',
            expiresIn: 1,
            benefit: 50
          })
        });
      });
    });

    describe('When the data is valid and the drug expired', () => {
      describe('And the benefit is at its max value (50)', () => {
        it("should return the same object", () => {
          const herbalTeaMaxBenefit = new Drug( 'Herbal Tea', 0, 50);
          const result = strategy.updateBenefitValue(herbalTeaMaxBenefit)
          expect(result).toEqual({
            name: 'Herbal Tea',
            expiresIn: 0,
            benefit: 50
          })
        });
      });

      describe('And the benefit is lower than max value (50)', () => {
        it("should return benefit increased by 2", () => {
          const herbalTeaCloseMaxBenefit = new Drug( 'Herbal Tea', -1, 47);
          const result = strategy.updateBenefitValue(herbalTeaCloseMaxBenefit)
          expect(result).toEqual({
            name: 'Herbal Tea',
            expiresIn: -1,
            benefit: 49
          })
        });
      });

      describe('And the benefit is lower than max value (50)', () => {
        it("should return max benefit", () => {
          const herbalTeaCloseMaxBenefit = new Drug( 'Herbal Tea', -1, 49);
          const result = strategy.updateBenefitValue(herbalTeaCloseMaxBenefit)
          expect(result).toEqual({
            name: 'Herbal Tea',
            expiresIn: -1,
            benefit: 50
          })
        });
      });
    });
  });

  describe('When updateExpiresInValue is called', () => {
    describe('When the name is invalid', () => {
      it("should throw and error", () => {
        try {
          strategy.updateExpiresInValue({name: 123213, expiresIn: 10, benefit: 10})
        } catch (error) {
          expect(error).toBeInstanceOf(Error);
          expect(error).toHaveProperty('errors', {name: '"name" must be a string'});
        }
      });
    });

    describe('When the expiresIn is invalid', () => {
      it("should throw and error", () => {
        try {
          strategy.updateExpiresInValue({name: 'Herbal Tea', expiresIn: '2022-03-22', benefit: 10})
        } catch (error) {
          expect(error).toBeInstanceOf(Error);
          expect(error).toHaveProperty('errors', {expiresIn: '"expiresIn" must be a number'});
        }
      });
    });

    describe('When the benefit is invalid', () => {
      it("should throw and error", () => {
        try {
          strategy.updateExpiresInValue({name: 'Herbal Tea', expiresIn: 10, benefit: 'max'})
        } catch (error) {
          expect(error).toBeInstanceOf(Error);
          expect(error).toHaveProperty('errors', {benefit: '"benefit" must be a number'});
        }
      });
    });

    describe('When the data is valid', () => {
      it("should object with updated benefit", () => {
        const herbalTea = new Drug( 'Herbal Tea', 1, 2);
        const result = strategy.updateExpiresInValue(herbalTea)
        expect(result).toEqual({
          name: 'Herbal Tea',
          expiresIn: 0,
          benefit: 2
        })
      });
    });
  });
});
