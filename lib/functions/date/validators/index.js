// Constants
import { DATE } from '../../../constants';

// Functions
import { validate } from '../../common';
import { validateType } from '../../types';

const validateMax = (value, reference, message) => {
  validateType(Date, DATE)(value, message);
  validateType(Date, DATE)(reference, message);
  const isValid = value <= reference;
  const defaultMessage = fieldName =>
    `Field ${fieldName} must be no greater than ${reference}`;

  return validate(isValid, message, defaultMessage);
};

const validateMin = (value, reference, message) => {
  validateType(Date, DATE)(value, message);
  validateType(Date, DATE)(reference, message);
  const isValid = value >= reference;
  const defaultMessage = fieldName =>
    `Field ${fieldName} must be no less than ${reference}`;

  return validate(isValid, message, defaultMessage);
};

export { validateMax, validateMin };
