// Constants
import { EMAIL_REGEX } from '../../constants';

// Functions
import { validate } from '../validate';

// Utils
import * as U from '../../utils';

const defaultMessage = (fieldName, value) => {
  return `Field "${fieldName}" must be a valid email address, received ${value}`;
};

export const email = (message = defaultMessage) => {
  return value => () => {
    return validate(val => U.test(EMAIL_REGEX, val), value, message);
  };
};
