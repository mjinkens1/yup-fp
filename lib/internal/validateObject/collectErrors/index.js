// Functions
import { flattenObject } from '../flattenObject';

// Utils
import * as U from '../../utils';

const defaultOptions = { silent: true };

function ValidationError(message, errors) {
  return {
    message: new Error(message),
    errors,
  };
}

ValidationError.prototype = Object.create(Error.prototype);

const returnSilently = errors => errors;
const throwErrors = errors => {
  throw new ValidationError('[yval] Validation Error', errors);
};

export const collectErrors = (validation, options = defaultOptions) => {
  const hasErrors = U.compose(U.flip(U.gt)(0), U.length);
  const errors = U.compose(U.filter(hasErrors), flattenObject)(validation);

  return U.ifElse(
    () => U.prop('silent', options),
    returnSilently,
    throwErrors
  )(errors);
};
