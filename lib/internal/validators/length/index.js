// Functions
import { validate } from '../validate';

// Utils
import * as U from '../../utils';

const defaultMessage = (fieldName, value, reference) => {
  return `Field "${fieldName}" must be length ${reference}, received ${value}`;
};

export const length = (message = defaultMessage, reference) => {
  return value => () => {
    return validate(
      (val, ref) => U.equals(ref, U.length(val)),
      value,
      message,
      reference
    );
  };
};
