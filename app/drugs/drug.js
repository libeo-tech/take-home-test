const Joi = require('joi');

const MAX_BENEFIT_VALUE = 50;
const MIN_BENEFIT_VALUE = 0;

const schema = Joi.object().keys({
  name: Joi.string().min(3).required(),
  expiresIn: Joi.number().required(),
  benefit: Joi.number().max(MAX_BENEFIT_VALUE).required()
});

export class Drug {
  constructor(name, expiresIn, benefit, handler) {
    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  static get schema() {
    return schema;
  }

  static get maxBenefitValue() {
    return MAX_BENEFIT_VALUE;
  }

  static get minBenefitValue() {
    return MIN_BENEFIT_VALUE;
  }

  static validate(data) {
    const { error } = schema.validate(data)

    if (error) {
      const validationError = new Error(error);
      validationError.errors = error.details.reduce((a, e) => {
        a[e.path.join('.')] = e.message;

        return a;
      }, {});

      throw validationError;
    }
  }
}
