// Functions
import { validateObject } from '../../internal/validateObject';

export const object = schema => ({
  validate: validateObject(schema),
});
