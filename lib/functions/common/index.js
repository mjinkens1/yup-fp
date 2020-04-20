// Functions
import { validateRequired } from './validators';

const required = (next, validations) => {
  return message => {
    return next([...validations, { type: 'required', message }]);
  };
};

const nextFunc = validators => {
  return (validations, transforms) => {
    return validators(validations, transforms);
  };
};

const validate = (isValid, message, defaultMessage) => {
  const error = !isValid ? message || defaultMessage : null;
  return { error };
};

const transformer = (next, type) => {
  return (validations, transforms = []) => {
    return transformArgs => {
      return next(validations, [...transforms, { type, transformArgs }]);
    };
  };
};

const validator = (next, type) => {
  return (validations, transforms = []) => {
    return (...args) => {
      const [reference, message] = args.length === 1 ? [args[0]] : args;
      return next([...validations, { type, message, reference }], transforms);
    };
  };
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
  nextFunc,
  required,
  validate,
  validator,
  transformer,
};
