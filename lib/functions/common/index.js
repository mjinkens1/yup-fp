import { isNil } from 'ramda';

const required = (next, validations) => {
  return message => {
    return next([...validations, { type: 'required', message }]);
  };
};

const transform = (next, type) => {
  return (validations, transforms = []) => {
    return transformArgs => {
      return next(validations, [...transforms, { type, transformArgs }]);
    };
  };
};

const validate = (isValid, message, defaultMessage) => {
  const error = !isValid ? message || defaultMessage : null;
  return { error };
};

const validator = (next, type) => {
  return (validations, transforms = []) => {
    return (...args) => {
      const [reference, message] = args.length === 1 ? [args[0]] : args;
      return next([...validations, { type, message, reference }], transforms);
    };
  };
};

const validateRequired = (value, message) => {
  const isValid = !isNil(value);
  const defaultMessage = fieldName => `Field ${fieldName} is required`;
  return validate(isValid, message, defaultMessage);
};

const commonValidatorMap = () => ({
  required: validateRequired,
});

const commonValidators = {
  required,
};

export {
  commonValidatorMap,
  commonValidators,
  required,
  validate,
  validator,
  transform,
};
