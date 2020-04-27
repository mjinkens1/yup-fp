// Functions
import { validate } from '../validate';

// Utils
import * as U from '../../utils';

const defaultMessage = (fieldName, value) => {
  return `Field "${fieldName}" must be a positive number, received ${value}`;
};

export const positive = (message = defaultMessage) => {
  return value => () => {
    return validate(val => U.gte(val, 0), value, message);
  };
};
