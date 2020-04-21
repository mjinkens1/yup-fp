// Functions
import { validateRequired } from './validators';

const validate = (isValid, message, defaultMessage) => {
  const error = !isValid ? message || defaultMessage : null;
  return { error };
};

const transform = action => {
  return transformArgs => ({ type: 'transform', action, transformArgs });
};

const validation = action => {
  return (...args) => {
    const [reference, message] = args.length === 1 ? [args[0]] : args;
    return { type: 'validation', action, message, reference };
  };
};

export { validate, validateRequired, validation, transform };
