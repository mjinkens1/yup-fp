// Functions
import { validate } from '../validate';

// Utils
import * as U from '../../utils';

const defaultMessage = (fieldName, value, reference) => {
  return `Field "${fieldName}" must be greater than ${reference}, received ${value}`;
};

export const greaterThan = (message = defaultMessage) => {
  return value => () => {
    return validate((val, ref) => U.lt(ref, val), value, message);
  };
};
