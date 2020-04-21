// Constants
import { EMAIL_REGEX, REGEX, STRING } from '../../../constants';

// Functions
import { validate } from '../../common';
import { validateType } from '../../types';

// Utils
import { isNil, trim } from '../../../utils';

const validateEmail = (value, message) => {
  validateType(String, STRING)(value, message);
  const isValid = EMAIL_REGEX.test(trim(value));

  const defaultMessage = fieldName =>
    `Field ${fieldName} must be a valid email`;

  return validate(isValid, message, defaultMessage);
};

const validateLength = (value, reference, message) => {
  validateType(String, STRING)(value, message);
  const isValid = value.length === reference;

  const defaultMessage = fieldName =>
    `Field ${fieldName} length must be ${reference}`;

  return validate(isValid, message, defaultMessage);
};

const validateMatches = (value, reference, message) => {
  validateType(String, STRING)(value, message);
  validateType(RegExp, REGEX);
  const isValid = reference.test(value);

  const defaultMessage = fieldName =>
    `Field ${fieldName} is invalid (pattern mismatch)`;

  return validate(isValid, message, defaultMessage);
};

const validateMax = (value, reference, message) => {
  validateType(String, STRING)(value, message);
  const isValid = value.length <= reference;

  const defaultMessage = fieldName =>
    `Field ${fieldName} length must be no greater than ${reference}`;

  return validate(isValid, message, defaultMessage);
};

const validateMin = (value, reference, message) => {
  validateType(String, STRING)(value, message);
  const isValid = value.length >= reference;

  const defaultMessage = fieldName =>
    `Field ${fieldName} length must be no less than ${reference}`;

  return validate(isValid, message, defaultMessage);
};

const validateRequired = (value, message) => {
  const isValid = !isNil(value);
  const defaultMessage = fieldName => `Field ${fieldName} is required`;
  return validate(isValid, message, defaultMessage);
};

export {
  validateEmail,
  validateLength,
  validateMatches,
  validateMax,
  validateMin,
  validateRequired,
};
