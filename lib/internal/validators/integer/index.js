// Functions
import { validate } from '../validate';

// Utils
import * as U from '../../utils';

const defaultMessage = (fieldName, value) => {
  return `Field "${fieldName}" must be Integer, received ${U.type(value)}`;
};

export const integer = (message = defaultMessage) => {
  return value => {
    return validate(val => Number.isInteger(val), value, message);
  };
};
