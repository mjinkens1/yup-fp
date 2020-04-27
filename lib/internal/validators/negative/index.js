// Functions
import { validate } from '../validate';

// Utils
import * as U from '../../utils';

const defaultMessage = (fieldName, value) => {
  return `Field "${fieldName}" must be a negative number, received ${value}`;
};

export const negative = (message = defaultMessage) => {
  return value => () => {
    return validate(val => U.lt(val, 0), value, message);
  };
};
