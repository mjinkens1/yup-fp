// Functions
import * as I from '../../internal';

export const object = schema => ({
  validate: object => {
    const errors = I.validateObject(schema, object);

    return errors;
  },
});
