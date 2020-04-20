// Constants
import { NUMBER } from '../../../constants';

// Functions
import { validate } from '../../common';
import { validateType } from '../../types';

const validateGreaterThan = (value, reference, message) => {
  validateType(Number, NUMBER)(value, message);
  const isValid = value > reference;
  const defaultMessage = fieldName =>
    `Field ${fieldName} must be greater than ${reference}`;

  return validate(isValid, message, defaultMessage);
};

const validateInteger = (value, message) => {
  validateType(Number, NUMBER)(value, message);
  const isValid = Number.isInteger(value);
  const defaultMessage = fieldName => `Field ${fieldName} must be an integer`;

  return validate(isValid, message, defaultMessage);
};

const validateLessThan = (value, reference, message) => {
  validateType(Number, NUMBER)(value, message);
  const isValid = value < reference;
  const defaultMessage = fieldName =>
    `Field ${fieldName} must be less than ${reference}`;

  return validate(isValid, message, defaultMessage);
};

const validateMax = (value, reference, message) => {
  validateType(Number, NUMBER)(value, message);
  const isValid = value <= reference;
  const defaultMessage = fieldName =>
    `Field ${fieldName} must be no greater than ${reference}`;

  return validate(isValid, message, defaultMessage);
};

const validateMin = (value, reference, message) => {
  validateType(Number, NUMBER)(value, message);
  const isValid = value >= reference;
  const defaultMessage = fieldName =>
    `Field ${fieldName} must be no less than ${reference}`;

  return validate(isValid, message, defaultMessage);
};

const validateNegative = (value, message) => {
  validateType(Number, NUMBER)(value, message);
  const isValid = value < 0;
  const defaultMessage = fieldName =>
    `Field ${fieldName} must be a negative number`;

  return validate(isValid, message, defaultMessage);
};

const validatePositive = (value, message) => {
  validateType(Number, NUMBER)(value, message);
  const isValid = value >= 0;
  const defaultMessage = fieldName =>
    `Field ${fieldName} must be a positive number`;

  return validate(isValid, message, defaultMessage);
};

export {
  validateGreaterThan,
  validateInteger,
  validateLessThan,
  validateMax,
  validateMin,
  validateNegative,
  validatePositive,
};
