const Joi = require('joi');

const schema = Joi.object().keys({
  name: Joi.string().min(3).required(),
  expiresIn: Joi.number().required(),
  benefit: Joi.number().required()
});

const drugs = {
  DOLIPRANE: 'Doliprane',
  HERBAL_TEA: 'Herbal Tea',
  FERVEX: 'Fervex',
  MAGIC_PILL: 'Magic Pill',
  DAFALGAN: 'Dafalgan',
};

const MAX_BENEFIT_VALUE = 50;

export class DrugModel {
  constructor(name, expiresIn, benefit) {
    if (this.constructor === DrugModel) {
      throw new TypeError('Abstract class "DrugModel" cannot be instantiated directly');
    }

    this.name = name;
    this.expiresIn = expiresIn;
    this.benefit = benefit;
  }

  static get schema() {
    return schema;
  }

  static get drugs() {
    return drugs;
  }

  static get maxBenefitValue() {
    return MAX_BENEFIT_VALUE;
  }

  static canProcess(name) {
    throw new Error('Method not implemented');
  }

  static updateBenefitValue(data) {
    // this.drugs[i].benefit = this.drugs[i].benefit - 1;
    // if ben is bigger than 0 reduce ben by 1 and return the drug
    data.benefit = data.benefit > 0
      ? data.benefit - 1
      : data.benefit;

    return data;
  }

  static updateExpiresInValue(data) {
    // this.drugs[i].expiresIn = this.drugs[i].expiresIn - 1;
    data.expiresIn = data.expiresIn - 1;

    return data;
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
