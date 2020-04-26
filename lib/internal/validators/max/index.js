// Functions
import { validate } from '../validate';

// Utils
import * as U from '../../utils';

const defaultMessage = (fieldName, value, reference) => {
  return `Field "${fieldName}" must be no greater than ${reference}, received ${value}`;
};

export const max = (message = defaultMessage, reference) => {
  return value => {
    return validate((val, ref) => U.lte(val, ref), value, message, reference);
  };
};
