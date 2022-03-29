const Joi = require('joi');
import {DrugModel} from "../../../app/drugs/models/drug";

describe("DrugModel", () => {
  describe('When try to instantiate abstract DrugModel', () => {
    it("should throw an error", () => {
      try {
        const drug = new DrugModel("test", 1, 2)
      } catch (error) {
        expect(error).toBeInstanceOf(TypeError)
        expect(error).toHaveProperty('message', 'Abstract class "DrugModel" cannot be instantiated directly')
      }
    });
  });

  describe('When try to get schema', () => {
    describe('And the wrong schema object is chosen', () => {
      it("should be able to verify the Joi schema", () => {
        expect(Joi.isSchema(DrugModel.maxBenefitValue)).toEqual(false);
      });
    });

    describe('And the correct schema object is chosen', () => {
      it("should be able to verify the Joi schema", () => {
        expect(Joi.isSchema(DrugModel.schema)).toEqual(true);
      });
    });
  });

  describe('When updateBenefitValue is called', () => {
    describe('and the schema is valid and the Drug benefit is 0', () => {
      it("should return object without any changes", () => {
        const result = DrugModel.updateBenefitValue({name: 'test', expiresIn: -1, benefit: 0});

        expect(result).toEqual({
          name: 'test',
          expiresIn: -1,
          benefit: 0
        });
      });
    });

    describe('and the schema is valid and the Drug is expired', () => {
      it("should return object with benefit reduced by 2", () => {
        const result = DrugModel.updateBenefitValue({name: 'test', expiresIn: -1, benefit: 20});

        expect(result).toEqual({
          name: 'test',
          expiresIn: -1,
          benefit: 18
        });
      });
    });

    describe('and the schema is valid and the Drug isn\'t expired', () => {
      it("should return object with benefit reduced by 1", () => {
        const result = DrugModel.updateBenefitValue({name: 'test', expiresIn: 10, benefit: 20});

        expect(result).toEqual({
          name: 'test',
          expiresIn: 10,
          benefit: 19
        });
      });
    });
  });

  describe('When updateExpiresInValue is called', () => {
    describe('and the schema is valid', () => {
      it("should return object with updated value", () => {
        const result = DrugModel.updateExpiresInValue({name: 'test', expiresIn: 10, benefit: 20});

        expect(result).toEqual({
          name: 'test',
          expiresIn: 9,
          benefit: 20
        });
      });
    });
  });

  describe('When validate is called', () => {
    describe('When the name is invalid', () => {
      it("should throw and error", () => {
        try {
          DrugModel.validate({name: 123213, expiresIn: 10, benefit: 10})
        } catch (error) {
          expect(error).toBeInstanceOf(Error);
          expect(error).toHaveProperty('errors', {name: '"name" must be a string'});
        }
      });
    });

    describe('When the expiresIn is invalid', () => {
      it("should throw and error", () => {
        try {
          DrugModel.validate({name: 'Doliprane', expiresIn: '2022-03-22', benefit: 10})
        } catch (error) {
          expect(error).toBeInstanceOf(Error);
          expect(error).toHaveProperty('errors', {expiresIn: '"expiresIn" must be a number'});
        }
      });
    });

    describe('When the benefit is invalid', () => {
      it("should throw and error", () => {
        try {
          DrugModel.validate({name: 'Doliprane', expiresIn: 10, benefit: 'max'})
        } catch (error) {
          expect(error).toBeInstanceOf(Error);
          expect(error).toHaveProperty('errors', {benefit: '"benefit" must be a number'});
        }
      });
    });

    describe('When the data is valid', () => {
      it("should object with updated benefit", () => {
        const result = DrugModel.validate({name: 'Doliprane', expiresIn: 10, benefit: 20})
        expect(result).toEqual(undefined)
      });
    });
  });
});
