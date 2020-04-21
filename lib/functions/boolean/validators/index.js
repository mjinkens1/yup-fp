// Utils
import { isNil, validate } from '../../../utils';

const validateRequired = (value, message) => {
  const isValid = !isNil(value);
  const defaultMessage = fieldName => `Field ${fieldName} is required`;
  return validate(isValid, message, defaultMessage);
};

export { validateRequired };
