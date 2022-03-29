import {Dafalgan} from "../../app/drugs/dafalgan";
import {DrugModel} from "../../app/drugs/models/drug";

describe("Dafalgan", () => {
  const drug = new Dafalgan(1, 2);

  describe('When try to instantiate the class', () => {
    it("should return an object", () => {
      const drug = new Dafalgan(1, 2);

      expect(drug).toBeInstanceOf(Dafalgan)
      expect(drug).toBeInstanceOf(DrugModel)
      expect(drug).toEqual({
        name: 'Dafalgan',
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
          drug.updateBenefitValue({name: 'Dafalgan', expiresIn: '2022-03-22', benefit: 10})
        } catch (error) {
          expect(error).toBeInstanceOf(Error);
          expect(error).toHaveProperty('errors', {expiresIn: '"expiresIn" must be a number'});
        }
      });
    });

    describe('When the benefit is invalid', () => {
      it("should throw and error", () => {
        try {
          drug.updateBenefitValue({name: 'Dafalgan', expiresIn: 10, benefit: 'max'})
        } catch (error) {
          expect(error).toBeInstanceOf(Error);
          expect(error).toHaveProperty('errors', {benefit: '"benefit" must be a number'});
        }
      });
    });

    describe('When the data is valid and the drug isn\'t expired', () => {
      it("should return object with benefit reduced by 2", () => {
        const drugMaxBenefit = new Dafalgan(10, 50);
        const result = drug.updateBenefitValue(drugMaxBenefit);
        expect(result).toEqual({
          name: 'Dafalgan',
          expiresIn: 10,
          benefit: 48
        })
      });
    });

    describe('When the data is valid, the Drug is expired', () => {
      describe('And the Drug benefit is 0', () => {
        it("should return object without any changes", () => {
          const drugMaxBenefit = new Dafalgan(-1, 0);
          const result = drug.updateBenefitValue(drugMaxBenefit);
          expect(result).toEqual({
            name: 'Dafalgan',
            expiresIn: -1,
            benefit: 0
          })
        });
      });

      describe('And the Drug benefit is bigger than 0', () => {
        it("should return object with benefit reduced by twice the original reduction value", () => {
          const drugMaxBenefit = new Dafalgan(-1, 2);
          const result = drug.updateBenefitValue(drugMaxBenefit);
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
          drug.updateExpiresInValue({name: 'Dafalgan', expiresIn: '2022-03-22', benefit: 10})
        } catch (error) {
          expect(error).toBeInstanceOf(Error);
          expect(error).toHaveProperty('errors', {expiresIn: '"expiresIn" must be a number'});
        }
      });
    });

    describe('When the benefit is invalid', () => {
      it("should throw and error", () => {
        try {
          drug.updateExpiresInValue({name: 'Dafalgan', expiresIn: 10, benefit: 'max'})
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
          name: 'Dafalgan',
          expiresIn: 0,
          benefit: 2
        })
      });
    });
  });
});
