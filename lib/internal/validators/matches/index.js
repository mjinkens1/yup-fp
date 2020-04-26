// Functions
import { validate } from '../validate';

// Utils
import * as U from '../../utils';

const defaultMessage = (fieldName, value, reference) => {
  return `Field "${fieldName}" must match pattern ${reference.toString()}, received ${U.type(
    value
  )}`;
};

export const matches = (message = defaultMessage, reference) => {
  return value => () => {
    return validate((val, ref) => U.test(ref, val), value, message, reference);
  };
};
