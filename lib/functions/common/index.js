// Functions
import { validateRequired } from './validators';

const nextFunc = validators => {
  return (validations, transforms) => {
    return validators(validations, transforms);
  };
};

const validate = (isValid, message, defaultMessage) => {
  const error = !isValid ? message || defaultMessage : null;
  return { error };
};

const transform = (next, type) => {
  return (validations = [], transforms = []) => {
    return transformArgs => {
      return next(validations, [...transforms, { type, transformArgs }]);
    };
  };
};

const validation = (next, type) => {
  return (validations = [], transforms = []) => {
    return (...args) => {
      const [reference, message] = args.length === 1 ? [args[0]] : args;
      return next([...validations, { type, message, reference }], transforms);
    };
  };
};

export { nextFunc, validate, validateRequired, validation, transform };
