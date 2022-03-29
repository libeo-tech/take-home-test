import {HerbalTea} from "../../app/drugs/herbal-tea";
import {DrugModel} from "../../app/drugs/models/drug";

describe("HerbalTea", () => {
  const drug = new HerbalTea(1, 2);

  describe('When try to instantiate the class', () => {
    it("should return an object", () => {
      const drug = new HerbalTea(1, 2);

      expect(drug).toBeInstanceOf(HerbalTea)
      expect(drug).toBeInstanceOf(DrugModel)
      expect(drug).toEqual({
        name: 'Herbal Tea',
        expiresIn: 1,
        benefit: 2
      })
    });
  });

  describe('When canProcess is called', () => {
    const drug = new HerbalTea(1, 2);

    describe('and the name is invalid', () => {
      it("should return false", () => {
        const isProcessable = drug.canProcess('testName')
        expect(isProcessable).toEqual(false);
      });
    });

    describe('and the name is valid', () => {
      it("should return false", () => {
        const isProcessable = drug.canProcess(drug.name)
        expect(isProcessable).toEqual(true);
      });
    });
  });

  describe('When updateBenefitValue is called', () => {
    describe('When the name is invalid', () => {
      it("should throw and error", () => {
        try {
          drug.updateBenefitValue({name: 123213, expiresIn: 10, benefit: 10})
        } catch (error) {
          expect(error).toBeInstanceOf(Error);
          expect(error).toHaveProperty('errors', {name: '"name" must be a string'});
        }
      });
    });

    describe('When the expiresIn is invalid', () => {
      it("should throw and error", () => {
        try {
          drug.updateBenefitValue({name: 'Herbal Tea', expiresIn: '2022-03-22', benefit: 10})
        } catch (error) {
          expect(error).toBeInstanceOf(Error);
          expect(error).toHaveProperty('errors', {expiresIn: '"expiresIn" must be a number'});
        }
      });
    });

    describe('When the benefit is invalid', () => {
      it("should throw and error", () => {
        try {
          drug.updateBenefitValue({name: 'Herbal Tea', expiresIn: 10, benefit: 'max'})
        } catch (error) {
          expect(error).toBeInstanceOf(Error);
          expect(error).toHaveProperty('errors', {benefit: '"benefit" must be a number'});
        }
      });
    });

    describe('When the data is valid and the drug didn\'t expire', () => {
      describe('And the benefit is at its max value (50)', () => {
        it("should return the same object", () => {
          const drugMaxBenefit = new HerbalTea(1, 50);
          const result = drug.updateBenefitValue(drugMaxBenefit)
          expect(result).toEqual({
            name: 'Herbal Tea',
            expiresIn: 1,
            benefit: 50
          })
        });
      });

      describe('And the benefit is lower than max value (50)', () => {
        it("should return the same object", () => {
          const drugCloseMaxBenefit = new HerbalTea(1, 49);
          const result = drug.updateBenefitValue(drugCloseMaxBenefit)
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
          const drugMaxBenefit = new HerbalTea(0, 50);
          const result = drug.updateBenefitValue(drugMaxBenefit)
          expect(result).toEqual({
            name: 'Herbal Tea',
            expiresIn: 0,
            benefit: 50
          })
        });
      });

      describe('And the benefit is lower than max value (50)', () => {
        it("should return the same object", () => {
          const drugCloseMaxBenefit = new HerbalTea(-1, 49);
          const result = drug.updateBenefitValue(drugCloseMaxBenefit)
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
          drug.updateExpiresInValue({name: 123213, expiresIn: 10, benefit: 10})
        } catch (error) {
          expect(error).toBeInstanceOf(Error);
          expect(error).toHaveProperty('errors', {name: '"name" must be a string'});
        }
      });
    });

    describe('When the expiresIn is invalid', () => {
      it("should throw and error", () => {
        try {
          drug.updateExpiresInValue({name: 'Herbal Tea', expiresIn: '2022-03-22', benefit: 10})
        } catch (error) {
          expect(error).toBeInstanceOf(Error);
          expect(error).toHaveProperty('errors', {expiresIn: '"expiresIn" must be a number'});
        }
      });
    });

    describe('When the benefit is invalid', () => {
      it("should throw and error", () => {
        try {
          drug.updateExpiresInValue({name: 'Herbal Tea', expiresIn: 10, benefit: 'max'})
        } catch (error) {
          expect(error).toBeInstanceOf(Error);
          expect(error).toHaveProperty('errors', {benefit: '"benefit" must be a number'});
        }
      });
    });

    describe('When the data is valid', () => {
      it("should object with updated benefit", () => {
        const result = drug.updateExpiresInValue(drug)
        expect(result).toEqual({
          name: 'Herbal Tea',
          expiresIn: 0,
          benefit: 2
        })
      });
    });
  });
});
