import {Drug} from "../../../app/drugs/drug";
import {MagicPillStrategy} from "../../../app/drugs/strategies";

describe("MagicPillStrategy", () => {
  const strategy = new MagicPillStrategy('Magic Pill');

  describe('When try to instantiate the class', () => {
    it("should return an object", () => {
      expect(strategy).toBeInstanceOf(MagicPillStrategy)
      expect(strategy).toMatchObject({
        name: 'Magic Pill',
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
          strategy.updateBenefitValue({name: 'Magic Pill', expiresIn: '2022-03-22', benefit: 10})
        } catch (error) {
          expect(error).toBeInstanceOf(Error);
          expect(error).toHaveProperty('errors', {expiresIn: '"expiresIn" must be a number'});
        }
      });
    });

    describe('When the benefit is invalid', () => {
      it("should throw and error", () => {
        try {
          strategy.updateBenefitValue({name: 'Magic Pill', expiresIn: 10, benefit: 'max'})
        } catch (error) {
          expect(error).toBeInstanceOf(Error);
          expect(error).toHaveProperty('errors', {benefit: '"benefit" must be a number'});
        }
      });
    });

    describe('When the data is valid', () => {
      describe('And the benefit is max value', () => {
        it("should return the same object", () => {
          const magicPill = new Drug("Magic Pill", 1, 50);
          const result = strategy.updateBenefitValue(magicPill)
          expect(result).toEqual({
            name: 'Magic Pill',
            expiresIn: 1,
            benefit: 50
          })
        });
      });

      describe('And the benefit is some value', () => {
        it("should return the same object", () => {
          const magicPill = new Drug("Magic Pill", 15, 33);
          const result = strategy.updateBenefitValue(magicPill)
          expect(result).toEqual({
            name: 'Magic Pill',
            expiresIn: 15,
            benefit: 33
          })
        });
      });

      describe('And the benefit is min value', () => {
        it("should return the same object", () => {
          const magicPill = new Drug("Magic Pill", 10, 0);
          const result = strategy.updateBenefitValue(magicPill)
          expect(result).toEqual({
            name: 'Magic Pill',
            expiresIn: 10,
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
          strategy.updateExpiresInValue({name: 'Magic Pill', expiresIn: '2022-03-22', benefit: 10})
        } catch (error) {
          expect(error).toBeInstanceOf(Error);
          expect(error).toHaveProperty('errors', {expiresIn: '"expiresIn" must be a number'});
        }
      });
    });

    describe('When the benefit is invalid', () => {
      it("should throw and error", () => {
        try {
          strategy.updateExpiresInValue({name: 'Magic Pill', expiresIn: 10, benefit: 'max'})
        } catch (error) {
          expect(error).toBeInstanceOf(Error);
          expect(error).toHaveProperty('errors', {benefit: '"benefit" must be a number'});
        }
      });
    });

    describe('When the data is valid', () => {
      describe('And expiresIn is positive', () => {
        it("should return the same object", () => {
          const magicPill = new Drug("Magic Pill", 11, 2);
          const result = strategy.updateExpiresInValue(magicPill)
          expect(result).toEqual({
            name: 'Magic Pill',
            expiresIn: 11,
            benefit: 2
          })
        });
      });
      describe('And expiresIn is negative', () => {
        it("should return the same object", () => {
          const magicPill = new Drug("Magic Pill", -3, 5);
          const result = strategy.updateExpiresInValue(magicPill)
          expect(result).toEqual({
            name: 'Magic Pill',
            expiresIn: -3,
            benefit: 5
          })
        });
      });
    });
  });
});
