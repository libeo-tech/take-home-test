import {Drug} from "../../../app/drugs/drug";
import {DolipraneStrategy} from "../../../app/drugs/strategies";

describe("DolipraneStrategy", () => {
  const strategy = new DolipraneStrategy('Doliprane');

  describe('When try to instantiate the class', () => {
    it("should return an object", () => {
      expect(strategy).toBeInstanceOf(DolipraneStrategy)
      expect(strategy).toMatchObject({
        name: 'Doliprane',
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
          expect(error).toHaveProperty('errors', { name: '"name" must be a string' });
        }
      });
    });

    describe('When the expiresIn is invalid', () => {
      it("should throw and error", () => {
        try {
          strategy.updateBenefitValue({name: 'Doliprane', expiresIn: '2022-03-22', benefit: 10})
        } catch (error) {
          expect(error).toBeInstanceOf(Error);
          expect(error).toHaveProperty('errors', { expiresIn: '"expiresIn" must be a number' });
        }
      });
    });

    describe('When the benefit is invalid', () => {
      it("should throw and error", () => {
        try {
          strategy.updateBenefitValue({name: 'Doliprane', expiresIn: 10, benefit: 'max'})
        } catch (error) {
          expect(error).toBeInstanceOf(Error);
          expect(error).toHaveProperty('errors', { benefit: '"benefit" must be a number' });
        }
      });
    });

    describe('When the data is valid', () => {
      describe('And the benefit is bigger than 0', () => {
        it("should return benefit reduced by 1", () => {
          const doliprane = new Drug("Doliprane", 1, 2);
          const result = strategy.updateBenefitValue(doliprane)
          expect(result).toEqual({
            name: 'Doliprane',
            expiresIn: 1,
            benefit: 1
          })
        });
      });

      describe('And the benefit is bigger than 0', () => {
        it("should return the same object", () => {
          const doliprane = new Drug("Doliprane", 1, 0);
          const result = strategy.updateBenefitValue(doliprane)
          expect(result).toEqual({
            name: 'Doliprane',
            expiresIn: 1,
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
          expect(error).toHaveProperty('errors', { name: '"name" must be a string' });
        }
      });
    });

    describe('When the expiresIn is invalid', () => {
      it("should throw and error", () => {
        try {
          strategy.updateExpiresInValue({name: 'Doliprane', expiresIn: '2022-03-22', benefit: 10})
        } catch (error) {
          expect(error).toBeInstanceOf(Error);
          expect(error).toHaveProperty('errors', { expiresIn: '"expiresIn" must be a number' });
        }
      });
    });

    describe('When the benefit is invalid', () => {
      it("should throw and error", () => {
        try {
          strategy.updateExpiresInValue({name: 'Doliprane', expiresIn: 10, benefit: 'max'})
        } catch (error) {
          expect(error).toBeInstanceOf(Error);
          expect(error).toHaveProperty('errors', { benefit: '"benefit" must be a number' });
        }
      });
    });

    describe('When the data is valid', () => {
      it("should return object with updated benefit", () => {
        const doliprane = new Drug("Doliprane", 1, 1);
        const result = strategy.updateExpiresInValue(doliprane)
        expect(result).toEqual({
          name: 'Doliprane',
          expiresIn: 0,
          benefit: 1
        })
      });
    });
  });
});
