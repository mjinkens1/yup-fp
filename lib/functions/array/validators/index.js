// Constants
import { ARRAY, NUMBER } from '../../../constants';

// Functions
import { validateType } from '../../types';

// Utils
import { isNil, validate } from '../../../utils';

const validateMax = (value, reference, message) => {
  validateType(Array, ARRAY)(value, message);
  validateType(Number, NUMBER)(reference, message);
  const isValid = value.length <= reference;
  const defaultMessage = fieldName =>
    `Field ${fieldName} must be no greater than ${reference}`;

  return validate(isValid, message, defaultMessage);
};

const validateMin = (value, reference, message) => {
  validateType(Array, ARRAY)(value, message);
  validateType(Number, NUMBER)(reference, message);
  const isValid = value.length >= reference;
  const defaultMessage = fieldName =>
    `Field ${fieldName} must be no less than ${reference}`;

  return validate(isValid, message, defaultMessage);
};

const validateOf = (value, reference, message) => {
  const isValid = false;
  const defaultMessage = fieldName =>
    `Field ${fieldName} must be be an array of ${reference}`;

  return validate(isValid, message, defaultMessage);
};

const validateRequired = (value, message) => {
  const isValid = !isNil(value);
  const defaultMessage = fieldName => `Field ${fieldName} is required`;
  return validate(isValid, message, defaultMessage);
};

export { validateMax, validateMin, validateOf, validateRequired };
