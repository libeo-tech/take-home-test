import {MagicPill} from "../../app/drugs/magic-pill";
import {DrugModel} from "../../app/drugs/models/drug";

describe("MagicPill", () => {
  const drug = new MagicPill(1, 2);

  describe('When try to instantiate the class', () => {
    it("should return an object", () => {
      const drug = new MagicPill(1, 2);

      expect(drug).toBeInstanceOf(MagicPill)
      expect(drug).toBeInstanceOf(DrugModel)
      expect(drug).toEqual({
        name: 'Magic Pill',
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
          drug.updateBenefitValue({name: 'Magic Pill', expiresIn: '2022-03-22', benefit: 10})
        } catch (error) {
          expect(error).toBeInstanceOf(Error);
          expect(error).toHaveProperty('errors', {expiresIn: '"expiresIn" must be a number'});
        }
      });
    });

    describe('When the benefit is invalid', () => {
      it("should throw and error", () => {
        try {
          drug.updateBenefitValue({name: 'Magic Pill', expiresIn: 10, benefit: 'max'})
        } catch (error) {
          expect(error).toBeInstanceOf(Error);
          expect(error).toHaveProperty('errors', {benefit: '"benefit" must be a number'});
        }
      });
    });

    describe('When the data is valid', () => {
        it("should return the same object", () => {
          const result = drug.updateBenefitValue(drug)
          expect(result).toEqual({
            name: 'Magic Pill',
            expiresIn: 1,
            benefit: 2
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
          expect(error).toHaveProperty('errors', {name: '"name" must be a string'});
        }
      });
    });

    describe('When the expiresIn is invalid', () => {
      it("should throw and error", () => {
        try {
          drug.updateExpiresInValue({name: 'Magic Pill', expiresIn: '2022-03-22', benefit: 10})
        } catch (error) {
          expect(error).toBeInstanceOf(Error);
          expect(error).toHaveProperty('errors', {expiresIn: '"expiresIn" must be a number'});
        }
      });
    });

    describe('When the benefit is invalid', () => {
      it("should throw and error", () => {
        try {
          drug.updateExpiresInValue({name: 'Magic Pill', expiresIn: 10, benefit: 'max'})
        } catch (error) {
          expect(error).toBeInstanceOf(Error);
          expect(error).toHaveProperty('errors', {benefit: '"benefit" must be a number'});
        }
      });
    });

    describe('When the data is valid', () => {
      it("should return the same object", () => {
        const result = drug.updateExpiresInValue(drug)
        expect(result).toEqual({
          name: 'Magic Pill',
          expiresIn: 1,
          benefit: 2
        })
      });
    });
  });
});
