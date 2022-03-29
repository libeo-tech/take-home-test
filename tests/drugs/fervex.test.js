import {Fervex} from "../../app/drugs/fervex";
import {DrugModel} from "../../app/drugs/models/drug";

describe("Fervex", () => {
  const drug = new Fervex(1, 2);

  describe('When try to instantiate the class', () => {
    it("should return an object", () => {
      const drug = new Fervex(1, 2);

      expect(drug).toBeInstanceOf(Fervex)
      expect(drug).toBeInstanceOf(DrugModel)
      expect(drug).toEqual({
        name: 'Fervex',
        expiresIn: 1,
        benefit: 2
      })
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
          drug.updateBenefitValue({name: 'Fervex', expiresIn: '2022-03-22', benefit: 10})
        } catch (error) {
          expect(error).toBeInstanceOf(Error);
          expect(error).toHaveProperty('errors', {expiresIn: '"expiresIn" must be a number'});
        }
      });
    });

    describe('When the benefit is invalid', () => {
      it("should throw and error", () => {
        try {
          drug.updateBenefitValue({name: 'Fervex', expiresIn: 10, benefit: 'max'})
        } catch (error) {
          expect(error).toBeInstanceOf(Error);
          expect(error).toHaveProperty('errors', {benefit: '"benefit" must be a number'});
        }
      });
    });

    describe('When the data is valid and the drug expired', () => {
      describe('And the benefit is at its max value (50)', () => {
        it("should return the same object", () => {
          const drugMaxBenefit = new Fervex(0, 50);
          const result = drug.updateBenefitValue(drugMaxBenefit)
          expect(result).toEqual({
            name: 'Fervex',
            expiresIn: 0,
            benefit: 0
          })
        });
      });
    });

    describe('When the data is valid and the drug didn\'t expire', () => {
      describe('And the benefit is at its max value (50)', () => {
        it("should return the same object", () => {
          const drugMaxBenefit = new Fervex(1, 50);
          const result = drug.updateBenefitValue(drugMaxBenefit)
          expect(result).toEqual({
            name: 'Fervex',
            expiresIn: 1,
            benefit: 50
          })
        });
      });

      describe('When the benefit is lower than max value (50)', () => {
        describe('And the expiresIn > 10', () => {
          it("should return the same object", () => {
            const drugCloseMaxBenefit = new Fervex(11, 46);
            const result = drug.updateBenefitValue(drugCloseMaxBenefit)
            console.log('RESULT', result)
            expect(result).toEqual({
              name: 'Fervex',
              expiresIn: 11,
              benefit: 47
            })
          });
        });
        describe('And the expiresIn <= 10 && expiresIn > 5', () => {
          it("should return the same object", () => {
            const drugCloseMaxBenefit = new Fervex(10, 46);
            const result = drug.updateBenefitValue(drugCloseMaxBenefit)
            console.log('RESULT', result)
            expect(result).toEqual({
              name: 'Fervex',
              expiresIn: 10,
              benefit: 48
            })
          });
        });

        describe('And the expiresIn <= 5 && expiresIn > 0', () => {
          it("should return the same object", () => {
            const drugCloseMaxBenefit = new Fervex(3, 46);
            const result = drug.updateBenefitValue(drugCloseMaxBenefit)
            console.log('RESULT', result)
            expect(result).toEqual({
              name: 'Fervex',
              expiresIn: 3,
              benefit: 49
            })
          });
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
          drug.updateExpiresInValue({name: 'Fervex', expiresIn: '2022-03-22', benefit: 10})
        } catch (error) {
          expect(error).toBeInstanceOf(Error);
          expect(error).toHaveProperty('errors', {expiresIn: '"expiresIn" must be a number'});
        }
      });
    });

    describe('When the benefit is invalid', () => {
      it("should throw and error", () => {
        try {
          drug.updateExpiresInValue({name: 'Fervex', expiresIn: 10, benefit: 'max'})
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
          name: 'Fervex',
          expiresIn: 0,
          benefit: 2
        })
      });
    });
  });
});
