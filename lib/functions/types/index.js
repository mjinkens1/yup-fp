import { isNil, toLower, type } from 'ramda';

import {
  ARRAY,
  BOOLEAN,
  DATE,
  NUMBER,
  OBJECT,
  REGEX,
  STRING,
} from '../../constants';

const typeValidatorMap = () => ({
  array: validateType(Array, ARRAY),
  boolean: validateType(Boolean, BOOLEAN),
  date: validateType(Date, DATE),
  number: validateType(Number, NUMBER),
  regex: validateType(RegExp, REGEX),
  // object:
  string: validateType(String, STRING),
});

const isOfType = (fieldType, next) => {
  return childrenOrMessage => {
    const validation = { type: toLower(fieldType) };
    const key = fieldType === OBJECT ? 'children' : 'message';
    return next([{ ...validation, [key]: childrenOrMessage }]);
  };
};

const validateType = (fieldType, displayName) => {
  return (value, message) => {
    const isValid = !isNil(value);

    const defaultMessage = fieldName => {
      return `Field ${fieldName} must be of type ${displayName}, receieved ${type(
        value
      )}`;
    };

    const error = !isValid ? message || defaultMessage : null;
    return { error };
  };
};

export { isOfType, typeValidatorMap, validateType };
