const Joi = require('joi');
import {Drug} from "../../app/drugs/drug";

describe("Drug", () => {
  describe('When try to instantiate new Drug', () => {
    it("should return a Drug", () => {
        const testDrug = new Drug("test", 1, 2);
        expect(testDrug).toMatchObject({
          name: 'test',
          expiresIn: 1,
          benefit: 2
        })
    });
  });

  describe('When try to get maxBenefitValue', () => {
    it("should return maxBenefitValue value", () => {
        expect(Drug.maxBenefitValue).toEqual(50)
    });
  });

  describe('When try to get minBenefitValue', () => {
    it("should return minBenefitValue value", () => {
        expect(Drug.minBenefitValue).toEqual(0)
    });
  });

  describe('When try to get schema', () => {
    describe('And the wrong schema object is chosen', () => {
      it("should be able to verify the Joi schema", () => {
        expect(Joi.isSchema(Drug.maxBenefitValue)).toEqual(false);
      });
    });

    describe('And the correct schema object is chosen', () => {
      it("should be able to verify the Joi schema", () => {
        expect(Joi.isSchema(Drug.schema)).toEqual(true);
      });
    });
  });

  describe('When validate is called', () => {
    describe('When the name is invalid', () => {
      it("should throw and error", () => {
        try {
          Drug.validate({name: 123213, expiresIn: 10, benefit: 10})
        } catch (error) {
          expect(error).toBeInstanceOf(Error);
          expect(error).toHaveProperty('errors', {name: '"name" must be a string'});
        }
      });
    });

    describe('When the expiresIn is invalid', () => {
      it("should throw and error", () => {
        try {
          Drug.validate({name: 'Doliprane', expiresIn: '2022-03-22', benefit: 10})
        } catch (error) {
          expect(error).toBeInstanceOf(Error);
          expect(error).toHaveProperty('errors', {expiresIn: '"expiresIn" must be a number'});
        }
      });
    });

    describe('When the benefit is invalid', () => {
      it("should throw and error", () => {
        try {
          Drug.validate({name: 'Doliprane', expiresIn: 10, benefit: 'max'})
        } catch (error) {
          expect(error).toBeInstanceOf(Error);
          expect(error).toHaveProperty('errors', {benefit: '"benefit" must be a number'});
        }
      });
    });

    describe('When the data is valid', () => {
      it("should object with updated benefit", () => {
        const result = Drug.validate({name: 'Doliprane', expiresIn: 10, benefit: 20})
        expect(result).toEqual(undefined)
      });
    });
  });
});
