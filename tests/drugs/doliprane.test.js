import {Doliprane} from "../../app/drugs/doliprane";
import {DrugModel} from "../../app/drugs/models/drug";

describe("Doliprane", () => {
  const drug = new Doliprane(1, 2);

  describe('When try to instantiate the class', () => {
    it("should return an object", () => {
      const drug = new Doliprane(1, 2);

      expect(drug).toBeInstanceOf(Doliprane)
      expect(drug).toBeInstanceOf(DrugModel)
      expect(drug).toEqual({
        name: 'Doliprane',
        expiresIn: 1,
        benefit: 2
      })
    });
  });

  describe('When canProcess is called', () => {
    const drug = new Doliprane(1, 2);

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
          expect(error).toHaveProperty('errors', { name: '"name" must be a string' });
        }
      });
    });

    describe('When the expiresIn is invalid', () => {
      it("should throw and error", () => {
        try {
          drug.updateBenefitValue({name: 'Doliprane', expiresIn: '2022-03-22', benefit: 10})
        } catch (error) {
          expect(error).toBeInstanceOf(Error);
          expect(error).toHaveProperty('errors', { expiresIn: '"expiresIn" must be a number' });
        }
      });
    });

    describe('When the benefit is invalid', () => {
      it("should throw and error", () => {
        try {
          drug.updateBenefitValue({name: 'Doliprane', expiresIn: 10, benefit: 'max'})
        } catch (error) {
          expect(error).toBeInstanceOf(Error);
          expect(error).toHaveProperty('errors', { benefit: '"benefit" must be a number' });
        }
      });
    });

    describe('When the data is valid', () => {
      it("should object with updated benefit", () => {
        const result = drug.updateBenefitValue(drug)
        expect(result).toEqual({
          name: 'Doliprane',
          expiresIn: 1,
          benefit: 1
        })
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
          expect(error).toHaveProperty('errors', { name: '"name" must be a string' });
        }
      });
    });

    describe('When the expiresIn is invalid', () => {
      it("should throw and error", () => {
        try {
          drug.updateExpiresInValue({name: 'Doliprane', expiresIn: '2022-03-22', benefit: 10})
        } catch (error) {
          expect(error).toBeInstanceOf(Error);
          expect(error).toHaveProperty('errors', { expiresIn: '"expiresIn" must be a number' });
        }
      });
    });

    describe('When the benefit is invalid', () => {
      it("should throw and error", () => {
        try {
          drug.updateExpiresInValue({name: 'Doliprane', expiresIn: 10, benefit: 'max'})
        } catch (error) {
          expect(error).toBeInstanceOf(Error);
          expect(error).toHaveProperty('errors', { benefit: '"benefit" must be a number' });
        }
      });
    });

    describe('When the data is valid', () => {
      it("should return object with updated benefit", () => {
        const result = drug.updateExpiresInValue(drug)
        expect(result).toEqual({
          name: 'Doliprane',
          expiresIn: 0,
          benefit: 1
        })
      });
    });
  });
});
