import {
  ARRAY,
  BOOLEAN,
  DATE,
  NUMBER,
  STRING,
  field,
  validateObject,
} from '../internal';

export const array = field(ARRAY);
export const boolean = field(BOOLEAN);
export const date = field(DATE);
export const number = field(NUMBER);
export const string = field(STRING);

export const object = schema => ({
  validate: (object, options) => {
    const errors = validateObject(schema, object, options);

    return errors;
  },
});
