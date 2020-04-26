// Functions
import { validate } from '../validate';

// Utils
import * as U from '../../utils';

const defaultMessage = (fieldName, value, reference) => {
  return `Field "${fieldName}" must be ${reference}, received ${U.type(value)}`;
};

export const fieldType = (message = defaultMessage, reference) => {
  return value => {
    return validate(
      (val, ref) =>
        U.ifElse(U.isNil, () => true, U.compose(U.equals(ref), U.type))(val),
      value,
      message,
      reference
    );
  };
};
