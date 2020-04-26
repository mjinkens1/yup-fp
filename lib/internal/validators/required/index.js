// Functions
import { validate } from '../validate';

// Utils
import * as U from '../../utils';

const defaultMessage = (fieldName, value) => {
  return `Field "${fieldName}" required, received ${value}`;
};

export const required = (message = defaultMessage) => {
  return value => {
    return validate(val => U.not(U.isNil(val)), value, message);
  };
};
