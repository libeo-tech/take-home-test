import {Drug} from "../../../app/drugs/drug";
import {DafalganStrategy} from "../../../app/drugs/strategies";

describe("DafalganStrategy", () => {
  const strategy = new DafalganStrategy('Dafalgan');

  describe('When try to instantiate the class', () => {
    it("should return an object", () => {
      expect(strategy).toBeInstanceOf(DafalganStrategy);
      expect(strategy).toMatchObject({
        name: 'Dafalgan',
        updateBenefitValue: expect.any(Function),
        updateExpiresInValue: expect.any(Function),
      });
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
          strategy.updateBenefitValue({name: 'Dafalgan', expiresIn: '2022-03-22', benefit: 10})
        } catch (error) {
          expect(error).toBeInstanceOf(Error);
          expect(error).toHaveProperty('errors', {expiresIn: '"expiresIn" must be a number'});
        }
      });
    });

    describe('When the benefit is invalid', () => {
      it("should throw and error", () => {
        try {
          strategy.updateBenefitValue({name: 'Dafalgan', expiresIn: 10, benefit: 'max'})
        } catch (error) {
          expect(error).toBeInstanceOf(Error);
          expect(error).toHaveProperty('errors', {benefit: '"benefit" must be a number'});
        }
      });
    });

    describe('When the data is valid and the drug isn\'t expired', () => {
      describe('And the benefit is bigger than 2', () => {
        it("should return object with benefit reduced by 2", () => {
          const dafalganMaxBenefit = new Drug("Dafalgan", 10, 50);
          const result = strategy.updateBenefitValue(dafalganMaxBenefit);
          expect(result).toEqual({
            name: 'Dafalgan',
            expiresIn: 10,
            benefit: 48
          })
        });
      });

      describe('And the benefit is smaller than 2', () => {
        it("should return object with benefit equal 0", () => {
          const dafalgan = new Drug("Dafalgan", 10, 1);
          const result = strategy.updateBenefitValue(dafalgan);
          expect(result).toEqual({
            name: 'Dafalgan',
            expiresIn: 10,
            benefit: 0
          })
        });
      });

      describe('And the benefit is 0', () => {
        it("should return object with benefit equal 0", () => {
          const dafalganMinBenefit = new Drug("Dafalgan", 10, 0);
          const result = strategy.updateBenefitValue(dafalganMinBenefit);
          expect(result).toEqual({
            name: 'Dafalgan',
            expiresIn: 10,
            benefit: 0
          })
        });
      });
    });

    describe('When the data is valid, the drug is expired', () => {
      describe('And the benefit is 0', () => {
        it("should return object without any changes", () => {
          const drugMaxBenefit = new Drug("Dafalgan", -1, 0);
          const result = strategy.updateBenefitValue(drugMaxBenefit);
          expect(result).toEqual({
            name: 'Dafalgan',
            expiresIn: -1,
            benefit: 0
          })
        });
      });

      describe('And the benefit is bigger than 4', () => {
        it("should return object with benefit reduced by twice the original reduction value (4)", () => {
          const drugMaxBenefit = new Drug("Dafalgan", -1, 5);
          const result = strategy.updateBenefitValue(drugMaxBenefit);
          expect(result).toEqual({
            name: 'Dafalgan',
            expiresIn: -1,
            benefit: 1
          })
        });
      });

      describe('And the benefit is smaller than or equal 4', () => {
        it("should return object with benefit reduced by twice the original reduction value (4)", () => {
          const drugMaxBenefit = new Drug("Dafalgan", -1, 4);
          const result = strategy.updateBenefitValue(drugMaxBenefit);
          expect(result).toEqual({
            name: 'Dafalgan',
            expiresIn: -1,
            benefit: 0
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
          strategy.updateExpiresInValue({name: 'Dafalgan', expiresIn: '2022-03-22', benefit: 10})
        } catch (error) {
          expect(error).toBeInstanceOf(Error);
          expect(error).toHaveProperty('errors', {expiresIn: '"expiresIn" must be a number'});
        }
      });
    });

    describe('When the benefit is invalid', () => {
      it("should throw and error", () => {
        try {
          strategy.updateExpiresInValue({name: 'Dafalgan', expiresIn: 10, benefit: 'max'})
        } catch (error) {
          expect(error).toBeInstanceOf(Error);
          expect(error).toHaveProperty('errors', {benefit: '"benefit" must be a number'});
        }
      });
    });

    describe('When the data is valid', () => {
      it("should object with updated benefit", () => {
        const dafalgan = new Drug("Dafalgan", 1, 2);
        const result = strategy.updateExpiresInValue(dafalgan)
        expect(result).toEqual({
          name: 'Dafalgan',
          expiresIn: 0,
          benefit: 2
        })
      });
    });
  });
});
